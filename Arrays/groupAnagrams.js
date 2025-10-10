//leet49: Group Anagrams
/*
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/

let strs = ["eat","tea","tan","ate","nat","bat"];

const groupAnagrams = (strs) => {
    let res = {};
    for(let s of strs){
        let count = new Array(26).fill(0);//for storing string patterns as key

        for(let c of s){
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;//calculating the freq of each character in a str
        }
        const key = count.join(',');

        if(!res[key]){
            res[key] = [];
        }
        res[key].push(s);
    }

    return Object.values(res);
}

console.log(groupAnagrams(strs));