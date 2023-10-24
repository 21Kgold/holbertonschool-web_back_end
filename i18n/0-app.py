#!/usr/bin/env python3
"""Hello world basic flask app"""

from flask import Flask, render_template
app = Flask(__name__)  # instance of the Flask class is created


@app.route('/')
def Hello_World():
    """Basic Hello World app"""
    return render_template('0-index.html')


if __name__ == '__main__':  # Ensure the app is only run when executed directly
    app.run(host="0.0.0.0", port="5000")  # http://localhost:5000
