const min = document.getElementById("min")
const max = document.getElementById("max")
const result = document.getElementById("result")
const submit = document.getElementById("submit")



submit.onclick = function () {
    const minVal = Number(min.value)
    const maxVal = Number(max.value)
    
    if(minVal > maxVal){
        result.innerText = `Min should be smaller than Max`
    }
    else {
        let answer = Math.floor(Math.random() * (maxVal - minVal)) + minVal
         result.innerText = answer
    }
}