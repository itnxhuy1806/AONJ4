let array = [-1, 0, 2, 3, 5, 8]

let targetSum = 2

console.log(array)
function getSumof2element(arr, target) { //Time complexity O(n^2), Space complexity O(n)
     let result = []
     let a = [...arr]
     arr.forEach((e_arr) => {
          a = a.filter((e_a) => e_a != e_arr)
          a.forEach((e_a) => { if (e_a + e_arr == target) result.push([e_arr, e_a]) })
     })
     return result
}
function getSumof2element2(arr, target) { //Time complexity O(n), Space complexity O(1)
     let result = []
     let i = 0;
     let j = arr.length - 1;
     while (i < j) {
          if (arr[i] + arr[j] == target) {
               result.push([arr[i], arr[j]])
               i++;
               j--;
          }
          else {
               if (arr[i] + arr[j] < target)
                    i++;
               else
                    j--;
          }
     }
     return result;
}
function getSumof3element(arr, target) {
     let result = []
     let i = 0;
     while (i + 1 < arr.length - 1) {
          let k = i + 1;
          let j = arr.length - 1;
          while (k < j) {
               s = arr[i] + arr[k] + arr[j];
               if (s == target) {
                    result.push([arr[i], arr[k], arr[j]])
                    k++;
                    j--;
               }
               else {
                    if (s < target)
                         k++;
                    else
                         j--;
               }
          }
          i++;
          
     }
     return result;
}
console.log(getSumof3element(array, 11))