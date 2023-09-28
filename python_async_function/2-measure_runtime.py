#!/usr/bin/env python3
'''
2-measure_runtime Module
'''
from time import time
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    '''
    Function that measure the runtime of wait_n coroutine
    '''
    t0 = time()
    asyncio.run(wait_n(n, max_delay))
    t1 = time()
    dt = t1 - t0
    return dt / n
