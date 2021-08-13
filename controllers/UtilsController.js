const checkRequestParameters = async (desired, real) => {
    var validated = true;

    for (var attr in desired){
        if (!real[attr] || typeof real[attr] != desired[attr]){
            validated = false;
        }
    }

    return validated;
}
