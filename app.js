const c1 = document.getElementById("c1")
const c2 = document.getElementById("c2")
const c3 = document.getElementById("c3")
const c4 = document.getElementById("c4")
const c5 = document.getElementById("c5")
const c6 = document.getElementById("c6")
const c7 = document.getElementById("c7")
const c8 = document.getElementById("c8")
const c9 = document.getElementById("c9")

const message = document.getElementById('message')

document.addEventListener('change', () => {

        if(c1.value === c2.value && c1.value === c3.value && (c1.value.toLowerCase() == "x" || c1.value.toLowerCase() == "o")) {
            message.innerHTML = `${c1.value} a gagné`
        }

        if(c4.value === c5.value && c4.value === c6.value && (c4.value.toLowerCase() == "x" || c4.value.toLowerCase() == "o")) {
            message.innerHTML = `${c4.value} a gagné`
        }

        if(c7.value === c8.value && c7.value === c9.value && (c7.value.toLowerCase() == "x" || c7.value.toLowerCase() == "o")) {
            message.innerHTML = `${c7.value} a gagné`
        }

        if(c1.value === c4.value && c1.value === c7.value && (c1.value.toLowerCase() == "x" || c1.value.toLowerCase() == "o")) {
            message.innerHTML = `${c1.value} a gagné`
        }

        if(c2.value === c5.value && c2.value === c8.value && (c2.value.toLowerCase() == "x" || c2.value.toLowerCase() == "o")) {
            message.innerHTML = `${c2.value} a gagné`
        }

        if(c3.value === c6.value && c3.value === c9.value && (c3.value.toLowerCase() == "x" || c3.value.toLowerCase() == "o")) {
            message.innerHTML = `${c3.value} a gagné`
        }

        if(c1.value === c5.value && c1.value === c9.value && (c1.value.toLowerCase() == "x" || c1.value.toLowerCase() == "o")) {
            message.innerHTML = `${c1.value} a gagné`
        }

        if(c3.value === c5.value && c3.value === c7.value && (c3.value.toLowerCase() == "x" || c3.value.toLowerCase() == "o")) {
            message.innerHTML = `${c3.value} a gagné`
        }
})