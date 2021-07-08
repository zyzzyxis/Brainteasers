# https://www.codewars.com/kata/5b39e3772ae7545f650000fc
# 7kyu

# remove all duplicate words from a string, leaving only single (first) words entries.

# Example:
# Input:
# 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
# Output:
# 'alpha beta gamma delta'


# solution
def remove_duplicate_words(s)
  s.split(" ").uniq.join(' ')
end