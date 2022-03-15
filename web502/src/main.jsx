import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import ShowInfo from './component/showInfo';

const name = "toan";

const myArr = [
  {id: 1, name: "toan"},
  {id: 2, name: "the anh"}
];

// function show

ReactDOM.render(<div>
    <h3>{myArr.map((item, index) => <h3>{item.name}</h3>)}</h3>
    <ShowInfo name="toan" />
    <App />
  </div>
  ,
  document.getElementById('root')
)
