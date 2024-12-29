const btnPrint = document.querySelector("button");
const resultList = document.querySelector("#resultPrints")

btnPrint.addEventListener('click', () => {
    resultList.innerHTML = ""
    
    for(let i = 0; i < 10; i++) {
    
       let newLi = document.createElement('li');
       newLi.innerText =  (`${i +1}. I am awesome!`);
       resultList.appendChild(newLi)
    
    }

});
