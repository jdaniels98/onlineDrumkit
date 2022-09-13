const nmp1 = document.getElementById("nmp1")
const nmp2 = document.getElementById("nmp2")
const nmp3 = document.getElementById("nmp3")
const nmp4 = document.getElementById("nmp4")
const nmp5 = document.getElementById("nmp5")
const nmp6 = document.getElementById("nmp6")
const nmp7 = document.getElementById("nmp7")
const nmp8 = document.getElementById("nmp8")
const nmp9 = document.getElementById("nmp9")

window.addEventListener("keydown", (e) =>  {
    if(e.keyCode == 35 || e.keyCode == 49) {
        const boom = document.getElementById("boom")
        boom.play()
    }
    else if(e.keyCode == 40 || e.keyCode == 50) {
        const boom = document.getElementById("clap")
        boom.play()
    }
    else if(e.keyCode == 34 || e.keyCode == 51) {
        const boom = document.getElementById("hihat")
        boom.play()
    }
    else if(e.keyCode == 37 || e.keyCode == 52) {
        const boom = document.getElementById("kick")
        boom.play()
    }
    else if(e.keyCode == 12 || e.keyCode == 53) {
        const boom = document.getElementById("openhat")
        boom.play()
    }
    else if(e.keyCode == 39 || e.keyCode == 54) {
        const boom = document.getElementById("ride")
        boom.play()
    }
    else if(e.keyCode == 36 || e.keyCode == 55) {
        const boom = document.getElementById("snare")
        boom.play()
    }
    else if(e.keyCode == 38 || e.keyCode == 56) {
        const boom = document.getElementById("tink")
        boom.play()
    }
    else if(e.keyCode == 33 || e.keyCode == 57) {
        const boom = document.getElementById("tom")
        boom.play()
    }
})

nmp1.addEventListener("click", () => {
    const boom = document.getElementById("boom")
    boom.play()
})
nmp2.addEventListener("click", () => {
    const boom = document.getElementById("clap")
    boom.play()
})
nmp3.addEventListener("click", () => {
    const boom = document.getElementById("hihat")
    boom.play()
})
nmp4.addEventListener("click", () => {
    const boom = document.getElementById("kick")
    boom.play()
})
nmp5.addEventListener("click", () => {
    const boom = document.getElementById("openhat")
    boom.play()
})
nmp6.addEventListener("click", () => {
    const boom = document.getElementById("ride")
    boom.play()
})
nmp7.addEventListener("click", () => {
    const boom = document.getElementById("snare")
    boom.play()
})
nmp8.addEventListener("click", () => {
    const boom = document.getElementById("tink")
    boom.play()
})
nmp9.addEventListener("click", () => {
    const boom = document.getElementById("tom")
    boom.play()
})