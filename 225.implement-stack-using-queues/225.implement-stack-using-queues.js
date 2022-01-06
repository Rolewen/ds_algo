/*
 * @lc app=leetcode id=225 lang=javascript
 *
 * [225] Implement Stack using Queues
 */

// @lc code=start

var MyStack = function () {
	this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
	this.stack = [...this.stack, x];
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
	const top = this.stack[this.stack.length - 1];
	this.stack = this.stack.slice(0, this.stack.length - 1);
	return top;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
	return this.stack[this.stack.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
	return !Boolean(this.stack.length);
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end
