export const calculateSum = (array, property) => {
    const total = array.reduce((accumulator, object) => {
        return accumulator + object[property];
    }, 0);

    return total;
}