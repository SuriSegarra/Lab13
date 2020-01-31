import { getUser } from '../data/api';
import isDead from '../common/is-dead.js';

function loadProfile() {
    const name = document.getElementById('name');
    const character = document.getElementById('character');
    const flurbo = document.getElementById('flurbo');

    const user = getUser();

    if (!user) {
        window.location = '../index.html';
    }

    name.textContent = user.name;
    character.src = '../assets' + user.race + 'jpg';
    flurbo.textContent = user.flurbo;

    if (isDead(user)) {
        flurbo.textContent = 'DOA';
    }
    else {
        flurbo.textContent.user.flurbo;
    }
}

export default loadProfile;