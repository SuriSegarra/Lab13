//here are the quest choices...
const alien = {
    id:'Cromulons',
    tittle:'Planet Earth',
    map: {
        top: '89%',
        left:'44%'
    },
    image:'assets/earth turn.jpg',
    // audio: '',
    // action:'' 
    description: `
    A alien entity appears with musical demands and it seeks a live performance of a catchy new song. Unfortunately, an earthquake hit the Grammy Awards presentation, killing all of Earth's most famous musicians. You have to come up with a new catchy song to save the world. What do you do? 
    `,

    choices:[{
        id: 'religion',
        description:'Get involve with a religious cult whose beliefs are based on their interpretation of the actions of the Cromulons.',
        results: `Thanks to you the world got desqualifies and the Cromulons destroyed the planet.`,
        flurbo: 0
    }, {
        id:'call jerry',
        description: `
        Call Jerry to save you with his inteligence. He is the only one who can save us.`,
        results: `Don't be a Jerry. we don't give a f*ck what Jerry think. `,
        flurbo: 0
    },
    {
        id: 'Get Schwifty',
        description: 
        `Oh, yeah! You gotta get schwifty
        You gotta get schwifty in here
        Its time to get schwifty
        Oh oh
        You gotta get schwifty
        Oh, yeah!
        Take off your pants and your panties
        sh** on the floor
        Time to get Schwifty in here
        Gotta sh** on the floor`,
        results:'The head is pleased. Earth is save now.',
        flurbo: 100
    }]
};

const 
