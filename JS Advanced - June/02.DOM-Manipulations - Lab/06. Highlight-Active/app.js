function focus() {
   
    let input = document.getElementsByTagName('input');

    Array.from(input).forEach(i => {
        i.addEventListener('focus', () => {
            i.parentNode.className = 'focused';
        });

        i.addEventListener('blur', () => {
            i.parentNode.removeAttribute('class');
        });
    });
}