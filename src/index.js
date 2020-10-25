module.exports = function check(str, bracketsConfig){
    let str1=str;
    let str2='';
    let compare_str='';
    let ind=0;

    while (str1.length>0) {
        compare_str=str1;
        for (let i = 0; i < str1.length; i++) {
            for (let j = 0; j < bracketsConfig.length; j++) {
                ind = str1.indexOf(bracketsConfig[j][0]+bracketsConfig[j][1]);
                if (ind>=0){
                    str2 = str1.slice(0, ind) + str1.slice(ind + 2);
                    str1 = str2;
                }
            }
        }
        if (compare_str.length===str1.length){
            break
        }
    }

    if (str1.length===0){
        return true
    }else{
        return false
    }
}

