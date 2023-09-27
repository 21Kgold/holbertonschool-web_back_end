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
    - float: funcion that multiplies a float by multiplier
    '''
    def newFunction(newMultiplier: float) -> float:
        return newMultiplier

    return newFunction() * multiplier
