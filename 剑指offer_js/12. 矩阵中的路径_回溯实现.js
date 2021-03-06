// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// 输出：true

// 输入：board = [["a","b"],["c","d"]], word = "abcd"
// 输出：fals

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// 使用深度优先遍历
let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
let word = "ABCCED"
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
  let m = board.length, n = board[0].length, l = word.length
  if (m * n < l) return false // 字库长度小于单词长度 必不可能成功
  const dfs = (i,j,k) => {
    if (k === l) return true // 已经找到完整的 word
    if (i < 0 || i >= m || j < 0 || j >= n) return false // 超过边界
    if (board[i][j] === word[k]) { // 字符相同
      let save = board[i][j] // 记录值
      board[i][j] = '/' // 选择一个必不会出现在 word 中的字符
      if (dfs(i-1,j,k+1) ||
          dfs(i+1,j,k+1) ||
          dfs(i,j-1,k+1) ||
          dfs(i,j+1,k+1)) { // 向四个方向找下一位
        return true // 找到了符合要求的
      } else { // 四个方向都没有与下一个字符相同的
        board[i][j] = save // 该字符不符合要求，不是要找的下一位，恢复字符
      }
    }
    if (k > 0) {
      return false
    } else {
      if (++j === n) { // 遍历到右端 该换行了
        if (++i === m) return false // 已经到右下角了，遍历结束也没能找到符合要求的
        j = 0
      }
      return dfs(i,j,k) // 继续遍历
    }
  }
  return dfs(0,0,0)
};
console.log(exist(board, word))