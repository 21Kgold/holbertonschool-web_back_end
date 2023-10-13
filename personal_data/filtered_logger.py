#!/usr/bin/env python3
"""
filtered_logger module
"""
from typing import List
import re
import logging
import os
import mysql.connector

PII_FIELDS = ("name", "email", "phone", "ssn", "password")


def filter_datum(fields: List[str], redaction: str, message: str,
                 separator: str) -> str:
    """
    Returns the log message obfuscated

    Parameters:
    - fields: a list of strings representing all fields to obfuscate
    - redaction: a string representing by what the field will be obfuscated
    - message: a string representing the log line
    - separator: a string representing by which character is separating all
      fields in the log line (message)

    Returns:
    - Message obfuscated
    """

    for field in fields:
        to_replace = f'{field}=.*?{separator}'  # .*? = any (0 or +) characters
        replacement = f'{field}={redaction}{separator}'
        message = re.sub(to_replace, replacement, message)
    return message


def get_logger() -> logging.Logger:
    """
    Create a logger that display info logs at the terminal
    """
    logger = logging.getLogger("user_data")
    logger.setLevel(logging.INFO)
    logger.propagate = False

    formatter = RedactingFormatter(list(PII_FIELDS))

    Stream_Handler = logging.StreamHandler()
    Stream_Handler.setFormatter(formatter)
    logger.addHandler(Stream_Handler)
    return logger


def get_db() -> mysql.connector.connection.MySQLConnection:
    """
    Connect to a mysql database
    """
    # Get or set environment variables
    username = os.getenv("PERSONAL_DATA_DB_USERNAME", "root")
    password = os.getenv("PERSONAL_DATA_DB_PASSWORD", "")
    host = os.getenv("PERSONAL_DATA_DB_HOST", "localhost")
    db_name = os.getenv("PERSONAL_DATA_DB_NAME")

    # Establish a connection to the MySQL server
    conn = mysql.connector.connect(user=username,
                                   password=password,
                                   host=host,
                                   database=db_name)
    return conn


class RedactingFormatter(logging.Formatter):
    """
    RedactingFormatter class
    """

    REDACTION = "***"
    FORMAT = "[HOLBERTON] \
%(name)s %(levelname)s %(asctime)-15s: %(message)s"
    SEPARATOR = ";"

    def __init__(self, fields: List[str]):
        """
        RedactingFormatter constructor
        """
        super(RedactingFormatter, self).__init__(self.FORMAT)
        self.fields = fields

    def format(self, record: logging.LogRecord) -> str:
        """
        Filter values in incoming log record
        """
        record.msg = filter_datum(self.fields, self.REDACTION,
                                  record.getMessage(), self.SEPARATOR)
        return super(RedactingFormatter, self).format(record)


def main() -> mysql.connector.connection.MySQLConnection:
    """
    Retrieve all rows in the users table and display each row under
    a filtered format
    """
    db = get_db()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM users")
    rows = cursor.fetchall()  # rows as a list of tuples
    fields = [field[0] for field in cursor.description]  # [Column names]
    logger = get_logger()

    # Format each row
    for row in rows:
        record = ""
        for field, value in zip(fields, row):
            record += "".join(f'{field}={value};')
        logger.info(record)


if __name__ == '__main__':
    main()


"""
print(rows)
[('Marlene Wood', 'hwestiii@att.net', '(473) 401-4253', ...),
('Belen Bailey', 'bcevc@yahoo.com', '(539) 233-4942', ...)]

print(column_names)
['name', 'email', 'phone', 'ssn', 'password', 'ip', 'last_login', 'user_agent']
"""
