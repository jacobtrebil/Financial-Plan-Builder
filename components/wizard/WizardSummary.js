import React from 'react';

export default function Summary({plan}) {

    return (
        <div>
            { JSON.stringify(plan) }
        </div>
    )
};