#!/usr/bin/env python3
'''
1-concurrent_coroutines Module
'''
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int = 10) -> List[float]:
    '''
    This is a async routine that calls a async function wait_random
    n times concurrently (coroutines)

    Parameters:
    - n (int): times the async function wait_random will run concurrently
    - max_delay (int): upper limit of the random delay used by the
      wait_random function

    Returns:
    - List of floats: list of random delay for each routine
    '''
    # Create a list of n calls of wait_random function
    n_calls = [wait_random(max_delay) for i in range(n)]

    delayList = []
    for call in asyncio.as_completed(n_calls):
        # await, will pause a asynchronous operation until other is completed
        delay_per_call = await call
        delayList.append(delay_per_call)
    return delayList
