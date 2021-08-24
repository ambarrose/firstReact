import React from 'react';
import ReactDOM from 'react-dom';

//class constructor
  // class Car {
  //   constructor(name) {
  //     this.brand = name;
  //   }
  //
  //   present() {
  //     return 'I have a ' + this.brand;
  //   }
  // }
  //
  // class Model extends Car {
  //   constructor(name,mod) {
  //     super(name);
  //     this.model = mod;
  //   }
  //   show() {
  //     return this.present() + ', it is a ' + this.model
  //   }
  // }
  //
  // mycar = new Model("Ford", "Mustang");
  // document.write(mycar.show());

  // <!-- Arrow Function -->

  // hello = () => {
  // return "Hello World!";
  // }
  //smaller arrow function
  // hello = () => "Hello World!";
  // document.getElementById("demo").innerHTML = hello("");

  //smaller arrow function with params
  // hello = (val) => "Hello " + val;
  // document.getElementById("demo").innerHTML = hello("World");

  //smaller arrow function with out parenthese with params
  // hello = val => "Hello " + val;
  // document.getElementById("action").innerHTML = hello("World");

  // using this statements in regular Function

//   class Header {
//   constructor() {
//     this.color = "Red";
//   }
//
//   changeColor = function() {
//     document.getElementById("action").innerHTML += this;
//   }
// }
//
//     myheader = new Header();
//
// //The window object calls the function:
// window.addEventListener("load", myheader.changeColor);
//
// //A button object calls the function:
// document.getElementById("btn").addEventListener("click", myheader.changeColor);

//To write block of HTML, put the HTML inside parentheses
// const myelement = (
//   <table>
//     <tr>
//       <th>Name</th>
//     </tr>
//     <tr>
//       <td>John</td>
//     </tr>
//     <tr>
//       <td>Elsa</td>
//     </tr>
//   </table>
// );

// const myfirstelement = <h1>Hello React!</h1>

// to render the text in <p> tag
// ReactDOM.render(<p>Hello</p>, document.getElementById('root'));

// to render html data
// ReactDOM.render(myelement, document.getElementById('root'));

// display result using Root Node
// ReactDOM.render(<p>Hallo</p>, document.getElementById('sandy'));

//JSX code to add html element to dom
// const myelement = <h1>I Love JSX!</h1>;

// adding html element to dom without JSK
// const myelement = React.createElement('h1', {}, 'I do not use JSX!');

// Using JSX Expressions
// const myelement = <h1>React is {5 + 5} times better with JSX</h1>;

//Wrap two headers inside one top level DIV element
// const myelement = (
//   <div>
//     <h1>I am a Header.</h1>
//     <h1>I am a Header too.</h1>
//   </div>
// );

// adds text box remember to close html tags
// const myelement = <input type="text" />;

// Use attribute className instead of class in JSX:
// const myelement = <h1 className="myclass">Hello World</h1>;

// Conditions if statements outside of the JSX code

// Write "Hello" if x is less than 10, otherwise "Goodbye"
// const x = 5;
// let text = "Goodbye";
// if (x < 10) {
//   text = "Hello";
// }
// const myelement = <h1>{text}</h1>;

// Write "Hello" if x is less than 10, otherwise "Goodbye"
const x = 2;
const myelement = <h1>{(x) < 3 ? "Kia Ora" : "Tenakoe"}</h1>;

ReactDOM.render(myelement, document.getElementById('root'));


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
