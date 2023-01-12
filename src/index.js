
function decode(expr) {
        let arr1 = Array.from(expr);
        while (arr1.length % 10 !== 0) {
            arr1.unshift('0');
        }
        let morseCode = {
            "-----": "0",
            ".----": "1",
            "..---": "2",
            "...--": "3",
            "....-": "4",
            ".....": "5",
            "-....": "6",
            "--...": "7",
            "---..": "8",
            "----.": "9",
            ".-": "a",
            "-...": "b",
            "-.-.": "c",
            "-..": "d",
            ".": "e",
            "..-.": "f",
            "--.": "g",
            "....": "h",
            "..": "i",
            ".---": "j",
            "-.-": "k",
            ".-..": "l",
            "--": "m",
            "-.": "n",
            "---": "o",
            ".--.": "p",
            "--.-": "q",
            ".-.": "r",
            "...": "s",
            "-": "t",
            "..-": "u",
            "...-": "v",
            ".--": "w",
            "-..-": "x",
            "-.--": "y",
            "--..": "z",
            "-.-.--": "!",
            ".-.-.-": ".",
            "--..--": ",",
            "*****": " "
        };
        let arr2 = [];
        let arr3 = [];
        let arr4 = [];
        let arr5 = [];
        let decode = [];
        while (arr1.length > 0) {
            arr2.push(arr1.splice(0, 10))
        }
        for (i = 0; i < arr2.length; i++) {
            while (arr2[i].length > 0) {
                arr3.push(arr2[i].splice(0, 2).join(''))
            }
        }
        for (i = 0; i < arr3.length; i++) {
            if (arr3[i].includes('00', 0)) {
                arr4.push('=')
            }
            else if (arr3[i].includes('10', 0)) {
                arr4.push('.')
            }
            else if (arr3[i].includes('11', 0)) {
                arr4.push('-')
            }
            else if (arr3[i].includes('*', 0)) {
                arr4.push('*')
            }
        }
        while (arr4.length > 0) {
            arr5.push(arr4.splice(0, 5))
        }
        for (i = 0; i < arr5.length; i++) {
            arr5[i] = arr5[i].filter((n) => { return n != '=' }).join('')
        }
        for (elem of arr5) {
            for (key in morseCode) {
                if (elem === key) {
                    decode.push(morseCode[key])
                }
            }
        }
        let decodeStr = decode.join('')
        return decodeStr;
    }


module.exports = {
    decode
}