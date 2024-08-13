#!/usr/bin/env python3

"""this function returns a function that multiplies a float by a multiplier"""


from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """returns a function"""
    def multiplier_func(value: float) -> float:
        """returns value multiplied by a multiplier"""
        return value * multiplier
    return multiplier_func
