export function request() {
  const inputValue = document.querySelector('#userInput').value;

  const requestAPI = (id)=>{
    fetch(` https://my-json-server.typicode.com/yanghaemi/json_placeholder/${id}`)
        .then((response)=>{
          if(!response.ok){
            throw new Error("존재하지 않음")
          }
            return response.json();
        })
        .then((data)=>{
          alert(`조회된 ${data.name}의 생일:${data.month}월 ${data.day}일`)
        })
        .catch((error)=>{
          alert(error.message)
        })
  }

  const nameToId = ()=>{
    var id
    switch (inputValue){
      case '양해미': id =1
          requestAPI(id)
            break
      case '송영은': id = 2
            requestAPI(id)
            break
      case '강지웅': id=3
            requestAPI(id)
            break
      case  '오현지': id=4
            requestAPI(id)
            break
      case '윤정섭': id=5
            requestAPI(id)
            break
      default:
          alert('해당 이름에 대한 데이터가 존재하지 않음');
          return;
    }

  }

  if(!isNaN(inputValue)){
    const id = inputValue
    requestAPI(id);
  }else{
    nameToId();
  }

}
