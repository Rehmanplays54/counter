
let countel= document.getElementById("count-el")
let saveel= document.getElementById("save-el")
let resetel= document.getElementById("reset-el")
let count=0
function increment()
{
    count=count+1
    countel.textContent=count
    console.log("the button was clicked")
}
let countstr=0
function save()
{
    countstr=count+ "_"
    saveel.textContent += countstr
    countel.textContent=0
}
