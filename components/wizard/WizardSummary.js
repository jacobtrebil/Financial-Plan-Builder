import React, { useState, useEffect } from 'react';
import { planCalculations } from '../../apiclient/wizardfetch';

export default function Summary({plan}) {

    const getWizardCalculations = async () => {
        const wizardCalculationsFunction = await planCalculations(plan._id);
        setCalculations(wizardCalculationsFunction);
    }

    const [calculations, setCalculations] = useState();

    useEffect(() => {
        getWizardCalculations();
    }, []);

    if (!calculations) return (
        <div>
            <p>Loading...</p>
        </div>
    );

    return ( 
        <div>
            <p className="ssamount">Social Security Amount at 67:</p>
            { plan.currentearnings }
            <p className="ssamount">Social Security Amount at 62:</p>
            { plan.currentsavings }
            <p className="ssamount">Social Security Amount at 70:</p>
            { plan.totalfuturespending }
        </div>
    )
};