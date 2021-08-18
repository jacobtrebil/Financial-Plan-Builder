
export default function setCurrentSavingsToNumber(currentSavings) {
    const numberCurrentSavings = Number(currentSavings.replace(/[^0-9.-]+/g,""));
    return numberCurrentSavings;
}