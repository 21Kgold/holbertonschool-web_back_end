#!/usr/bin/env python3
"""Module to display different languages"""

#  request represents the current HTTP request
from flask import Flask, render_template, request, g
from flask_babel import Babel
from typing import Union
from pytz import timezone
from pytz.exceptions import UnknownTimeZoneError
import inspect
from datetime import datetime


users = {
    1: {"name": "Balou", "locale": "fr", "timezone": "Europe/Paris"},
    2: {"name": "Beyonce", "locale": "en", "timezone": "US/Central"},
    3: {"name": "Spock", "locale": "kg", "timezone": "Vulcan"},
    4: {"name": "Teletubby", "locale": None, "timezone": "Europe/London"},
}


class Config:
    """Class to configure default values and available languages"""
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'


app = Flask(__name__)
babel = Babel(app)
app.config.from_object(Config)


@babel.localeselector
def get_locale():
    """Function uses the request.accept_languages.best_match method to
    determine the best language match from provided options, based on the
    Accept-Language header sent by the browser."""
    # Locale from URL parameters
    if request.args.get('locale'):
        locale = request.args.get('locale')
        if locale in app.config['LANGUAGES']:
            return locale
    # Locale from user settings
    if g.user and g.user.get('locale'):
        locale = g.user.get('locale')
        if locale in app.config['LANGUAGES']:
            return locale
    # Locale from request header
    else:
        return request.accept_languages.best_match(app.config['LANGUAGES'])
    # Default locale is set in Config class


@babel.timezoneselector
def get_timezone() -> str:
    """Function to set timezone"""
    try:
        # Timezone from URL parameters
        if request.args.get('timezone'):
            tz = request.args.get('timezone')
            tz = timezone(tz)
        # Timezone from user settings
        elif g.user and g.user.get('timezone'):
            tz = g.user.get('timezone')
            tz = timezone(tz)
    # Default timezone is set in Config class
    except UnknownTimeZoneError:
        tz = app.config["BABEL_DEFAULT_TIMEZONE"]
        tz = timezone(tz)
    return tz


def get_user() -> Union[dict, None]:
    """ Returns user data associated to key id """
    if request.args.get('login_as'):
        id = int(request.args.get('login_as'))
        if id in users:
            user_data = users.get(id)
            return user_data
    else:
        return None


@app.before_request
def before_request():
    """ Function that associates user data with the global variable g through
    the user attribute """
    g.user = get_user()


@app.route('/')
def Hello_World():
    """Basic Hello World app"""
    timezone = get_timezone()
    ct = datetime.now(timezone)
    current_time = ct.strftime('%b %d, %Y, %I:%M:%S %p')
    return render_template('index.html', current_time=current_time)
    # to test: replace return by: return get_locale()


if __name__ == '__main__':  # Ensure the app is only run when executed directly
    app.run(host="0.0.0.0", port="5000")
    # http://localhost:5000   http://127.0.0.1:5000/?login_as=2
