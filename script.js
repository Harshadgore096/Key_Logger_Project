const logDiv=document.getElementById('log');
const stateDiv=document.getElementById('state');
const startbtn=document.getElementById('start-btn');
const stopbtn=document.getElementById('stop-btn');

startbtn.addEventListener("click",()=>{
    document.addEventListener("keydown",handleDown);
    document.addEventListener("keyup",handleUp);
    startbtn.disabled=true;
    stopbtn.disabled=false;


});

stopbtn.addEventListener("click",()=>{
    document.removeEventListener("keydown",handleDown);
    document.removeEventListener("keyup",handleUp);
    logDiv.textContent=" ";
    stateDiv.textContent=" ";
    startbtn.disabled=false;
    stopbtn.disabled=true;

});

function handleDown(e)
{
    logDiv.textContent=`key ${e.key} pressed down`;
    stateDiv.textContent="Key is Down";

}

function handleUp(e)
{
    logDiv.textContent=`key ${e.key} pressed up`;
    stateDiv.textContent="Key is up";

}
