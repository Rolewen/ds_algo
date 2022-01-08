/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start

var MyQueue = function () {
	this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
	this.stack = [...this.stack, x];
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
	const top = this.stack[0];
	this.stack = this.stack.slice(1, this.stack.length);
	return top;
};

/**LS
 * @return {number}
 */
MyQueue.prototype.peek = function () {
	return this.stack[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
	return !Boolean(this.stack.length);
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
