#!/usr/bin/env python3
'''
0-async_generator module
'''
import asyncio
import random
import typing


async def async_generator() -> typing.Generator[float, None, int]:
    '''
    Generator function
    '''
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
