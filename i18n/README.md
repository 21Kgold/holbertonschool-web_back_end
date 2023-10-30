# i18n

## Description

The `locale_selector` decorator is used to override the default behavior of Flask-Babel in determining the user's preferred locale. By using this decorator, you can implement your own logic to select the appropriate locale for each request.

The gettext module provides internationalization (I18N) and localization (L10N) services for your Python modules and applications.

Learning Objectives
Learn how to parametrize Flask templates to display different languages
Learn how to infer the correct locale based on URL parameters, user settings or request headers
Learn how to localize timestamps

---

### [0. Basic Flask app](./0-app.py)

* Create a simple flask app that simply outputs “Welcome to Holberton” as page title `<title>` and “Hello world” as header `<h1>`.

### [1. Basic Babel setup](./1-app.py)

* Instantiate the Babel object in your app. Store it in a module-level variable named babel. In order to configure available languages in our app, you will create a Config class that has a LANGUAGES class attribute equal to ["en", "fr"]. Use Config to set Babel’s default locale ("en") and timezone ("UTC"). Use that class as config for your Flask app.

### [2. Get locale from request](./2-app.py)

* Create a get_locale function with the babel.localeselector decorator. Use request.accept_languages to determine the best match with our supported languages.

### [3. Parametrize templates](./3-app.py)

* Use the _ or gettext function to [parametrize your templates](https://python-babel.github.io/flask-babel/#translating-applications). Use the message IDs home_title and home_header.
* Create a babel.cfg file containing
```python
[python: **.py]
[jinja2: **/templates/**.html]
extensions=jinja2.ext.autoescape,jinja2.ext.with_
```
* Then initialize your translations with
```bash
$ flask babel extract -F babel.cfg -o messages.pot .
```
* and your two dictionaries with
```
$ pybabel init -i messages.pot -d translations -l en
$ pybabel init -i messages.pot -d translations -l fr
```
* Update translations/[en|fr]/LC_MESSAGES/messages.po to provide the correct value for each message ID for each language.

### [4. Force locale with URL parameter](./4-app.py)

* Force a particular locale by passing the locale=fr parameter to your app’s URLs. 
* In your get_locale function, detect if the incoming request contains locale argument and ifs value is a supported locale, return it. If not or if the parameter is not present, resort to the previous default behavior.
<p align="center">
  <img src="./images/Task 3.png" alt="Image Description" />
</p>

### [5. Mock logging in](./5-app.py)

* To emulate a similar behavior of a user login system, use the following user table
```python3
users = {
    1: {"name": "Balou", "locale": "fr", "timezone": "Europe/Paris"},
    2: {"name": "Beyonce", "locale": "en", "timezone": "US/Central"},
    3: {"name": "Spock", "locale": "kg", "timezone": "Vulcan"},
    4: {"name": "Teletubby", "locale": None, "timezone": "Europe/London"},
}
```
* This will mock a database user table. Logging in will be mocked by passing login_as URL parameter containing the user ID to log in as.
* Define a get_user function that returns a user dictionary or None if the ID cannot be found or if login_as was not passed.
* Define a before_request function and use the app.before_request decorator to make it be executed before all other functions. before_request should use get_user to find a user if any, and set it as a global on flask.g.user.
* In your HTML template, if a user is logged in, in a paragraph tag, display a welcome message otherwise display a default message.
<p align="center">
  <img src="./images/Task 5.png" alt="Image Description" />
</p>

### [6. Use user locale](./6-app.py)

* Change your get_locale function to set locale in this order of priority: Locale from URL parameters > Locale from user settings > Locale from request header > Default locale.
<p align="center">
  <img src="./images/Task 6.png" alt="Image Description" />
</p>

### [7. Infer appropriate time zone](./7-app.py)

* Define a get_timezone function using the babel.timezoneselector decorator and set timezone in this order of priority: Find timezone parameter in URL parameters > Find time zone from user settings > Default to UTC.
* Validate that it is a valid time zone using pytz.timezone and catch the pytz.exceptions.UnknownTimeZoneError exception.

### [8. Display the current time](./app.py)
<p align="center">
  <img src="./images/Task 8.png" alt="Image Description" />
</p>