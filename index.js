const lists = document.querySelectorAll(".list-questions")
lists.forEach(list =>{
    list.addEventListener("click",() =>{
       list.classList.toggle("active") 
    })
})