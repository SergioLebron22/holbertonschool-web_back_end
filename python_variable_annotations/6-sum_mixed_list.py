#!/usr/bin/env python3

"""this function adds all numbers in a list of int and float"""


from typing import List, Union


def sum_mixed_list(mxd_list: List[Union[int, float]]) -> float:
    """returns float sum of all numbers in list"""
    add: float = 0.0

    for num in mxd_list:
        add += num

    return add
