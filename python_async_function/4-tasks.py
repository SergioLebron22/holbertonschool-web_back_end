#!/usr/bin/env python3


import typing
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> typing.List[float]:
    delays = []
    for i in range(n):
        delay = await task_wait_random(max_delay)
        delays.append(delay)

    sorted_delays = []
    for delay in delays:
        if not sorted_delays:
            sorted_delays.append(delay)
        else:
            inserted = False
            for i in range(len(sorted_delays)):
                if delay < sorted_delays[i]:
                    sorted_delays.insert(i, delay)
                    inserted = True
                    break
            if not inserted:
                sorted_delays.append(delay)
    return sorted_delays
