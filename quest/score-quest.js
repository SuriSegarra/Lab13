function scoreQuest(choice, questId, user) {
    user.flurbo += choice.flurbo;
    
    user.completed[questId] = true;
}

export default scoreQuest;