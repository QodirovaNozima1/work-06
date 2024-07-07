const sidebar = document.querySelector(".sidebar")
const btn = document.querySelector(".button")
const header = document.querySelector(".header")
const btnTop = document.querySelector("top")


btn.addEventListener("click", function () {
    console.log("click event");
    sidebarOpen()
} )
btn.addEventListener("dblclick", () =>{
    console.log("double click");
    sidebarOpen()
})
btn.addEventListener("mouseenter",()=>{
    console.log("mouse enter");
    sidebarOpen()
})
btn.addEventListener("mouseleave",()=>{
    console.log("mouse leave");
    sidebarOpen()
})


window.addEventListener("scroll",()=>{
    let scrollValue = window.scrollY

    if (scrollValue > 100) {
        header.classList.add("shrink")
    }else if (window.scrollY <= 0) {
        header.classList.remove("shrink")
        btnTop.style.bottom = "-70px"
    }


    if (scrollValue > 50) {
        btnTop.style.bottom = "50px"
    }
        
}
)







function sidebarOpen() {
    sidebar.classList.toggle("show")
}