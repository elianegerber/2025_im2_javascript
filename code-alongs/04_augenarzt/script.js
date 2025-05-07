console.log('hi script.js')
const auge = document.querySelector("eye")

auge.addEventListener("click",function (event){ 
    auge.classList.toggle("bloddy")
});

setInterval(function () {
    auge.classLisst.toggle("closed");
}, 2000);