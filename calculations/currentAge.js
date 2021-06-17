
export default function calculateCurrentAge(dateOfBirthYear) {
    const currentYear = new Date().getFullYear();
    const currentAge = currentYear - dateOfBirthYear;
    return currentAge;
}