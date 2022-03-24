let array = [-1, 0, 2, 3, 5, 8]

function getSumof2element(arr, target) { //Time complexity O(n), Space complexity O(1)
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
console.log(getSumof2element(array,3))
module.exports = getSumof2element;