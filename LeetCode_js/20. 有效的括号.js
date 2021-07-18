// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

// 使用栈的方式实现

var isValid = function (s) {
    const obj = {
      '(': ')',
      '[': ']',
      '{': '}',
    }
    const b = []
    for (var i = 0; i < s.length; i++) {
      if (obj[s[i]]) {
        b.push(obj[s[i]])
      } else {
        if (b.pop() !== s[i]) {
          return false
        }
      }
    }
    if (b.length) return false
    return true
  };