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
module.exports = getSumof3element;