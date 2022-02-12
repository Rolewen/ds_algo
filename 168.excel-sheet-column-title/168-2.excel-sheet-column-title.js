/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
	// A~Z = ascii code 65 ~ 90;
	let res = "";
	while (true) {
		const charCode = columnNumber % 26;
		let offset = charCode === 0;
		/* 
            offset用於處理26倍數的情況，例如52是AZ
            在運算過程中52取餘數會得到0，但Z的對應值是26，所以取char code時要+26
            接著52除26會得到2，這裡也有誤差1圈，所以需要減掉1
        */
		res = String.fromCharCode(charCode + 64 + (offset ? 26 : 0)) + res;

		if (columnNumber <= 26) {
			break;
		} else {
			columnNumber = Math.floor(columnNumber / 26 - (offset ? 1 : 0));
		}
	}

	return res;
};
// @lc code=end
