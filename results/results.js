import loadProfile from '../common/load-profile.js';
import { getUser } from '../data/api.js';
import scoreFlurbo from './scoreFlurbo.js';
import { flurboMessages, AliveFlurboMessages, deadFlurboMessages } from './messages.js';

loadProfile();

const user = getUser();

const storyDisplay = document.getElementById('story-display');

const flurboResult = scoreFlurbo(user.flurbo);



let flurboMessages = null;

if (flurboResult === 'dead') {
  
    flurboMessages = deadFlurboMessages;
}
else {
    // eslint-disable-next-line no-const-assign
    flurboMessages = AliveFlurboMessages;
}
const flurboMessage = flurboMessages[flurboResult];

let story = 'After your Epic Adventure,';
story += user.name + ' the ' + user.race + ' , ';
story += flurboMessage + ' and  ' + flurboMessage + ' . ';

storyDisplay.textContent = story;