function hasTargetSum(array, target) {
for (let i = 0; i < array.length; i++) {
  let eleOne = array[i]; 
  let comp = target - eleOne; 
  // for (let j = i + 1; j < array.length; j++) {
  //   if (array[j] === comp) {
  //     return true;
  //   }
  // }
  if (array.includes(comp)) {
    return true;
  }
 }
 return false;
}

/* 
  Write the Big O time complexity of your function here
*/ //0(1) is the sum up notation
//0(n2) is the nested iteration

/* 
  Add your pseudocode here
*///iterate through array
//foreach or nested foreach? 
//nested loops. if ele1+ele2 = target, return true


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
