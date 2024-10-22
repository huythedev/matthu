function decodeText() {
    const inputText = document.getElementById('inputText').value;
    const result = [];

    // Kiểm tra xem đầu vào có phải là xâu chữ hay không
    if (inputText.match(/\b\d+\b/g)) {
        // Nếu là xâu số, sử dụng phương thức decodeTextForNumber
        decodeTextForNumber(inputText, result);
    } else {
        // Nếu không, giả sử đây là xâu chữ và sử dụng phương thức decodeTextForString
        decodeTextForString(inputText, result);
    }

    // Đưa kết quả ra ngoài
    updateOutput(result);
}

function caesarCipherEncrypt(text, shift) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        if (text[i] !== ' ') {
            if (text[i] === text[i].toUpperCase()) {
                result += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
            } else {
                result += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
            }
        } else {
            result += ' ';
        }
    }
    return result;
}

function decodeTextForString(text, result) {
    for (let shift = 1; shift <= 25; shift++) {
        const encodedText = caesarCipherEncrypt(text, shift);
        const reversedText = reverseText(encodedText); // You haven't provided the definition of reverseText function.
        result.push(`${encodedText} - Reverse: ${reversedText}`);
    }
}

function decodeTextForNumber(st, result) {
    for (let z = 1; z <= 26; ++z) {
        let res = "";
        for (let i = 0; i < st.length; ++i) {
            if (st[i].charCodeAt(0) - '0'.charCodeAt(0) + z > 26) {
                res += String.fromCharCode(((st[i].charCodeAt(0) - 26 + z) % 26) + 'A'.charCodeAt(0) - 1);
            } else {
                res += String.fromCharCode((st[i].charCodeAt(0) + z) + 'A'.charCodeAt(0) - 1);
            }
        }
        result.push(res);
    }
}

function reverseText(text) {
    return text.split('').reverse().join('');
}

