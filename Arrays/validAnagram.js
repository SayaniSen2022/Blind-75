//leet242: Anagram (eg: pan & nap => isAnagram)

let s = "Ana%^&gra  m";
let t = "nAgara#()m";

const isAnagram = (s,t) => {
    let strS = s.replace(/[^a-z]/gi, "").toLowerCase();
    let strT = t.replace(/[^a-z]/gi, "").toLowerCase();

    if(strS.length !== strT.length) return false;

     let sMap = new Map();
    let tMap = new Map();

    for(let i=0; i< strS.length; i++){
        if(sMap.has(strS.charAt(i))){
            sMap.set(strS.charAt(i), sMap.get(strS.charAt(i))+1);
        }else{
            sMap.set(strS.charAt(i), 1);
        }
    }
    for(let k = 0; k < strT.length; k++){
        if(tMap.has(strT.charAt(k))){
            tMap.set(strT.charAt(k), tMap.get(strT.charAt(k))+1);
        }else{
            tMap.set(strT.charAt(k), 1);
        }
    }

    return compareMaps(sMap, tMap);
}

function compareMaps(map1, map2) {
    let testVal;
    if(map1.size !== map2.size) return false;

    for(const[key, val] of map1){
        testVal = map2.get(key);

        if(testVal !== val || (testVal === undefined && !map2.has(key))){
            return false;
        }
    }
    return true;
}