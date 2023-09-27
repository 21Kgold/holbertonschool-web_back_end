#!/usr/bin/env python3
'''
9-element_length Module
'''
from typing import List, Tuple, Iterable, Sequence


def element_length(lst: Iterable[Sequence]) -> \
        List[Tuple[Sequence, int]]:
    '''
    This is a type-annotated function.

    Parameters:
    - lst (iterable)

    Returns:
    - list: tuples of each element and element lenght of lst
    '''
    return [(i, len(i)) for i in lst]
