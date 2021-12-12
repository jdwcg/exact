import React, {useState} from 'react';
import './App.css';

function App() {

  let [글제목,글제목변경] = useState(['남자코트추천','강남우동맛집']);
  let [따봉, 따봉변경] = useState(0);
  
  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = "여자코트 추천";
    글제목변경(newArray);
  }

  let title = 'Title';
  return (
    <div className="App">
      <div className="">
        <h1>{title}</h1>
        <button onClick={ 제목바꾸기 }>버튼</button>
        <ul>
          <li>{글제목[0]} <span onClick={()=>{따봉변경(따봉 + 1)}}>따봉</span>{따봉}</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>

      <Modal />

    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}

export default App;
