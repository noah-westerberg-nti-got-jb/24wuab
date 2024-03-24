let header_down = true

function hide_header(){
    let body = document.querySelector("body")
    let header = document.querySelector("header")
    body.classList.toggle("hide-header")
    header.classList.toggle("hide-header");

    if (header_down == true){
        document.querySelector(".material-symbols-outlined").textContent = "expand_more"
    }
    else {
        document.querySelector(".material-symbols-outlined").textContent = "expand_less"
    }

    header_down = !header_down;
}

document.querySelector(".header-button").addEventListener("click", hide_header)