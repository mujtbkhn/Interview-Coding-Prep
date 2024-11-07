//Leetcode 238

var productExceptSelf = function(nums) {
    // let n = nums.length;
    // let res = new Array(n)
    // for(let i =0; i<n; i++){
    //     let prod = 1;
    //     for(let j =0; j<n; j++){
    //         if(i !== j){
    //             prod *= nums[j];
    //         }
    //     }
    //     res[i] = prod;
    // }
    // return res;

    let n = nums.length
    let res = new Array(n).fill(1)


    let leftProd = 1
    for(let i=0; i<n; i++){
        res[i] = leftProd
        leftProd *= nums[i]
    }

    let rightProd = 1;
    for(let i=n-1; i>=0; i--){
        res[i] *= rightProd
        rightProd *= nums[i]
    }

    return res
};

console.log(productExceptSelf([1,2,3,4]))