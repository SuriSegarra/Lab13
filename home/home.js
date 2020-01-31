import { saveUser } from '../data/api.js';
import makeUser from './make-user.js';

//grabbing form from home page

const userSingUp = document. getElementById('user-sign-up');

//when submit...
userSingUp.addEventListener('submit', function (event) {
    //to not redirect
    event.defaultPrevented();


//new form data

const formData = new formData (userSingUp);
//uses data to make new user
const user = makeUser (formData);

//pop user in local storage
saveUser(user);

//send us to map page
window.location = 'map';
});