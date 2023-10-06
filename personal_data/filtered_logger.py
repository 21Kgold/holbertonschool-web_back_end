#!/usr/bin/env python3
"""
filtered_logger module
"""
from typing import List
import re


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
        to_replace = f'{field}=.*?{separator}'
        replacement = f'{field}={redaction}{separator}'
        message = re.sub(to_replace, replacement, message)
    return message
