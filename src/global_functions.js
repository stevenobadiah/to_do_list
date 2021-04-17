function returnNewIndex(array) {
    if (array.length == 0) {
        return 0;
    } else if (array.length == 1) {
        return 1;
    } else {
        let last = array[array.length - 1];
        let newIndex = last.id + 1;
        return newIndex;
    }
}

export { returnNewIndex }