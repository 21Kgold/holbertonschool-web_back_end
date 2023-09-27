#!/usr/bin/env python3
'''
9-element_length Module
'''
from typing import List, Tuple, Union, Set, Dict, Generator


def element_length(lst: Union[Tuple, List, str, Set, Dict, Generator]) -> \
        List[Tuple[Union[Tuple, List, str, Set, Dict, Generator, str], int]]:
    '''
    This is a type-annotated function.

    Parameters:
    - lst (iterable)

    Returns:
    - list: tuples of each element and element lenght of lst
    '''
    return [(i, len(i)) for i in lst]
