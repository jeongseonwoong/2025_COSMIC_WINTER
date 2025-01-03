export const start = ()=>{
  document.querySelector('.saveButton').addEventListener('click', () => {
    const memoInput = document.querySelector('#memoInput'); // 메모 입력창
    const memoList = document.querySelector('#memoList');   // 메모를 저장할 div

    if (memoInput.value.trim() === '') {
      alert('메모를 입력해주세요!');
      return;
    }

    const wholeMemo = document.createElement('div');
    wholeMemo.style.borderRadius = '5px';
    wholeMemo.style.border = 'gray 1px solid'


    const title = document.createElement('div');
    title.textContent = new Date();
    const selectedColor = document.querySelector('input[name="color"]:checked');
    title.style.backgroundColor = selectedColor.value
    title.style.font = '20px';
    title.style.padding = '10px';
    wholeMemo.appendChild(title);


    const memo = document.createElement('div');
    memo.textContent = memoInput.value;
    memo.style.font = '20px';
    memo.style.padding ='10px';
    wholeMemo.appendChild(memo);


    const deleteButton = document.createElement('button');
    deleteButton.textContent = '삭제';
    deleteButton.addEventListener('click',()=>{
      memoList.removeChild(wholeMemo); // 부모 노드에서 해당 메모 제거
    })
    deleteButton.style.border = 'gray 1px solid'
    deleteButton.style.padding = '10px';
    deleteButton.style.margin = '10px 10px'
    deleteButton.style.borderRadius = '5px';
    deleteButton.style.backgroundColor = '#558bcf';

    wholeMemo.appendChild(deleteButton);


    memoList.appendChild(wholeMemo);

    memoInput.value = '';
  });
}


