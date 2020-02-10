

function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        race: formData.get('race'),
        flurbo: 3,
        completed:{}
    };
    return user;
}

export const newMakeUser = (formData) => ({
    name: formData.get('name'),
    race: formData.get('race'),
    flurbo: 3,
    completed: {}
});

export default makeUser;