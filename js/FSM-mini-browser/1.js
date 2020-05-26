// a
function match(string) {
  for (let c of string) {
    if (c === 'a') return true;
  }
  return false;
}
// ab
function matchAb(string) {
  let foundA = false;
  for (let c of string) {
    if (c === 'a') {
      foundA = true;
    } else if (foundA && c === 'b') {
      return true;
    } else {
      // 重新开始 匹配 ab  foundA 失效了
      foundA = false;
    }
  }
  return false;
}
console.log(matchAb('acbab'))
// abcdef
function matchAbcdef(string) {
  let foundA = false;
  let foundB = false;
  let foundC = false;
  let foundD = false;
  let foundE = false;
  for (let c of string) {
    if (c === 'a') {
      foundA = true;
    } else if (foundA && c === 'b') {
      foundB = true;
    } else if (foundB && c === 'c') {
      foundC = true;
    } else if (foundC && c === 'd') {
      foundD = true;
    } else if (foundD && c === 'e') {
      foundE = true;
    } else if (foundE && c === 'f') {
      return true;
    } else {
      // 重新开始 匹配 ab  foundA 失效了
      foundA = false;
      foundB = false;
      foundC = false;
      foundD = false;
      foundE = false;
    }
  }
  return false;
}
// abc
function newMatch(string) {
  let state = foundA;
  for (let c of string) {
    state = state(c)
  }
  return state === end
}
function foundA(c) {
  if (c === 'a') {
    return foundB;
  } else {
    return foundA;
  }
}
function foundB(c) {
  if (c === 'b') {
    return foundC;
  } else {
    return foundA;
  }
}
function foundC(c) {
  if (c === 'c') {
    return end;
  } else {
    return foundA;
  }
}
function end() {
  return end
}
console.log(newMatch('abcbacbc'))