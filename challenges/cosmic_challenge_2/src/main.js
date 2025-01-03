import '../public/Main.css'
import {start} from './save.js'

// HTML 구조 정의
document.querySelector('#app').innerHTML = `
  <div>
    <div class="title">아이디어 메모장</div>
    <div class="radioContainer">
        <input type="radio" id="pink" name="color" value="pink"> Pink
        <br>
        <input type="radio" id="gray" name="color" value="gray"> Gray
    </div>

    <input id="memoInput" class="memoInput" placeholder="새로운 메모를 만들어보자">
    <button class="saveButton">저장</button>
    <div id="memoList">
    </div>
  </div>
`;

start();

