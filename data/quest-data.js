//here are the quest choices...
const alien = {
    id:'cromulons',
    title:'Planet Earth',
    map: {
        top: '89%',
        left:'44%'
    },
    image: '../assets/quests/earth turn.jpg',
  
    description: `
    A alien entity appears with musical demands and it seeks a live performance of a catchy new song. Unfortunately, an earthquake hit the Grammy Awards presentation, killing all of Earth's most famous musicians. You have to come up with a new catchy song to save the world. What do you do? 
    `,

    choices:[{
        id: 'religion',
        description:'Get involve with a religious cult whose beliefs are based on their interpretation of the actions of the Cromulons.',
        results: `Thanks to you the world got desqualifies and the Cromulons destroyed the planet.`,
        flurbo: 2
    }, {
        id:'call jerry',
        description: `
        Call Jerry to save you with his inteligence. He is the only one who can save us.`,
        results: `Don't be a Jerry. we don't give a f*ck what Jerry think. `,
        flurbo: 0
    },
    {
        id: 'play single ladies',
        description: 
        `Play single Ladies on the speakers.`,
        results:'The head hates beyonce',
        flurbo: 1
    },
    {
        id: 'Get Schwifty',
        description: 
        `Oh, yeah! You gotta get schwifty
        `,
        results:'The head is pleased. Earth is save now.',
        flurbo: 3
    }]
};


const cable = {
    id:'cable',
    title:'Interdimensional Cable',
    map: {
        top: '57%',
        left:'20%'
    },
    image:'../assets/quests/cable.jpg',
    
    
    description: `
    The heads left. And you go chill at your house and watch TV but it sucks and your grandpa puts an interdimensional cable.  What channel would you watch?
    `,

    choices:[{
        id:'yourself',
        description: `
        watch another version of your famous self.`,
        results: `you're so a Jerry. Loser.`,
        flurbo: 0
    },
    {
        id: 'HBO',
        description: 
        `Put HBO and watch Game Of Thrones `,
        results:`The final season was so disapointed you feel like a loser.`,
        flurbo: 1
    },
    {
        id: 'watch',
        description: 
        `watch various commercials and clips from alternate realities.
       `,
        results:`Best decision ever come on. I don't even have to say anything.`,
        flurbo: 3
    }]
};
    
const parasite = {
    id:'parasite',
    title:'Parasite Invasion',
    map: {
        top: '31%',
        left:'5%'
    },
    image:'../assets/quests/parasite.jpg',
            
    description: `
            An alien parasites arrive on a planet, they implant people's minds with false memories. These telepathic little bastards embed themselves into memories and multiply to take over planets! They're disgusting, so be careful of any wacky or zany characters that pop up. Who would you trust?
    `,

    choices:[{
        id:'Mr. Poopybuthole',
        description: `
        He says he is real but you dont see any pictures of him on your phone... suspicious. shoot him. `,
        results: `DUDEEE HE IS REAL!`,
        flurbo: 2
    },
    {
        id: 'Sleepy Gary',
        description: 
        `He convince you that he is your lover. You believe him. `,
        results:`Jerry you ignorant. he is not real. your dead.`,
        flurbo: 0
    },
    {
        id: 'nobody',
        description: 
        `Everybody is a parasite except Mr. Poopybuthole'
       `,
        results:`Everybody was fake. Good job. `,
        flurbo: 3
        
    
    }]
};

const quests = [
    alien,
    cable,
    parasite,
];

export default quests;