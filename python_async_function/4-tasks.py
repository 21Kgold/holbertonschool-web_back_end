#!/usr/bin/env python3
'''
1-concurrent_coroutines Module
'''
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int = 10) -> List[float]:
    '''
    This is a async routine that calls a Task task_wait_random
    n times concurrently (coroutines)

    Parameters:
    - n (int): times the Task task_wait_random will run concurrently
    - max_delay (int): upper limit of the random delay used by the
      task_wait_random function

    Returns:
    - List of floats: list of random delay for each routine
    '''
    tasks = [task_wait_random(max_delay) for i in range(n)]
    delayList = []
    for task in asyncio.as_completed(tasks):
        delay_per_task = await task
        delayList.append(delay_per_task)
    return delayList
