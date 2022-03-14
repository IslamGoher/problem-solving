def simplify_path(path)
  dir_arr = path.split "/"
  deleted_elements = 0
  i = 0

  while i < dir_arr.length
    deleted_elements = 0

    if (dir_arr[i] === "" || dir_arr[i] === ".")
      dir_arr.slice! i, 1
      deleted_elements += 1
      
    elsif (dir_arr[i] === "..")
      dir_arr.slice! i, 1
      deleted_elements += 1

      if (i != 0)
        dir_arr.slice! i-1, 1
        deleted_elements += 1
      end
    end

    i = i - deleted_elements +1
  end
  
  canonical_path = ""

  dir_arr.each do |el|
    canonical_path += "/#{el}"
  end
  
  if canonical_path != ""
    return canonical_path
  else
    return "/"
  end
end
