let btn=document.querySelector(".btn")
let List=document.querySelector(".list-container")
let Input=document.querySelector(".Input")




btn.addEventListener("click",()=>
{ 
    if(Input.value=="")
    {
        alert("Please write something")
    }
    else
    {
        //creating list items
     let list =document.createElement("li")
    list.innerText=Input.value;
    List.appendChild(list)
                //adding span in list
    let Span=document.createElement("span")
        Span.innerHTML="&#10008";
        list.append(Span);

 // Adding event to the list items
    list.addEventListener("click",()=>
            {
                list.classList.toggle("Checked")
            })   

            //adding event to span
            Span.addEventListener("click",()=>
            {
                Span.parentElement.remove()

            })
}
    Input.value=""   
})


 
 

