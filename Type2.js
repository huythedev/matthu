function decodeText() {
    const inputText = document.getElementById('inputText').value;
    const inputArray = inputText.match(/\b\d+\b/g).map(Number);
    const result = [];

    // Loop through 25 possible shifts
    for (let i = 1; i <= 25; ++i) {
        let res = '';

        // Loop through each number in the input array
        for (let n of inputArray) {
            // If the number is 300, append ' - ' to the result
            if (n === 300) {
                res += ' - ';
            } else {
                // Shift the number by 'i' positions, wrap around if necessary, and convert to a character
                const charCode = n + i > 25 ? n + i - 26 + 'A'.charCodeAt(0) : n + i + 'A'.charCodeAt(0);
                res += String.fromCharCode(charCode);
            }
        }

        // Add the decoded result to the result array
        result.push(res);
    }

    // Call the updateOutput function with the result array
    updateOutput(result);
}
