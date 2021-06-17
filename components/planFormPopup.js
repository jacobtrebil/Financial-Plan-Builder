import React from 'react';
import _Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export function PlanFormPopup() {
    return (
    <div id="fullWidthBox">
        <div id="planFormPopupSection">
            <h1 id="planTitle">Create A Plan</h1>
            <form id="planFormPage1">
                <div class="planInputBox">
                <label>Plan Type:   </label>
                <select>
                    <option>Retirement Plan</option>
                    <option>Financial Plan</option>
                </select><br></br>
                </div>
                <div class="planInputBox">
                <label>Would You Like To Include A Spouse?</label>
                <select defaultValue="No">
                    <option>Yes</option>
                    <option>No</option>
                </select><br></br>
                </div>
                <button id="planButton">Next Step &#187;</button>
            </form>
        </div>
    </div>
    );
  }