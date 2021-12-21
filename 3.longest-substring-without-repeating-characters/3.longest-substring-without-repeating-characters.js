/**
 * @param {string} s
 * @return {number}
 */

/*

"abcabcbb"
"bbbbb"
"pwwkew"

*/

var lengthOfLongestSubstring = function (s) {
	if (s.length === 0) return 0;

	let maxLength = 1; // 用於紀錄已找到的最長pattern長度
	let pattern = ""; // 用於紀錄子字串

	// 由字串第i字元開始，依序與第j字元(i+1)進行比對
	for (let i = 0; i < s.length; i++) {
		pattern = s.charAt(i);
		for (let j = i + 1; j < s.length; j++) {
			/*
			 * 若第j字元已出現於pattern中，表示子字串已斷
			 * 須將pattern設定為當前的第j字元並跳離子迴圈，進行下一輪比對
			 */
			if (pattern.includes(s.charAt(j))) {
				pattern = s.charAt(j);
				break;
			}

			// 若第j字元不曾出現過，則將此字元加入於pattern中
			pattern += s.charAt(j);

			// 檢查當前pattern長度有破紀錄
			if (pattern.length > maxLength) {
				maxLength = pattern.length;
			}
		}
	}

	return maxLength;
};
