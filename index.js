const canPlaceFlowers = (flowerbed, n) => {
  //     You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
  // Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.
  // Example 1:
  // Input: flowerbed = [1,0,0,0,1], n = 1
  // Output: true
  // Example 2:
  // Input: flowerbed = [1,0,0,0,1], n = 2
  // Output: false
  planted = 0;
  plotUsed = false;
  
  
  j = flowerbed.length;
  for(let i = 0; i < flowerbed.length; i++){
    j =  flowerbed.length;
      if(flowerbed[i] == 1  && flowerbed[j] == 1) {
        plotUsed = true;
      } else if(plotUsed) {
        plotUsed = false;
      } else if(flowerbed[i] == 0) {
        planted++;
        plotUsed = true;
      }
    j--;
  }

  if(n == planted) {
    planted = false;
  } else {
    planted = true;
  }
   return planted
};
console.log(canPlaceFlowers([1,0,0,0,1], 1))
console.log(canPlaceFlowers([1,0,0,0,1], 2))
console.log(canPlaceFlowers([0,0,0,0,0], 3))