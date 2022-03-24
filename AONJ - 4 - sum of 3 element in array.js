function getSumof3element(arr, target) {
     let result = []
     let left = 0;
     while (left + 1 < arr.length - 1) {
          let mid = left + 1;
          let right = arr.length - 1;
          while (mid < right) {
               sum = arr[left] + arr[mid] + arr[right];
               if (sum == target) {
                    result.push([arr[left], arr[mid], arr[right]])
                    mid++;
                    right--;
               }
               else
                    if (sum < target)
                         mid++;
                    else
                         right--;
          }
          left++;
     }
     return result;
}
module.exports = getSumof3element;