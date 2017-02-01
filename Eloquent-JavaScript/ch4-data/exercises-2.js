function reverseArray(array) {
  let result = []

  // for (let i = array.length - 1; i >= 0; i--) {
  //   result.push(array[i])
  // }

  for (let i = 0; i < array.length; i++) {
    result.unshift(array[i])
  }
  return result
}

function quickSort(array) {
  function quick(array, left, right) {
    let index
    if (array.length > 1) {
      index = partition(array, left, right)

      if (left < index - 1) {
        quick(array, left, index - 1)
      }

      if (index < right) {
        quick(array, index, right)
      }
    }
  }

  function partition(array, left, right) {
    let pivot = array[Math.floor((left + right) / 2)]
    console.log('中间值：', pivot)
    let i = left
    let j = right

    while (i < j) {
      console.log('此时：', i, ' ', j)

      while (array[i] > pivot) {
        i++
      }
      while (array[j] < pivot) {
        j--
      }
      console.log('此时：', i, ' ', j)

      if (i <= j) {
        swapQuickSort(array, i, j)
        i++
        j--
      }
    }
    console.log(i)
    return i

  }

  function swapQuickSort(array, i, j) {
    console.log('交换', array[i], array[j])
    let aux = array[i]
    array[i] = array[j]
    array[j] = aux
  }

  quick(array, 0, array.length - 1)
}

function reverseArrayInPlace(array) {
  let mid = Math.floor(array.length / 2)
  for (let i = 0; i < mid; i++) {
    swap(array, i, array.length - 1 - i)
  }

  function swap(array, first, second) {
    let temp = array[first]
    array[first] = array[second]
    array[second] = temp
  }
}



console.log(reverseArray(["A", "B", "C"]))

let arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)

arrayValue = [7, 5, 4, 1, 3, 4, 5, 6, 7, 7, 5, 4, 1, 3, 4, 5, 6, 7]
quickSort(arrayValue)
console.log(arrayValue)
