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

	let maxLength = 1;
	let pattern = "";

	for (let i = 0; i < s.length; i++) {
		pattern = s.charAt(i);
		for (let j = i + 1; j < s.length; j++) {
			if (pattern.includes(s.charAt(j))) {
				pattern = s.charAt(j);
				break;
			}

			pattern += s.charAt(j);

			if (pattern.length > maxLength) {
				maxLength = pattern.length;
			}
		}
	}

	return maxLength;
};
