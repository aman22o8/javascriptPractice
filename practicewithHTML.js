let buttonEl=document.getElementById("blibke_button1")

let unlistedEl=document.getElementById("unlisted_Item1")

buttonEl.addEventListener("click",(event)=>{
console.log((event.timeStamp)/1000)
})






navigator.geolocation.getCurrentPosition((position)=>{console.log(`The lat: ${position.coords.latitude} the lon : ${position.coords.longitude}`)},(error)=>{console.log(error)})