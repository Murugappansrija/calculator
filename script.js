let container = document.createElement("div")
container.setAttribute("class","holecont")


let displayy = document.createElement("div")
displayy.setAttribute("class","displayy")
let input = document.createElement("input")
input.setAttribute("id","inputdisplay")


let oner = document.createElement("div")
oner.setAttribute("class","oner")

let bplus = document.createElement("button")
bplus.setAttribute("onclick","disnumber('+')")

bplus.innerText= "+"


let bmin = document.createElement("button")
bmin.setAttribute("onclick","disnumber('-')")
bmin.innerText= "-"

let bmult = document.createElement("button")
bmult.setAttribute("onclick","disnumber('*')")
bmult.innerText= "*"

let bdivi = document.createElement("button")
bdivi.setAttribute("onclick","disnumber('/')")
bdivi.innerText= "/"


let twor = document.createElement("div")
twor.setAttribute("class","twor")

let no1 = document.createElement("button")
no1.setAttribute("onclick","disnumber('1')")
no1.innerText= "1"


let no2 = document.createElement("button")
no2.setAttribute("onclick","disnumber('2')")
no2.innerText= "2"

let no3 = document.createElement("button")
no3.setAttribute("onclick","disnumber('3')")
no3.innerText= "3"

let no4 = document.createElement("button")
no4.setAttribute("onclick","disnumber('4')")
no4.innerText= "4"

let threer = document.createElement("div")
threer.setAttribute("class","threer")


let no5 = document.createElement("button")
no5.setAttribute("onclick","disnumber('5')")
no5.innerText= "5"


let no6 = document.createElement("button")
no6.setAttribute("onclick","disnumber('6')")
no6.innerText= "6"


let no7 = document.createElement("button")
no7.setAttribute("onclick","disnumber('7')")
no7.innerText= "7"

let no8 = document.createElement("button")
no8.setAttribute("onclick","disnumber('8')")
no8.innerText= "8"

let fourr = document.createElement("div")
fourr.setAttribute("class","fourr")


let no9 = document.createElement("button")
no9.setAttribute("onclick","disnumber('9')")
no9.innerText= "9"

let no0 = document.createElement("button")
no0.setAttribute("onclick","disnumber('0')")
no0.innerText= "0"

let mod = document.createElement("button")
mod.setAttribute("onclick","disnumber('%')")
mod.innerText= "%"



let dot = document.createElement("button")
dot.setAttribute("onclick","disnumber('.')")

dot.innerText= "."


let fiver = document.createElement("div")
fiver.setAttribute("class","fiver")

let cl = document.createElement("button")
cl.setAttribute("onclick","Clear()")
cl.innerText= "CL"

let eql = document.createElement("button")
eql.setAttribute("onclick","result()")

eql.innerText= "="




container.appendChild(displayy)
displayy.appendChild(input)
container.appendChild(oner)
oner.appendChild(bplus)
oner.appendChild(bmin)
oner.appendChild(bmult)
oner.appendChild(bdivi)

container.appendChild(twor)
twor.appendChild(no1)
twor.appendChild(no2)
twor.appendChild(no3)
twor.appendChild(no4)

container.appendChild(threer)
threer.appendChild(no5)
threer.appendChild(no6)
threer.appendChild(no7)
threer.appendChild(no8)

container.appendChild(fourr)
fourr.appendChild(no9)
fourr.appendChild(no0)
fourr.appendChild(mod)
fourr.appendChild(dot)

container.appendChild(fiver)

fiver.appendChild(cl)
fiver.appendChild(eql)

document.body.append(container)

let display= document.getElementById("inputdisplay")
let disnumber = (num)=>{
    display.value += num

}
let result = ()=>{

    try{
        display.value = eval(display.value)
    }
 catch(er){
    alert("enter valid operation")
 }
}

let Clear = ()=>{
    display.value= ""
}

