// import React, { MouseEvent, MouseEventHandler } from 'react';
import fetch from 'node-fetch';

// function funcStatement() {}
// const funcExpression = function() {}
// const funcArrow = () => {}

type TCalc = (x: number, y: number) => number;
const pow: TCalc = (base, exponent) => base**exponent;

const add: TCalc = (x, y) => x + y;
const sub: TCalc = (x, y) => x - y;
const mul: TCalc = (x, y) => x / y;
const div: TCalc = (x, y) => x % y;

function power(base: number, exp: number): number {
  return base**exp
}

let funcType: (arg1: number, arg2: number) => number;

const fetchData = async () => {
  // const response = await fetch(`http://127.0.0.1:3000/colors`);
  const response = await fetch(`http://127.0.0.1:3000/post`);

  // if (!response.ok) {
  //   throw new Error('Request failed: ' + response.status);
  // }

  return response
}

const exec = async () => {
  try {
    const response = await fetchData();

    const result = await response.json();
    console.log(result)
  } catch (err) {
    console.error(err)
  }

}

exec();

// declare function fetch(
//   input: RequestInfo, init?: RequestInit
// ): Promise<Response>;
//
// async function checkFetch1(input: RequestInfo, init?: RequestInit) {
//   const response = await fetch(input, init);
//
//   if (!response.ok) {
//     throw new Error('Request failed: ' + response.status);
//   }
//
//   return response;
// }

// const checkFetch2: typeof fetch = async (input, init) => {
//   const response = await fetch(input, init);
//
//   if (!response.ok) {
//     throw new Error('Request failed: ' + response.status);
//   }
//
//   return response;
// }



export {}