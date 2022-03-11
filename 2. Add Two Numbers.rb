class ListNode
  attr_accessor :val, :next
  def initialize(val = 0, _next = nil)
    @val = val
    @next = _next
  end
end

def add_two_numbers(l1, l2)
  sum_list = ListNode.new(0, nil)
  current_sum_list = sum_list
  current_l1 = l1
  current_l2 = l2
  carry = 0

  while (current_l1 || current_l2 || carry > 0)

    current_l1_val = 0
    current_l2_val = 0

    if(current_l1)
      current_l1_val = current_l1.val
    end

    if(current_l2)
      current_l2_val = current_l2.val
    end

    # sum operation
    sum = current_l1_val + current_l2_val + carry

    # reset carry
    if sum > 9
      sum = sum - 10
      carry = 1
    else
      carry = 0
    end

    # store sum value in new list
    current_sum_list.val = sum

    # go to next nodes
    if current_l1
      current_l1 = current_l1.next
    else
      current_l1 = nil
    end

    if current_l2
      current_l2 = current_l2.next
    else
      current_l2 = nil
    end

    if (current_l1 || current_l2 || carry > 0)
      current_sum_list.next = ListNode.new(0, nil)
      current_sum_list = current_sum_list.next
    end
    
  end

  return sum_list
end

# 9 -> 9 -> 9 -> 9
# 9 -> 9 -> 9 -> 9 -> 9 -> 9 -> 9
l1 = ListNode.new(9, ListNode.new(9, ListNode.new(9, ListNode.new(9, nil))))
l2 = ListNode.new(9, ListNode.new(9, ListNode.new(9, ListNode.new(9, ListNode.new(9, ListNode.new(9, ListNode.new(9, nil)))))))

puts add_two_numbers(l1, l2).inspect