

export default function calculateLengthOfPension(pensionTimeframe) {

    let lengthOfPension = 0;

         if (pensionTimeframe === 50) {
            let lengthOfPension = 42;
        } else if (pensionTimeframe === 55) {
            let lengthOfPension = 37;
        } else if (pensionTimeframe === 60) {
            let lengthOfPension = 32;
        } else if (pensionTimeframe === 62) {
            let lengthOfPension = 30;
        } else if (pensionTimeframe === 65) {
            let lengthOfPension = 27;
        } else {
            let lengthOfPension = 0;
        }

        console.log(pensionTimeframe);
        console.log(lengthOfPension);

    return lengthOfPension;
}

module.exports = calculateLengthOfPension;