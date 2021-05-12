import React from 'react';
import _Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export function PlanCustomizer() {
      return (
        <div className="summaryoptionssection">
        <h2 className="recommendations-h2">Build Your Financial Action Plan 👇🏻</h2>
        <div className="summaryoption">
            <p className="ssamount">When to Take Social Security:</p>
            { plan.currentearnings }
        </div>
        <div className="summaryoption">
            <p className="ssamount">How Much to Save Per Month:</p>
            { plan.currentsavings }
        </div>
        <div className="summaryoption">
            <p className="ssamount">Reducing Retirement Costs:</p>
            { plan.volatility }
        </div>
    </div>
      );
    }