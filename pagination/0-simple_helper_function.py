#!/usr/bin/env python3

"""This file contains the index_range function"""


from typing import Tuple


def index_range(page, page_size) -> Tuple:
    """this function returns a tuple with the start and end indexes"""
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)
