import { PureComponent } from "react";


export default function setAgeOfDeath(gender) {
    let ageOfDeath = 93;
    if (gender === 'Male') {
        ageOfDeath = 90;
    } else if (gender === 'Female') {
        ageOfDeath = 93;
    } else {
        ageOfDeath = 93;
    }
    return ageOfDeath;
}