import React from 'react';

export default function Summary({plan}) {

    return (
        <div>
            <p className="ssamount">Social Security Amount at 67:</p>
            { plan.currentearnings }
            <p className="ssamount">Social Security Amount at 62:</p>
            { plan.currentsavings }
            <p className="ssamount">Social Security Amount at 70:</p>
            { plan.kids }
        </div>
    )
};