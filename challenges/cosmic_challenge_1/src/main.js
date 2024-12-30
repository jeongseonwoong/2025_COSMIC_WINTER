import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import {request} from "./request.js";

document.querySelector('#app').innerHTML = `
  <div>
        <h1>생일 출력하기</h1>
        <h2>1.양해미 2.송영은 3.강지웅 4.오현지 5.윤정섭</h2>
        <span>번호를 입력하시오: </span><input name="input" id="userInput"> 
        <button id="submitBtn">출력</button>
  </div>
`
const submitButton = document.querySelector('#submitBtn');
submitButton.addEventListener('click', request);
