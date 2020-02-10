import loadProfile from '../common/load-profile.js';
import { getUser } from '../data/api.js';
import scoreFlurbo from './scoreFlurbo.js';
import { AliveFlurboMessages, deadFlurboMessages } from './messages.js';

loadProfile();

const user = getUser();

const storyDisplay = document.getElementById('story-display');

const flurboResult = scoreFlurbo(user.flurbo);

const flurboMessages = null;
if (flurboResult === 'dead') {
    // eslint-disable-next-line no-const-assign
    flurboMessages = deadFlurboMessages;
}
else {
    // eslint-disable-next-line no-const-assign
    flurboMessages = AliveFlurboMessages;
}

const flurboMessage = flurboMessages[flurboResult];

let story = 'After your Epic Adventure,';
story += user.name + ' the ' + user.race + ' , ';
story += flurboMessage + ' . ';

storyDisplay.textContent = story;