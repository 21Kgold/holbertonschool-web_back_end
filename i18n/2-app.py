#!/usr/bin/env python3
"""Babel default langage and timezone"""

#  request represents the current HTTP request
from flask import Flask, render_template, request
from flask_babel import Babel
import inspect


class Config:
    """Class to configure available languages"""
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'


app = Flask(__name__)
babel = Babel(app)
app.config.from_object(Config)


@babel.localeselector  # override the default behavior of Flask-Babel
def get_locale():
    """Function uses the request.accept_languages.best_match method to
    determine the best language match from provided options, based on the
    Accept-Language header sent by the browser."""
    return request.accept_languages.best_match(app.config['LANGUAGES'])


@app.route('/')
def Hello_World():
    """Basic Hello World app"""
    return render_template('2-index.html')
    # to test: replace return line by: return get_locale()


if __name__ == '__main__':  # Ensure the app is only run when executed directly
    app.run(host="0.0.0.0", port="5000")  # http://localhost:5000
