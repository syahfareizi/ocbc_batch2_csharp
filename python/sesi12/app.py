def sum(nums):
    result = 0
    for n in nums:
        result += n
    return result


print(sum([3, 2, 4]))

assert sum([1, 3, 4]) == 8, 'Should be 8'


print('\n=========')


def test_sum():
    assert sum([1, 2, 3]) == 6, "Should be 6"


def test_sum_tuple():
    assert sum((1, 2, 2)) == 5, "Should be 5"


if __name__ == "__main__":
    test_sum()
    test_sum_tuple()
    print("Everything passed")
