function encodeAndDecodeMessages() {
    let firstTextArea = document.getElementsByTagName('textarea')[0];
    let secondTextArea = document.getElementsByTagName('textarea')[1];

    let encodeButton = document.getElementsByTagName('button')[0];
    let decodeButton = document.getElementsByTagName('button')[1];

    encodeButton.addEventListener('click', () => {

        let input = firstTextArea.value;
        let encodedText = '';

        for (let i = 0; i < input.length; i++) {
            encodedText += String.fromCharCode(input.charCodeAt(i) + 1);

        }

        firstTextArea.value = '';
        secondTextArea.value = encodedText;
    });

    decodeButton.addEventListener('click', function () {

        let input = secondTextArea.value;
        let decodeText = '';

        for (let i = 0; i < input.length; i++) {
            decodeText += String.fromCharCode(input.charCodeAt(i) - 1);
        }

        secondTextArea.value = decodeText;
    });
}