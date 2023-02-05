//88. Merge Sorted Array

var merge = function(nums1, m, nums2, n) {

    let mstart = m - 1;
    let nstart = n - 1;
    let resultstart = m + n - 1;

    while(nstart>=0){
        let nums1val = nums1[mstart];
        let nums2val = nums2[nstart];

        if(nums1val > nums2val){
            nums1[resultstart] = nums1val;
            mstart--;
            resultstart--;
        }else{
            nums1[resultstart] = nums2val
            nstart--;
            resultstart--;
        }

    }

};