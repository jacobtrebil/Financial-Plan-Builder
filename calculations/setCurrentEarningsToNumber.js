
export default function setCurrentEarningsToNumber(currentEarnings) {
    const numberCurrentEarnings = Number(currentEarnings.replace(/[^0-9.-]+/g,""));
    return numberCurrentEarnings;
}