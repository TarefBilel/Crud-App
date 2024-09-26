function show(text){
    let div=document.createElement("div");
    div.className="show";
    let t=document.createTextNode(text);
    div.appendChild(t);
    
}

let info=document.querySelector(".student-list");
info.addEventListener("click",(e)=>{
    target=e.target
    if(target.classList.contains("d")){
        target.parentElement.parentElement.remove()
    }
})
let rec=document.querySelector("#info ");
rec.addEventListener("submit",(e)=>{
    e.preventDefault();
    let first=document.querySelector(".first").value;
    let last=document.querySelector(".last").value;
    let roll=document.querySelector(".roll").value;
     let tr=document.createElement("tr");
    tr.innerHTML=`
    
    <td>${first}</td>
    <td>${last}</td>
    <td>${roll}</td>
    <td><span class="e">Edit</span>
                 <span class="d">Delete</span></td>

    
    `
    
    info.appendChild(tr);
    
})