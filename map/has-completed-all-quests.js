function hasCompletedAllQuests(quests, user) {
    //iterate through quests
    for (let i = 0; i < quests.length; i++){
        const quest = quests[i];
        //if any of the quests is incomplete
        if (!user.completed[quest.id]){
            return false;
        }
    }



    return true;
}

export default hasCompletedAllQuests;