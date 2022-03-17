let array = [-1, 0, 2, 3, 5, 8]

let targetSum = 2

function getSumof2element() {
     let result = [];
     let a = [...array]
     array.forEach((e_array) => {
          a = a.filter((e_a) => e_a != e_array)
          a.forEach((e_a) => { if (e_a + e_array == 2) result.push([e_array, e_a]) })
     })
     return result
}
console.log(getSumof2element());