function scoreFlurbo(gold) {
    if (flurbo === 0) {
        return 'poor';
    } 
    else if (gold < 2) {
        return 'modest';
    }
    return 'rich';
}

export default scoreFlurbo;