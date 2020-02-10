function scoreFlurbo(flurbo) {
    if (flurbo <= 0) {
        return 'dead';
    } 
    else if (flurbo < 10) {
        return 'frail';
    }
    return 'healthy';
}

export default scoreFlurbo;

