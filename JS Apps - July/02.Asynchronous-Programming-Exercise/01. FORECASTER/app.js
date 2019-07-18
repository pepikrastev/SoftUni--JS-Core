function attachEvents() {

    const elements = {
        inputField: document.getElementById('location'),
        button: document.getElementById('submit'),
        current: document.getElementById('current'),
        upcoming: document.getElementById('upcoming'),
        forecast: document.getElementById('forecast')
    };

    const symbols = {
        sunny: '☀',//'&#x2600', 
        partlySunny: '⛅',//'&#x26C5',
        overcast: '☁', // '&#x2601',
        rain: '☂', //'&#x2614',
        degrees: '°' //'&#176'
    };

    elements.button.addEventListener('click', loadWeatherInfo);


    function loadWeatherInfo() {

        elements.forecast.style.display = 'block';

        fetch('https://judgetests.firebaseio.com/locations.json')
            .then(handler)
            .then(loadLocationWeatherInfo);
    }

    function loadLocationWeatherInfo(data) {
        let location = data.filter((o) => o.name === elements.inputField.value)[0];

        fetch(`https://judgetests.firebaseio.com/forecast/today/${location.code}.json`)
            .then(handler)
            .then((data) => showLocationWeatherInfo(data, location.code));
    }

    function showLocationWeatherInfo(data, code) {


        let divForecast = createHTMLElement('div', 'forecast');
        let symbol = symbols[data.forecast.condition.toLowerCase()];
        let spanSymbol = createHTMLElement('span', ['condition', 'symbol'], symbol);

        let spanHolder = createHTMLElement('span', 'condition');

        let spanName = createHTMLElement('span', 'forecast-data', data.name);
        let degrees = `${data.forecast.low}${symbols.degrees}/${data.forecast.high}${symbols.degrees}`;

        let spanDegrees = createHTMLElement('span', 'forecast-data', degrees);
        let spanCondition = createHTMLElement('span', 'forecast-data', data.forecast.condition);

        spanHolder = appendChildrenToParent([spanName, spanDegrees, spanCondition], spanHolder);
        divForecast = appendChildrenToParent([spanSymbol, spanHolder], divForecast);

        elements.current.appendChild(divForecast);

        loadUpComingLocationWeatherInfo(code);
    }

    function loadUpComingLocationWeatherInfo(code) {
        fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`)
            .then(handler)
            .then(showUpComingLocationWeatherInfo)
    }

    function showUpComingLocationWeatherInfo(data) {

        let divForecast = createHTMLElement('div', 'forecast-info');

        data.forecast.forEach((o) => {
            let spanHolder = createHTMLElement('span', 'upcoming');

            let symbol = symbols[o.condition.toLowerCase()] || symbols['partlySunny'];
            let spanSymbol = createHTMLElement('span', 'symbol', symbol);

            let degrees = `${o.low}${symbols.degrees}/${o.high}${symbols.degrees}`;
            let spanDegrees = createHTMLElement('span', 'forecase-data', degrees);
            let spanCondition = createHTMLElement('span', 'forecase-data', o.condition);

            divForecast.appendChild(appendChildrenToParent([spanSymbol, spanDegrees, spanCondition], spanHolder));
        });

        elements.upcoming.appendChild(divForecast);
    }

    function createHTMLElement(tagName, className, textContent) {

        let currentElement = document.createElement(tagName);

        if (typeof className === 'string') {
            currentElement.classList.add(className);
        } else if (typeof className === 'object') {
            currentElement.classList.add(...className);
        }

        if (textContent) {
            currentElement.textContent = textContent;
        }

        return currentElement;
    }

    function appendChildrenToParent(children, parent) {
        children.forEach((child) => parent.appendChild(child));

        return parent;
    }

    function handler(response) {
        if (response.status > 400) {
            elements.forecast.innerHTML = 'MyError'
            throw new Error(`Something went wrong. Error: ${response.statusText}`);
        }

        return response.json();
    }
}

attachEvents();

