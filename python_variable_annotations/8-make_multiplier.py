#!/usr/bin/env python3
'''
8-make_multiplier Module
'''
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    '''
    This is a type-annotated function.

    Parameters:
    - multiplier (float)

    Returns:
    - float: function that multiplies a float by multiplier
    '''
    return lambda multiplicand: multiplicand * multiplier
