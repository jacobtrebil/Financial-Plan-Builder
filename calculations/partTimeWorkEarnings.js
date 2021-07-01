

export default function calculatePartTimeWorkEarnings(currentEarnings) {
    const partTimeWorkEarnings = Math.floor(currentEarnings * 0.25);
    return partTimeWorkEarnings;
}