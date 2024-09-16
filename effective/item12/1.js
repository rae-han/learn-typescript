// import React, { MouseEvent, MouseEventHandler } from 'react';
// import fetch from 'node-fetch';
const pow = (base, exponent) => base ** exponent;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x / y;
const div = (x, y) => x % y;
function power(base, exp) {
    return base ** exp;
}
let funcType;
const fetchData = async () => {
    // const response = await fetch(`http://127.0.0.1:3000/colors`);
    const response = await fetch(`http://127.0.0.1:3000/post`);
    // if (!response.ok) {
    //   throw new Error('Request failed: ' + response.status);
    // }
    return response;
};
const exec = async () => {
    try {
        const response = await fetchData();
        const result = await response.json();
        console.log(result);
    }
    catch (err) {
        console.error(err);
    }
};
exec();
export {};
