

export default function calculatePartTimeWorkEarnings(numberCurrentEarnings) {
    const partTimeWorkEarnings = Math.floor(numberCurrentEarnings * 0.25);
    return partTimeWorkEarnings;
}