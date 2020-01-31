//build user out of formdata object

function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        race: formData.get('race'),
        flurbo: 35,
        completed:{}
    };
    return user;
}

export const newMakeUser = (formData) => ({
    name: formData.get('name'),
    race: formData.get('race'),
    flurbo:35,
    completed: {}
});

export default makeUser;