let hour = document.getElementById("hour")
let sec = document.getElementById("sec")
let min = document.getElementById("min")

let count = 0
let mint = 0
let hours = 0


setInterval(() => {
    count++
    sec.innerHTML = `sec : ${count}`
    if(count> 4){
        count = 1
        mint++
        sec.innerHTML = `sec : ${count}`
        min.innerHTML = `min : ${mint}`
    }
    if (mint > 6) {
        mint=0
        hours++
         min.innerHTML = `min : ${mint}`
         hour.innerHTML = `hour : ${hours}`

    }
}, 1000);
