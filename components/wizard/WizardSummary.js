import React, { useState, useEffect } from 'react';
import { wizardcalcalculations } from '../../pages/api/wizardcalculations';

export default function Summary({plan}) {

    const [calculations, setCalculations] = useState();

    useEffect(() => {
        wizardcalcalculations()
    }, []);

    if (!calculations) return (
        <div>
            <p>Loading...</p>
        </div>
    );

    else return ( 
        <div>
            <p className="ssamount">Social Security Amount at 67:</p>
            { plan.currentearnings }
            <p className="ssamount">Social Security Amount at 62:</p>
            { plan.currentsavings }
            <p className="ssamount">Social Security Amount at 70:</p>
            { plan.currentmonthlyearnings }
        </div>
    )
};