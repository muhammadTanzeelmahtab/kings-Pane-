const myNav = document.querySelector("#navBar")


document.onscroll = function () { 
    if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10 ) {
        myNav.classList.add("navbar_bg");
    } 
    else if (toggleBtn.classList.contains('collapsed') && (document.body.scrollTop === 0 || document.documentElement.scrollTop === 0)) {
        myNav.classList.remove("navbar_bg");
    }

};

const toggleBtn = document.querySelector("#toggleBtn")

toggleBtn.onclick = function navBtn(){
        myNav.classList.remove("navbar_bg");
        myNav.classList.add("navbar_bg");
        if (toggleBtn.classList.contains('collapsed')){
            myNav.classList.remove("navbar_bg");
        }
};
