# [155.min-stack](https://leetcode.com/problems/min-stack/)

### Category / Difficulty
algorithms / Easy

### Tags
stack | design
	 		
### Companies
amazon | bloomberg | google | snapchat | uber | zenefits

## Description

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

- MinStack() initializes the stack object.
- void push(int val) pushes the element val onto the stack.
- void pop() removes the element on the top of the stack.
- int top() gets the top element of the stack.
- int getMin() retrieves the minimum element in the stack.
 

Example 1:
```
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
```

## Constraints
- -231 <= val <= 231 - 1
- Methods pop, top and getMin operations will always be called on non-empty stacks.
- At most 3 * 104 calls will be made to push, pop, top, and getMin.

## 簡而言之，它要的是
實作stack所需的function: push, pop, top, getMin

## 絲路

建構子: 定義一個空陣列

push: 將值塞入最後一位

pop: 將陣列中最後一個元素移除

top: 取得最後一個元素值

getMin:定義一變數紀錄當前找到的最小值，最後回傳此變數