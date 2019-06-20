function attachGradientEvents() {
    
    let gradientElement = document.getElementById('gradient');
    gradientElement.addEventListener('mousemove', move);
    gradientElement.addEventListener('mouseout', out);

    function move(event){
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        document.getElementById('result').textContent = `${power}%`;
    }

    function out() {
        document.getElementById('result').textContent = '';
    }
}