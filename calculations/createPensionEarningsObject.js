

export default function createPensionEarningsObject(retirementAge, pensionStartAge, numberPensionEarnings, ageOfDeath) {
    let data = {}
    let data2 = {}
    for (let i = pensionStartAge; i <= ageOfDeath; i++) {
        data[i] = Math.floor(numberPensionEarnings);
    };
    for (let i = retirementAge; i <= ageOfDeath; i++) {
        if (data[i]) {
            data2[i] = Math.floor(data[i]);
        } else {
            data2[i] = 0;
        }
    }
    return data2;
}