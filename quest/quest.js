import loadPorfile from '../common/load-profile.js';
import { getUser, saveUser } from '..data/api,js';
import quests from '../data/quest-data.js';
import createChoice from '.create-choice.js';
import findById from '../common/find-by-id.js';
import scoreQuest from './score-quest.js';

loadPorfile();

//grab queery param from URL
const searchParams = new URLSearchParams (window.location.search);
//get quest id form URL 
const questId = searchParams.get('id');
//use old to find quest 
const quest = findById(quests, questId);

//if there is no such quest
if(!quest) {
    //send to map
    window.location = '../map';
}

const title = document.getElementById('title');
const image = document.getElementById('image');
const description = document.getElementById('description');
const choiceForm = document.getElementById('choice-form');
const choices = document.getElementById('choices');
const result = document.getElementById('result');
const resultDescription = document.getElementById('result-description');

//use quest that we found to manipulate de dom
title.textContent = quest.title;
image.src = '../assets' + quest.image;
description.textContent = quest.description;


//for each of the quest choices...
for (let index = 0; index < quest.choices.length; index++) {
    const choice = quest.choices[index];
    //go makea choice dom element
    const choiceDom = createChoice(choice);
    //and append that choice
    choices.appendChild(choiceDom);

}
choiceForm.addEventListener('submit', function(event) {
    event.preventDefault();

    //get user choice
    const formData = new FormData(choiceForm);
    const choiceId = formData.get('choice');
    //use olf to find chocies
    const choice = findById(quest.choices, choiceId);

    //get user out of local storage
    const user = getUser();
    //create a score and manipulate user state
    scoreQuest(choice, quest.id, user);
    //save the user

    saveUser(user);
    choiceForm.classList('hidden');
    result.classList.remove('hidden');
    resultDescription.textContent = choice.result;
    //reload profile for new stats
    loadPorfile();

});