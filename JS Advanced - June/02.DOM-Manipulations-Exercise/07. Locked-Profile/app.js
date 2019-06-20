function lockedProfile() {

    let profiles = document.getElementsByClassName('profile');

    Array.from(profiles).forEach(p => {
        let button = p.getElementsByTagName('button')[0];
        button.addEventListener('click', showMore)
    });

  function showMore() {
        let profil = this.parentNode;
        let unlockedElement = profil.getElementsByTagName('input')[1];
        let button = profil.getElementsByTagName('button')[0];
        let lockedInfo = profil.children[9];

        if (unlockedElement.checked && button.textContent === 'Show more') {
            lockedInfo.style.display = 'block';
            button.textContent = 'Hide it';
        } else if (unlockedElement.checked && button.textContent === 'Hide it') {
            lockedInfo.style.display = 'none';
            button.textContent = 'Show more';
        }
    }
}