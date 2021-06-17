import React from 'react';
import _dynamic from 'next/dynamic';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function finalPlan({plan}) {

    /* const data = [
        {
            Age: 60,
            Earnings: calculations.age60Income,
        },
        {
            Age: 61,
            Earnings: calculations.age61Income,
        },
        {
            Age: 62,
            Earnings: calculations.age62Income,
        },
        {
            Age: 63,
            Earnings: calculations.age63Income,
        },
        {
            Age: 64,
            Earnings: calculations.age64Income,
        },
        {
            Age: 65,
            Earnings: calculations.age65Income,
        },
        {
            Age: 66,
            Earnings: calculations.age66Income,
        },
        {
            Age: 67,
            Earnings: calculations.age67Income,
        },
        {
            Age: 68,
            Earnings: calculations.age68Income,
        },
        {
            Age: 69,
            Earnings: calculations.age69Income,
        },
        {
            Age: 70,
            Earnings: calculations.age70Income,
        },
        {
            Age: 71,
            Earnings: calculations.age71Income,
        },
        {
            Age: 72,
            Earnings: calculations.age72Income,
        },
        {
            Age: 73,
            Earnings: calculations.age73Income,
        },
        {
            Age: 74,
            Earnings: calculations.age74Income,
        },
        {
            Age: 75,
            Earnings: calculations.age75Income,
        },
        {
            Age: 76,
            Earnings: calculations.age76Income,
        },
        {
            Age: 77,
            Earnings: calculations.age77Income,
        },
        {
            Age: 78,
            Earnings: calculations.age78Income,
        },
        {
            Age: 79,
            Earnings: calculations.age79Income,
        },
        {
            Age: 80,
            Earnings: calculations.age80Income,
        },
        {
            Age: 81,
            Earnings: calculations.age81Income,
        },
        {
            Age: 82,
            Earnings: calculations.age82Income,
        },
        {
            Age: 83,
            Earnings: calculations.age83Income,
        },
        {
            Age: 84,
            Earnings: calculations.age84Income,
        },
        {
            Age: 85,
            Earnings: calculations.age85Income,
        },
        {
            Age: 86,
            Earnings: calculations.age86Income,
        },
        {
            Age: 87,
            Earnings: calculations.age87Income,
        },
        {
            Age: 88,
            Earnings: calculations.age88Income,
        },
        {
            Age: 89,
            Earnings: calculations.age89Income,
        },
        {
            Age: 90,
            Earnings: calculations.age90Income,
        },
        {
            Age: 91,
            Earnings: calculations.age91Income,
        },
        {
            Age: 92,
            Earnings: calculations.age92Income,
        },
        {
            Age: 93,
            Earnings: calculations.age93Income,
        },
        {
            Age: 94,
            Earnings: calculations.age94Income,
        },
        {
            Age: 95,
            Earnings: calculations.age95Income,
        },
      ]; */
    
    return (
        <div className="plan-section">
            <h1>Jacob's Financial Plan</h1>
            <div>
                <BarChart className="barchart" width={550} height={250} /* data={data} */ margin={{ top: 5, right: 30, left: 20, bottom: 5,}}>
                    <XAxis /* name="Age" dataKey="Age" */ stroke="grey" fontSize="12px"/>
                    <YAxis /* name="Age" */ stroke="grey" fontSize="12px" dataKey="Earnings"/>
                    <Tooltip fontSize="12px"/>
                    <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                    <Bar /* dataKey="Earnings" */ fontSize="12px" fill="rgb(4, 187, 172)" stroke="rgb(4, 187, 172)" barSize={5}/>
                </BarChart>
            </div>
            <div>
                <h1>Document Upload</h1>
                <p>Upload your life insurance, tax plan, or will below to keep them all in one place</p>
            </div>
        </div>
    )
}
