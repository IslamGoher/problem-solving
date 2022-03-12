def str_str(haystack, needle)
  
  # case1: needle doesn't exist
  # return 0
  if needle === ""
    return 0
  end
  
  # case2: needle exists
  for i in 0..(haystack.length - 1 - (needle.length - 1))
    # case2.1: needle is a part of haystack
    # return index
    if (needle === haystack[i..(needle.length - 1 + i)])
      return i
    end
  end
  
  # case2.2: needle isn't a part of haystack
  # return -1
  return -1
end
