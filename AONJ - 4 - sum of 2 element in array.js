function getSumof2element(arr, target) { //Time complexity O(n), Space complexity O(1)
     let result = []
     let left = 0;
     let right = arr.length - 1;
     while (left < right) {
          s = arr[left] + arr[right]
          if (s == target) {
               result.push([arr[left], arr[right]])
               left++;
               right--;
          }
          else
               if (s < target)
                    left++;
               else
                    right--;
     }
     return result;
}
module.exports = getSumof2element;