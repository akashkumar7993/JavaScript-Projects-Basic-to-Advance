var istatus = document.querySelector("h2")
var addfriend = document.querySelector("#add")
var check = 0;

addfriend.addEventListener("click", function(){
    if(check == 0){
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"
    addfriend.innerHTML = "Remove Friend"
    addfriend.style.backgroundColor = "grey"
    check = 1;
    }else{
    istatus.innerHTML = "Stranger"
    istatus.style.color = "red"
    addfriend.innerHTML = "Add Friend"
    addfriend.style.backgroundColor = "green"
    check = 0;
    }
    
})
