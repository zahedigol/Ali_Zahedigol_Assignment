# Ali Zahedigol Assignment

## Compatibility

* Python 3.6+
* nodejs 14+

## Installation


### Development environment

For installing the project in the development environment:

1. Create a file `.env` in the root of project with the following content. 

    ```
    SECRET_KEY=[desired secret key]
    ```

1. You can use the following commands to setup the project in the development environment:

    ```shell script
    pip install -e ".[dev]"
    pre-commit install
    python manage.py migrate
    python manage.py collectstatic
    ```

1. Use the following command to run the project:

    ```shell script
    python manage.py runserver 
    ```
    
1. The website will be accessable from [http://127.0.0.1:8000](http://127.0.0.1:8000)

1. The admin panel would be accessable from [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)

1. Use the following login credentials.

    * superuser:
    
    ```
    username: ali@gmail.com
    password: 123
    ```
    
    * test users:
    ```
    user: test_user@meistery.net
    password: trial_application

    user: test_user2@meistery.net
    password: trial_application
    ```

1. The API related documents would be accessable from [http://127.0.0.1:8000/redoc/](http://127.0.0.1:8000/redoc/)

1. To install React dependencies run the following command:

    ```shell script
    npm install 
    ```
    
1. Use the following command to run the react project:

    ```shell script
    npm run watch
    ```

1. Use the following command to run eslint:

    ```shell script
    npm run lint
    ```

1. Use the following command to build the react project:


    ```shell script
    npm run build
    ```


### Test environment

For testing the project in testing environment:

1. Create a file `.env` in the root of project with the following content. 

    ```
    SECRET_KEY=[desired secret key]
    ```

1. You can use the following commands to setup the project in the testing environment:

    ```shell script
    pip install -e ".[test]"
    pre-commit install
    ```

1. Use the following command to run tests for the project:

    ```shell script
    python runtests.py
    ```
    
## Production info

* The github link for the project is [https://github.com/zahedigol/Ali_Zahedigol_Assignment](https://github.com/zahedigol/Ali_Zahedigol_Assignment)

* The website will be accessable from [https://alizahedigolassignments.herokuapp.com/](https://alizahedigolassignments.herokuapp.com/)

* The admin panel would be accessable from [https://alizahedigolassignments.herokuapp.com/admin/](https://alizahedigolassignments.herokuapp.com/admin/)

* Use the following login credentials.

    * superuser:
    
    ```
    username: ali@gmail.com
    password: 123
    ```
    
    * test users:
    ```
    user: test_user@meistery.net
    password: trial_application

    user: test_user2@meistery.net
    password: trial_application
    ```

* The API related documents would be accessable from [https://alizahedigolassignments.herokuapp.com/redoc/](https://alizahedigolassignments.herokuapp.com/redoc/)

## Notes:

1. The react code is stored in `frontend` directory.

1. The django settings is stored in `djangosettings.settings` directory.



