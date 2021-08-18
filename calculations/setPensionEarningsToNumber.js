
export default function setPensionEarningsToNumber(pensionEarnings) {
    const numberPensionEarnings = Number(pensionEarnings.replace(/[^0-9.-]+/g,""));
    return numberPensionEarnings;
}