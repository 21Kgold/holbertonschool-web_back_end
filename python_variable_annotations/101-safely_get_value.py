#!/usr/bin/env python3
'''
101-safely_get_value.py Module
'''
from typing import Any, Mapping, Union, TypeVar


def safely_get_value(dct: Mapping, key: Any, default: Union[TypeVar('T'), None]
                     = None) -> Union[Any, TypeVar('T')]:
    '''
    Typed annotationed function that retrieves a dictionary key when present
    '''
    if key in dct:
        return dct[key]
    else:
        return default
