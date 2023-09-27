#!/usr/bin/env python3
'''
5-sum_list Module
'''
from typing import List


def sum_list(input_list: List[float]) -> float:
    '''
    This is a type-annotated function that returns the sum of a list's elements

    Parameters:
    - input_list (List[float])

    Returns:
    - float: sum of input_list elements
    '''
    total: float = 0
    for x in input_list:
        total += x
    return total
