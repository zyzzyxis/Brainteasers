
# https://www.codewars.com/kata/529eef7a9194e0cbc1000255
# 7kyu
# Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.



# original solution
def is_anagram(test, original)
  a = test.downcase.split('').sort
  b = original.downcase.split('').sort
   
  b == a ? true : false
 end


#  refactored solution. takes advatage of implicit true/false
def is_anagram(test, original)
  test.downcase.chars.sort == original.downcase.chars.sort
end