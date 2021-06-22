// Calculate the years until retirement based on their birthday & current year to find their age, 
// and their desired retirement age to find their years until retirement.

export default function calculateYearsUntilRetirement(currentAge, retirementAge) {
    const yearsUntilRetirement = retirementAge - currentAge;
    return yearsUntilRetirement;
}