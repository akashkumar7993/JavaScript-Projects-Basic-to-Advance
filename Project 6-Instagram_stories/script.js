var arr= [
    {dp:"images/aksgh_sacchin.jpg", 
    story:"images/aksgh_sacchin.jpg"
    }, 
    {dp:"images/80ghaat.jpg", 
    story:"images/80ghaat.jpg"
    },
    {dp:"images/bk.jpg", 
    story:"images/bk.jpg"
    },
    {dp:"images/namoghaat.jpg", 
    story:"images/namoghaat.jpg"
    },
    {dp:"images/Tiss.jpeg", 
    story:"images/Tiss.jpeg"
    },
]

var storiya = document.querySelector("#storiyan")
var clutter = "";
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
        <img id="${idx}" src="${elem.dp}" alt="">
    </div>`
})

storiya.innerHTML = clutter;
storiya.addEventListener("click", function(dets){
    document.querySelector("#full-screen").style.display ="block"
    document.querySelector("#full-screen").style.backgroundImage =  
    `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display ="none"
    },3000)
});