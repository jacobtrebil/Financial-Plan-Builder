import React from 'react';
import _Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export function PlanCustomizer() {
      return (
        <div className="summaryOptionsSection">
        <h2 className="recommendationsH2">Build Your Financial Action Plan 👇🏻</h2>
        <div className="summaryOption">
            <p className="ssAmount">When to Take Social Security:</p>
            { plan.currentearnings }
        </div>
        <div className="summaryOption">
            <p className="ssAmount">How Much to Save Per Month:</p>
            { plan.currentsavings }
        </div>
        <div className="summaryOption">
            <p className="ssAmount">Reducing Retirement Costs:</p>
            { plan.volatility }
        </div>
    </div>
      );
    }