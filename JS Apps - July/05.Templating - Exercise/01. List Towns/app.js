function attachEvents(){

    let loadTownsBtn = document.querySelector('#btnLoadTowns');

    loadTownsBtn.addEventListener('click', loadTowns);

    function loadTowns(){

        let towns = document.querySelector('#towns')
        .value
        .split(', ')
        .map(el => 
            ({name: el}) 
        );
        
        renderTowns(towns);
    }

    function renderTowns(towns){
        let template = document.querySelector('#towns-tempate').innerHTML;
        let compiled = Handlebars.compile(template);
        const rendered = compiled({
            towns
        });

        document.querySelector('#root').innerHTML = rendered;
    }
}

attachEvents()