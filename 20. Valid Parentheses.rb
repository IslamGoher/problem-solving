def is_valid(s)
  stack = []
  parentheses = {
    "(" => ")",
    "[" => "]",
    "{" => "}",
  }
  
  # check first element
  if (s[0] === ")" || s[0] === "}" || s[0] === "]")
    return false
  end

  if (s.length.odd?)
    return false
  end
  
  for i in 0..(s.length-1) do
    stack.push(s[i])
    if (stack[stack.length-1] === ")" ||
        stack[stack.length-1] === "}" ||
        stack[stack.length-1] === "]")
      if (parentheses[stack[stack.length-2]] === stack[stack.length-1])
        stack.pop()
        stack.pop()
      else
        return false
      end
    end
  end

  if (stack.length > 0)
    return false
  end
  
  return true
end