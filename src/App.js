import './App.css';
import { useState } from 'react';



function App() {
  let [titles, setTitles] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [likes, setLikes] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  let [modalTitle, setModalTitle] = useState(0);

  const likeBtn = (index) => {
    let copy = [...likes];
    copy[index] = likes[index] + 1;
    setLikes(copy);
  }

  const controlModal = () => {
    setModal(!modal);
  }
  
  const changeTitle = () => {
    let copy = [...titles];
    copy[0] = '여자 코트 추천';
    setTitles(copy);
  }

  const sortTitle = () => {
    let copy = [...titles];
    copy.sort();
    setTitles(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>  
      </div>

      <button onClick={() => {
        sortTitle();
      }}>정렬</button>

      {titles.map((title, i) => (
        <div className="list" key={i}>
          <h4 onClick={()=>{controlModal(); setModalTitle(i)}}>{title}</h4>
          <span onClick={() => likeBtn(i)}>👍</span> {likes[i]}
          <p>2월 17일 발행</p>
        </div>
      ))}


  {modal === true ? <Modal modalTitle={modalTitle} changeTitle={changeTitle} titles={titles} /> : null}

      
    </div>
  );
       
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.titles[props.modalTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{props.changeTitle()}}>글수정</button>
    </div>
  )
}

export default App;
