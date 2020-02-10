import { saveUser } from '../data/api.js';
import makeUser from './make-user.js';



const userSingUp = document.getElementById('user-sign-up');


userSingUp.addEventListener('submit', function(event) {
 
    event.preventDefault();



    const formData = new FormData (userSingUp);

    const user = makeUser (formData);


    saveUser(user);
    window.location = 'map';
});