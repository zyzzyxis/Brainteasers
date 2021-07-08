
# https://www.codewars.com/kata/55b051fac50a3292a9000025
# 7kyu

# initial solution
def filter_string(s)
  s.delete('abcdefghijklmnopqrstuvwxyz ').to_i
 end

#  refactored solution due to the unique ability of ruby
def filter_string(s)
  s.delete('a-z ').to_i
end