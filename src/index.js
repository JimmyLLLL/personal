import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
let htmlDom = document.getElementsByTagName('html')[0];
if (htmlWidth > 750) {
	htmlWidth = 750;
}
htmlDom.style.fontSize = htmlWidth / 7.5 + 'px';
console.log(htmlWidth)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
