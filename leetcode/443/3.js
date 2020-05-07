var compress = function(chars) {
    let letter = chars[0];
    chars.push('');
    let flag = 0;
    var sliceArr = [];
    for (let i = 0; i < chars.length;) {
        if (letter == '') {
            break;
        }
        if (letter == chars[i]) {
            flag++;
            i++;
        } else {
            letter = chars[i];
            if (flag > 1) {
                sliceArr = flag.toString().split('');
                chars.splice(i-flag+1, flag-1);
                for (let j = sliceArr.length-1, lenj = sliceArr.length; j >= 0; j--) {
                    chars.splice(i-flag+1, 0, sliceArr[j]);
                }
                i = i - flag + flag.toString().length+1;
            }
            flag = 0;
        }
    }
    chars.pop();
    return chars.length;
};
