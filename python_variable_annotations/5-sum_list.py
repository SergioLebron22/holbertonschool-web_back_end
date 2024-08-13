#!/usr/bin/env python3

"""this function sums all floats in a given list"""


def sum_list(input_list: list) -> float:
    """returns the sum of all floats in the list"""
    add: float = 0
    for num in input_list:
        add += num

    return add
