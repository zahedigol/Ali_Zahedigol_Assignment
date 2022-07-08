import codecs
import csv
import decimal
from pathlib import Path

from django.db.models import F
from django.utils.dateparse import parse_date


def normalize_product_name(product_name: str):
    return product_name.lower().strip().replace(' ', '_')


def import_sales_from_csv(model, user_id: int, fixture_file: Path = None, reader=None):
    if not fixture_file and not reader:
        raise ValueError('Either fixture_file or reader must be provided')
    if fixture_file and reader:
        raise ValueError('Only one of fixture_file or reader must be provided')

    if reader:
        return _import_with_reader(model, reader, user_id)
    with open(fixture_file, mode='rb') as reader:
        return _import_with_reader(model, reader, user_id)


def _import_with_reader(model, reader, user_id: int):
    # TODO: check structure of csv file. (columns, types, etc.)
    sniffer = csv.Sniffer()
    dialect = sniffer.sniff(reader.readline().decode('utf-8'))
    reader.seek(0)
    csv_reader = csv.DictReader(
        codecs.iterdecode(reader, 'utf-8'),
        delimiter=dialect.delimiter,
    )
    for row in csv_reader:
        if not all(field.strip() for field in row):
            continue
        date = parse_date(row['date'])
        pre_condition = {
            'user_id': user_id,
            'date': date,
            'product_normalized': normalize_product_name(row['product']),
        }
        sale, *_ = model.objects.get_or_create(**pre_condition)
        sale.product = row['product']
        sale.revenue = F('revenue') + decimal.Decimal(row['revenue'])
        sale.sales_number = F('sales_number') + int(row['sales_number'])
        sale.save()
