import React from 'react';
import _Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export function PlanFormPopup() {
    return (
    <div id="full-width-box">
        <div id="plan-form-popup-section">
            <h1 id="plan-title">Create A Plan</h1>
            <form id="plan-form-page-1">
                <div class="plan-input-box">
                <label>Plan Type:   </label>
                <select>
                    <option>Retirement Plan</option>
                    <option>Financial Plan</option>
                </select><br></br>
                </div>
                <div class="plan-input-box">
                <label>Would You Like To Include A Spouse?</label>
                <select defaultValue="No">
                    <option>Yes</option>
                    <option>No</option>
                </select><br></br>
                </div>
                <button id="plan-button">Next Step &#187;</button>
            </form>
        </div>
    </div>
    );
  }