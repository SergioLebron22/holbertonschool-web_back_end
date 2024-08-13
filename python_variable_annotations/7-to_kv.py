#!/usr/bin/env python3

"""This function takes k and v and returns a tuple"""

from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """returns a tuple where k is str and v is either float or int"""
    tup: Tuple[str, float] = (k, v)
    return tup
