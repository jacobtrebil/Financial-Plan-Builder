import React from 'react';
import _Head from 'next/head';

export function socialSecurityOptions() {

      return (
        <div>
            <table></table>
            <tr>
                        <th>Social Security</th>
                        <p className="sstabledescription">Your Financial Health Score is based on taking Social Security at age 67. We recommend taking your Social Security later, and working part-time until age 70. </p>
                    </tr>
                    <div className="table-border">
                        <tr>
                            <td className="table-headers">Starting Age</td>
                            <td className="table-headers">Annual Earnings</td>
                        </tr>
                    <tr>
                        <td>Age 62</td>
                        <td>{ convertToUsd.format(calculations.socialSecurityAge62Earnings) }</td>
                    </tr>
                    <tr>
                        <td>Age 67</td>
                        <td>{ convertToUsd.format(calculations.socialSecurityEarnings) }</td>
                    </tr>
                    <tr>
                        <td>Age 70</td>
                        <td>{ convertToUsd.format(calculations.socialSecurityAge70Earnings) }</td>
                    </tr>
                    </div>
                    <p className="ssquestion">When will you take Social Security?</p>
                    <select
                    className="form-select"
                    name="socialSecurityDecision"
                    value={socialSecurityDecision}
                    onChange={e=> { setSocialSecurityDecision(e.target.value)}}>
                        <option>Age 62</option>
                        <option>Age 67</option>
                        <option>Age 70</option>
                    </select>
        </div>
      );
    }

    /* <tr>
                        <th>Social Security</th>
                        <p className="sstabledescription">Your Financial Health Score is based on taking Social Security at age 67. We recommend taking your Social Security later, and working part-time until age 70. </p>
                    </tr>
                    <div className="table-border">
                        <tr>
                            <td className="table-headers">Starting Age</td>
                            <td className="table-headers">Annual Earnings</td>
                        </tr>
                    <tr>
                        <td>Age 62</td>
                        <td>{ convertToUsd.format(calculations.socialSecurityAge62Earnings) }</td>
                    </tr>
                    <tr>
                        <td>Age 67</td>
                        <td>{ convertToUsd.format(calculations.socialSecurityEarnings) }</td>
                    </tr>
                    <tr>
                        <td>Age 70</td>
                        <td>{ convertToUsd.format(calculations.socialSecurityAge70Earnings) }</td>
                    </tr>
                    </div>
                    <p className="ssquestion">When will you take Social Security?</p>
                    <select
                    className="form-select"
                    name="socialSecurityDecision"
                    value={socialSecurityDecision}
                    onChange={e=> { setSocialSecurityDecision(e.target.value)}}>
                        <option>Age 62</option>
                        <option>Age 67</option>
                        <option>Age 70</option>
                    </select> */

    module.exports = socialSecurityOptions;