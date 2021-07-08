# https://www.codewars.com/kata/585d7d5adb20cf33cb000235
# 6kyu

# There is an array with some numbers. All numbers are equal except for one. Try to find it!
# find_uniq([ 1, 1, 1, 2, 1, 1 ]) == 2
# find_uniq([ 0, 0, 0.55, 0, 0 ]) == 0.55


# solution
def find_uniq(arr)
  y = arr.count { |i| i/0.3 == (arr[0]/0.3) } 
  x = arr.uniq
  y == 1 ? x[0] : x[1] 
end