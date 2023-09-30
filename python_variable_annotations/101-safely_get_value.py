#!/usr/bin/env python3
'''
9-element_length Module
'''
from typing import Any, Mapping, Union, TypeVar


def safely_get_value(dct: Mapping, key: Any, default: Union[TypeVar, None]
                     = None) -> Union[Any, type]:
    if key in dct:
        return dct[key]
    else:
        return default
