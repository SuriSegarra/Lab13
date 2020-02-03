import { getUser } from '../data/api.js';
import isDead from './is-dead.js';

function loadProfile() {

    const name = document.getElementById('name');
    const character = document.getElementById('character');
    
    const flurbo = document.getElementById('flurbo');

    const user = getUser();

    if (!user) {
        window.location = './';
    }
    name.textContent = user.name;
    character.src = '../assets/characters/' + user.race + '.jpg';
    flurbo.textContent = user.flurbo;

    if (isDead(user)) {
        flurbo.textContent = 'DOA';
    }
    else {
        flurbo.textContent = user.flurbo;
    }
}
export default loadProfile;
