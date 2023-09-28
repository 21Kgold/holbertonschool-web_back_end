#!/usr/bin/env python3
'''
2-measure_runtime module
'''

import time
import asyncio
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    '''
    Coroutine to measure the runtime of executing the async_comprehension
    function multiple times
    '''
    t0 = time.time()
    call_list = [async_comprehension() for i in range(4)]
    # It waits for all the functions to complete before moving on to next line
    await asyncio.gather(*call_list)
    t1 = time.time()
    return t1 - t0
