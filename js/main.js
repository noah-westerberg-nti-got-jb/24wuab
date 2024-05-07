let header_active = true

function hide_header(){
    let body = document.querySelector("body")
    let header = document.querySelector("header")
    body.classList.toggle("hide-header")
    header.classList.toggle("hide-header")

    if (header_active == true){
        document.querySelector(".material-symbols-outlined").textContent = "expand_more"
    }
    else {
        document.querySelector(".material-symbols-outlined").textContent = "expand_less"
    }

    header_active = !header_active
}

document.querySelector(".header-button").addEventListener("click", hide_header)