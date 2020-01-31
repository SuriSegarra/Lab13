function hasCompletedAllQuests(quests, user) {
    //iterate through quests
    for (let i = 0; i < quests.length; i++){
        const quest = quests[i];
        //if any of the quests is incomplete
        if (!user.complted[quest.id]){
            return false;
        }
}

//if all quests are completem we get far and return true

    return true;
}

export default hasCompletedAllQuests;