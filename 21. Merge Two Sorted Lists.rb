class ListNode
    attr_accessor :val, :next
    def initialize(val = 0, _next = nil)
        @val = val
        @next = _next
    end
end

list1 = ListNode.new(5, ListNode.new(9, ListNode.new(12, nil)))
list2 = ListNode.new(1, ListNode.new(5, ListNode.new(7, ListNode.new(10, nil))))


def merge_two_lists(list1, list2)
  final_list = list1
  current = list2

  if !list1 && list2
    return list2
  
  elsif !list2 && list1
    return list1
  
  elsif !list1 && !list2
    return nil
  end

  while current
    final_list = add_node(final_list, current.val)
    current = current.next
  end

  return final_list
end

# function to add new node at the right place
def add_node(list, value)
  current = list
  prev = nil

  while current
    
    # case-1:
    # if the right place of the node is at first of the list
    if prev === nil
      if value < current.val
        new_node = ListNode.new(value, current)
        return new_node
      end
    end

    # case-2:
    # if the right place of the node is between nodes
    if value < current.val
      new_node = ListNode.new(value, current)
      prev.next = new_node
      return list
    end

    # case-3:
    # if the right place of the node is at last of the list
    if !current.next
      new_node = ListNode.new(value, nil)
      current.next = new_node
      return list
    end

    # go to the next node
    prev = current
    current = current.next

  end
end

puts merge_two_lists(list1, list2).inspect