#!/usr/bin/env python3


"""this async routine spawns n wait random and stores the in a list"""


from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """returns a sorted list of n amount of random delays"""
    delays = []
    for i in range(n):
        delay = await wait_random(max_delay)
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
