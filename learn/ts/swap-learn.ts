const swap = (arr: any[], index: number, newIndex: number) => {
  const length = arr.length
  if (index > length || newIndex > length || index === newIndex) {
    return arr;
  }
  // 删除要交换的元素，只删除一个，并且在删除的地方插入 取出需要交换的元素，然后在删除的地方插入之前的元素
  arr.splice(index - 1, 1, ...arr.splice(newIndex - 1, 1, arr[index - 1]))
  return arr;
}
const arr = [1, 2, 4, {sd: '1'}]
console.log(swap(arr, 1, 2))