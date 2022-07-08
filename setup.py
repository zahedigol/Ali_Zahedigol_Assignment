import os

from setuptools import find_packages, setup

with open(os.path.join(os.path.dirname(__file__), 'README.md'), encoding="utf-8") as readme:
    README = readme.read()

# allow setup.py to be run from any path
os.chdir(os.path.normpath(os.path.join(os.path.abspath(__file__), os.pardir)))

setup(
    name='ali_zahedigol_assignment',
    version='1.0.0',
    packages=find_packages(),
    include_package_data=True,
    license='BSD License',
    description='A simple Django app.',
    long_description=README,
    long_description_content_type='text/markdown',
    author='Ali Zahedigol',
    author_email='alizahedigol@gmail.com',
    classifiers=[
        'Environment :: Web Environment',
        'Framework :: Django',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: BSD License',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
        'Programming Language :: Python :: 3.8',
        'Programming Language :: Python :: 3.9',
        'Programming Language :: Python :: 3 :: Only',
        'Topic :: Internet :: WWW/HTTP',
        'Topic :: Internet :: WWW/HTTP :: Dynamic Content',
    ],
    install_requires=[
        'Django>=3.0.0',
        'djangorestframework>=3.10',
        'django-oauth-toolkit>=1.3.2',
        'drf-yasg',
        'dj-database-url',
        'gunicorn',
        'psycopg2',
        'python-decouple',
        'whitenoise',
        'django-heroku',
    ],
    extras_require={
        'dev': [
            'flake8',
            'black',
            'isort',
            'pre-commit',
        ],
        'test': [
            'coverage>=5.0.4',
            'pytest>=5.4.1',
            'pytest-django>=3.8.0',
            'pytest-cov>=2.8.1',
            'pytest-ipdb @ git+https://github.com/mverteuil/pytest-ipdb.git',
            'mixer>=6.1.3',
            'mock>=4.0.2',
        ],
    },
)
