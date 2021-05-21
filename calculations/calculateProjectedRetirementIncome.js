
export default function calculateProjectedRetirementIncome(savingsByRetirement, lengthOfRetirement) {
    const projectedRetirementIncome = Math.floor(savingsByRetirement/lengthOfRetirement);
    return projectedRetirementIncome;
}