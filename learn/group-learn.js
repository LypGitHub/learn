// 数据源
const arr = [3, 4, 9, 12, 13, 22, 23, 32, 33, 40, 40, 42, 45, 50, 51, 55, 60, 64, 73, 73, 78, 81, 88, 89, 89, 92, 94, 94, 94, 95]
// 分组数
const GROUP_LENGTH = 10
// 每个分组最大数
const MAX_LENGTH = 6
// 最大长度
const TOTAL_LENGTH = MAX_LENGTH * GROUP_LENGTH
// 初始位置
const INIT_INDEX = 0

function group (arr) {
  let dataPool = []
  if (arr.length < GROUP_LENGTH) return arr.map(i => [i])
  if (arr.length > TOTAL_LENGTH) {
    dataPool = arr.slice(INIT_INDEX, TOTAL_LENGTH)
  }
  const map = {}
  const result = [...Array(10).keys()].map(i => [])
  const length = dataPool.length
  const first = dataPool[0]
  const end = dataPool[length - 1]

  // 初始位置一定是第一个
  result[INIT_INDEX].push(end)
  // 结束位置一定是最后一个
  result[GROUP_LENGTH - 1].push(end)

  for (let i = 1, len = dataPool.length; i < len; i++) {
    const b = dataPool[i] - fir
  }
  return map
}

console.log(group(arr))

// dalao写的。。学习dp中。。
// DP: [数组下标][已有组数][最后一组数量] = 最小差距和

function update(target, j, k, value, prep) {
  target[j] = target[j] || [];
  if (target[j][k] && target[j][k].value < value) {
      return;
  }
  target[j][k] = {
      value, 
      prep,
  };
}

function f(a, sets, min, max) {
  const m = [
      [
          undefined,
          [
              undefined,
              {
                  value: 0,
                  prep: null,
              }
          ]
      ],
  ];
  for (let i = 1; i < a.length; i++) {
      let l = m[i-1];
      let t = [];
      for (let j=0;j < l.length; j++) {
          if (!l[j]) {
              continue;
          }
          for (let k=0; k < l[j].length; k++) {
              if (!l[j][k]) {
                  continue;
              }
              const { value } = l[j][k];

              if (k >= min && j < sets) {
                  // 满足最小数量，可以开新桶。
                  update(t, j+1, 1, value, {j, k});
              }
              if (k < max) {
                  // 不足最大数量，可以用旧桶。
                  update(t, j, k+1, value + a[i] - a[i-1], {j, k});
              }
          }
      }
      m.push(t);
  }

  if (!m[a.length-1][sets]) {
      // 数量不符合条件。建议提前检查。
      throw Error('Fuck');
  }
  const best = m[a.length-1][sets].reduce((a,b)=>a.value < b.value ? a : b);
  
  let j = sets;
  let k = m[a.length-1][sets].indexOf(best);

  let out = [[a[a.length-1]]];

  for (let i = a.length-2; i >= 0; i--) {
      const {prep} = m[i+1][j][k];
      if (prep.j !== j) {
          out.unshift([]);
      }
      out[0].unshift(a[i]);
      j = prep.j;
      k = prep.k;
  }
  return out;
}

console.log(f(
  [3, 4, 9, 12, 13, 22, 23, 32, 33, 40, 40, 42, 45, 50, 51, 55, 60, 64, 73, 73, 78, 81, 88, 89, 89, 92, 94, 94, 94, 95],
  10,
  1,
  6
));
