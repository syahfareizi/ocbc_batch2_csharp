from my_sum import sum


def test_sum():
    assert sum(1, 2, 3) == 6, "Should be 6"


def test_sum_tupple():
    assert sum(1, 2, 2) == 6, "Should be 6"
