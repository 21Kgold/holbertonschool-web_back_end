#!/usr/bin/env python3
'''
6-sum_mixed_list Module
'''
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    '''
    This is a type-annotated function that returns the sum of a list's elements

    Parameters:
    - List (Union[int, float])

    Returns:
    - float: sum of mxd_lst elements
    '''
    total: float = 0
    for x in mxd_lst:
        total += x
    return total
