let boxes=document.querySelectorAll('.box');
let resetbtn=document.querySelector('#reset-btn');
let newbtn=document.querySelector('#new-btn');
let msg=document.querySelector('#msg');
let msgcontainer=document.querySelector('.msg-container');
let turn0=true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
boxes.forEach(box => {
    box.addEventListener('click',()=>{
        console.log('box was clicked');
        if(turn0===true){
            box.innerText='0';
            turn0=false;
        }
        else{
            box.innerText='X';
            turn0=true;
        }
        box.disabled=true;
        check();
        
    })
    
});
const showwinner=(winner)=>{
    msg.innerText=`Congratulations winner is ${winner}`;
    msgcontainer.classList.remove('hide');
    disablebts();
    
}

const check= ()=>{
    for(let patterns of winpatterns){
        // console.log(patterns[0],patterns[1],patterns[2]);
        // console.log(boxes[patterns[0]],boxes[patterns[1]],boxes[patterns[2]]);
        let pos1=boxes[patterns[0]].innerText;
        let pos2=boxes[patterns[1]].innerText;
        let pos3=boxes[patterns[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log('Winner',pos1);
                showwinner(pos1);
            }
        }
       
    }

}

const disablebts=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enablebts=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText='';
    }
}



const resetgame=()=>{
    turn0=true;     
    enablebts();
    msgcontainer.classList.add('hide');

}
newbtn.addEventListener('click',resetgame);
resetbtn.addEventListener('click',resetgame);
