export const calculateSum = (array, property) => {
    const total = array.reduce((accumulator, object) => {
        return accumulator + (object[property] * object["qty"]);
    }, 0);

    return total;
}