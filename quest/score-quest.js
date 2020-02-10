function scoreQuest(choice, questId, user) {
console.log('This is the user:', user, 'This is the choice:', choice);
    user.flurbo += choice.flurbo;
   
    user.completed[questId] = true;
}

export default scoreQuest;