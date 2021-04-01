import React from 'react';
import _Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export function Profile() {
    return (
        <div id="profile-section">
            <h1>My Profile</h1>
            <form id="profile-update-form">
                <label className="profile-form-label">Full name</label><br></br>
                <input className="profile-form-input"></input><br></br>
                <label className="profile-form-label">Email address</label><br></br>
                <input className="profile-form-input"></input><br></br>
                <label className="profile-form-label">Date of birth</label><br></br>
                <input className="profile-form-input"></input><br></br>
                <label className="profile-form-label">Street Address</label><br></br>
                <input className="profile-form-input"></input><br></br>
                <label className="profile-form-label">Unit #</label><br></br>
                <input className="profile-form-input"></input><br></br>
                <label className="profile-form-label">City/town</label><br></br>
                <input className="profile-form-input"></input><br></br>
                <label className="profile-form-label">State</label><br></br>
                <input className="profile-form-input"></input><br></br>
                <label className="profile-form-label">Postal Code</label><br></br>
                <input className="profile-form-input"></input><br></br>
                <label className="profile-form-label">Country</label><br></br>
                <input className="profile-form-input"></input><br></br>
                <button id="profile-save-button">Save</button>
            </form>
        </div>
    );
  }