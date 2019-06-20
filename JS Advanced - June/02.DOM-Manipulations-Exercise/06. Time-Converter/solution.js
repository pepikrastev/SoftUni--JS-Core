function attachEventsListeners() {

    let buttons = document.querySelectorAll('div input:last-child');

    for (let button of buttons) {

        button.addEventListener('click', (e) => {
            let currentInput = e.target.parentNode.children[1];
            let value = Number(currentInput.value);
            let currentId = currentInput.id;

            let time = [];

            switch (currentId) {
                case 'days':
                    time['days'] = value;
                    time['hours'] = value * 24;
                    time['minutes'] = value * 1440;
                    time['seconds'] = value * 86400;
                    break;
                case 'hours':
                    time['days'] = value / 24;
                    time['hours'] = value;
                    time['minutes'] = value * 60;
                    time['seconds'] = value * 3600;
                    break;
                case 'minutes':
                    time['days'] = value / 1440;
                    time['hours'] = value / 60;
                    time['minutes'] = value;
                    time['seconds'] = value * 60;
                    break;
                case 'seconds':
                    time['days'] = value / 86400;
                    time['hours'] = value / 3600;
                    time['minutes'] = value / 60;
                    time['seconds'] = value;
                    break;
            }

            for (let btn of buttons) {
                let input = btn.parentNode.children[1];
                input.value = time[input.id];
            }
        });
    }
}