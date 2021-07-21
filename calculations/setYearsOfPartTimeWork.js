

export default function setYearsOfPartTimeWork(partTimeWorkDecision) {
    let yearsOfPartTimeWork = 0;
    if (partTimeWorkDecision === 'First 5 Years') {
        yearsOfPartTimeWork = 5;
    } else if (partTimeWorkDecision === 'First 10 Years') {
        yearsOfPartTimeWork = 10;
    } else if (partTimeWorkDecision === 'First 20 Years') {
        yearsOfPartTimeWork = 20;
    } else if (partTimeWorkDecision === 'None') {
        yearsOfPartTimeWork = 0;
    } else {
        yearsOfPartTimeWork = 0;
    }
    return yearsOfPartTimeWork;
}