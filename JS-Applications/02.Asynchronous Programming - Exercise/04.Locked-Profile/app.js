async function lockedProfile() {
    const mainContainer = document.getElementById('main');
    const profileTemplate = document.querySelector('.profile');
    mainContainer.replaceChildren();
    
    const url = `http://localhost:3030/jsonstore/advanced/profiles`;

    const response = await fetch(url);
    const data = await response.json();
    
    const allProfiles = Object.values(data);
    
    for (let id = 0; id < allProfiles.length; id++) {
        const profile = allProfiles[id];
        let newUser = profileTemplate.cloneNode(true);

        const allInputs = Array.from(newUser.querySelectorAll('input'));

        allInputs[0].name = `user${id + 1}Locked`;
        allInputs[1].name = `user${id + 1}Locked`;
        allInputs[2].name = `user${id + 1}Username`;
        allInputs[3].name = `user${id + 1}Email`;
        allInputs[4].name = `user${id + 1}Age`;

        allInputs[2].value = profile.username;
        allInputs[3].value = profile.email;
        allInputs[4].value = profile.age;

        allInputs[4].type = 'email';
        
        const hiddenInfo = newUser.querySelector('div')
        hiddenInfo.hidden = true;
        hiddenInfo.removeAttribute("class");
        hiddenInfo.setAttribute('id', `user${id + 1}HiddenFields`);

        const showInfoBtn = newUser.querySelector('button');
        showInfoBtn.addEventListener('click', showInfo);

        mainContainer.appendChild(newUser);
    }

    function showInfo(event) {
        const btn = event.target;
        const userProfile = btn.parentElement;
        const hiddenInfo = userProfile.querySelector('div');
        const tick = userProfile.querySelector('input[type="radio"]:checked').value;

        if (tick == 'unlock' && btn.textContent == 'Show more') {
            hiddenInfo.hidden = false;
            btn.textContent = 'Hide it';
        } else if (tick == 'unlock' && btn.textContent == 'Hide it') {
            hiddenInfo.hidden = true;
            btn.textContent = 'Show more';
        }
    }
}