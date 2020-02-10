function scoreFlurbo(flurbo) {
    if (flurbo <= 0) {
        return 'poor';
    } 
    else if (flurbo < 2) {
        return 'modest';
    }
    return 'rich';
}

export default scoreFlurbo;