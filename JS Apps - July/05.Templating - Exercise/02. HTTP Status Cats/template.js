(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        const template = document.querySelector('#cat-template').innerHTML;
        const compiled = Handlebars.compile(template);

        const rendered = compiled({
            cats: window.cats
        });

        
        document.querySelector('#allCats').innerHTML = rendered;

        let showButton = document.querySelectorAll('.showBtn');
        
        let selection = document.getElementById('allCats');
        selection.addEventListener('click', showMoreInfo);

        function showMoreInfo(ev) {
            if (ev.target.className === 'showBtn') {
                if (ev.target.textContent === 'Hide status code') {
                    ev.target.textContent = 'Show status code';
                    ev.target.nextElementSibling.style.display = 'none';
                } else {
                    ev.target.textContent = 'Hide status code';
                    ev.target.nextElementSibling.style.display = 'block';
                }
            }
        }
    }

})();
