#!/usr/bin/env python3
'''
0-basic_async_syntax Module
'''
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    '''
    This is a asynchronous coroutine with random delay between 0 and max_delay

    Parameters:
    - max_delay (int)

    Returns:
    - float: random delay between 0 and max_delay
    '''
    x: float = random.uniform(0, max_delay)
    await asyncio.sleep(x)
    return x
