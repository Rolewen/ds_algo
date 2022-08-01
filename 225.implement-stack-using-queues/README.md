# [225.implement-stack-using-queues](https://leetcode.com/problems/implement-stack-using-queues/)

### Category / Difficulty
algorithms / Easy

### Tags
stack | design
	 		
### Companies
bloomberg

## Description

Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the MyStack class:

- void push(int x) Pushes element x to the top of the stack.
- int pop() Removes the element on the top of the stack and returns it.
- int top() Returns the element on the top of the stack.
- boolean empty() Returns true if the stack is empty, false otherwise.
Notes:

- You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
- Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
 

Example 1:
```
Input
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 2, 2, false]

Explanation
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty(); // return False
```

## Constraints
- 1 <= x <= 9
- At most 100 calls will be made to push, pop, top, and empty.
- All the calls to pop and top are valid.

## 簡而言之，它要的是
實作一個LIFO的stack

## 思路
push: 將元素加入陣列中最後一位
pop: 取出陣列中最後一位數，並且將目前陣列移除最後一位
top: 回傳陣列中最後一位元素 (不對當前陣列進行任何改動)
empty: 檢查陣列長度，若為0就回傳true，否則為false


## Follow-up
Can you implement the stack using only one queue?

