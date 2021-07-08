# https://www.codewars.com/kata/523f5d21c841566fde000009
# 6kyu

# implement a difference function, which subtracts one list from another and returns the result.
# It should remove all values from list a, which are present in list b keeping their order.
# array_diff([1,2],[1]) == [2]
# If a value is present in b, all of its occurrences must be removed from the other:
# array_diff([1,2],[1]) == [2]

# first solution
def array_diff(a, b)
  a.delete_if { |arr| arr == b[0] }
  b[1] ? a.delete_if { |arr| arr == b[1] } : a
end

# refactor
def array_diff(a, b)
  a - b 
end