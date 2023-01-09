function save(){

console.log("script is running")

const text=document.getElementById("text").value
const date=document.getElementById("date").value
const color=document.getElementById("color").value

if(document.getElementById("file").files[0].name){

const selectedFile=`file:///D:/web/${document.getElementById("file").files[0].name}`
document.getElementById("img").setAttribute('src', selectedFile)
}


document.getElementById("messageText").innerHTML=`${date}: ${text}`

document.getElementById("messageText").style.color=color



}