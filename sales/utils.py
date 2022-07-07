import csv
import decimal
from pathlib import Path

from django.utils.dateparse import parse_date


def normalize_product_name(product_name: str):
    return product_name.lower().replace(' ', '_')


def import_sales_from_csv(model, fixture_file: Path, user_id: int):
    with open(fixture_file, mode='r') as read_obj:
        sniffer = csv.Sniffer()
        dialect = sniffer.sniff(read_obj.readline())
        read_obj.seek(0)
        csv_reader = csv.DictReader(
            read_obj,
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
            sale.revenue += decimal.Decimal(row['revenue'])
            sale.sales_number += int(row['sales_number'])
            sale.save()
