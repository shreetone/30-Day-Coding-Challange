function permuteString(s) {
  const result = [];
  const chars = s.split('');
  const used = new Array(chars.length).fill(false);

  function backtrack(path) {
    if (path.length === chars.length) {
      result.push(path.join(''));
      return;
    }
    const seen = new Set();

    for (let i = 0; i < chars.length; i++) {
      if (used[i] || seen.has(chars[i])) continue;

      used[i] = true;
      path.push(chars[i]);
      backtrack(path);
      path.pop();
      used[i] = false;
      seen.add(chars[i]);
    }
  }
  backtrack([]);
  return result;
}
console.log(permuteString("abc"));

