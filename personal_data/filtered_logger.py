#!/usr/bin/env python3
"""
filtered_logger module
"""
from typing import List, Any
import re
import logging


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


class RedactingFormatter(logging.Formatter):
    """
    RedactingFormatter class
    """

    REDACTION: str = "***"
    FORMAT: str = "[HOLBERTON] %(name)s %(levelname)s %(asctime)-15s: \
                  %(message)s"
    SEPARATOR: str = ";"

    def __init__(self, fields: List):
        """
        RedactingFormatter constructor
        """
        super(RedactingFormatter, self).__init__(self.FORMAT)
        self.fields = fields

    def format(self, record: logging.LogRecord[Any]) -> str:
        """
        Filter values in incoming log record
        """
        record.msg = filter_datum(self.fields, self.REDACTION,
                                  record.getMessage(), self.SEPARATOR)
        return super(RedactingFormatter, self).format(record)
