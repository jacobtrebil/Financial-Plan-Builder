import React from 'react';

export default function Summary({plan}) {

    return (
        <div>
            <p className="ssamount">Social Security Amount:</p>
            { plan.currentearnings }
        </div>
    )
};