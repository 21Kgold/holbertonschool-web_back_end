#!/usr/bin/env python3
'''
7-to_kv Module
'''
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    '''
    This is a type-annotated function that returns a tuple from two variables

    Parameters:
    - k (string)
    - v (float or int)

    Returns:
    - tuple: first element is string and second float
    '''
    myTuple = (k, v**2)
    return myTuple
