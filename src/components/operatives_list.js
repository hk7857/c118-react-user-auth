import React from 'react';
import auth from '../hoc/auth';

const OpList = props => (
    <div>
        <h1 className="text-center">Secret Operators</h1>
        <ol>
            <li>Jim</li>
            <li>Kim</li>
            <li>Park</li>
            <li>Sarah</li>
            <li>Heather</li>
            <li>Sunny</li>
        </ol>
    </div>
);
export default auth(OpList);