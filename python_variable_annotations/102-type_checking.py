#!/usr/bin/env python3
'''
102-type_checking.py Module
'''
from typing import List, Tuple


def zoom_array(lst: Tuple, factor: int = 2) -> List:
    '''
    Add factor times, each element of a given List to a new List
    '''
    zoomed_in: List = [
        item for item in lst
        for i in range(factor)
    ]
    return zoomed_in


array = (12, 72, 91)

zoom_2x = zoom_array(array, 2)

zoom_3x = zoom_array(array, 3)

'''
102-type_checking.py:13: error: Incompatible types in assignment (expression
has type "List[Any]", variable has type "Tuple[Any, ...]")  [assignment]

102-type_checking.py:21: error: Argument 1 to "zoom_array" has incompatible
type "List[int]"; expected "Tuple[Any, ...]"  [arg-type]

102-type_checking.py:23: error: Argument 1 to "zoom_array" has incompatible
type "List[int]"; expected "Tuple[Any, ...]"  [arg-type]

102-type_checking.py:23: error: Argument 2 to "zoom_array" has incompatible
type "float"; expected "int"  [arg-type]

Found 4 errors in 1 file (checked 1 source file)
'''

'''
$ mypy 102-type_checking.py
Success: no issues found in 1 source file
'''
