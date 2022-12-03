const changeMode = () => {
    let mybody = document.body;
    // let obj = document.getElementsByClassName('main');

    mybody.classList.toggle('mydark')
}


function loadCoupon(){
    document.getElementById("coupon").style.visibility = "visible";
    document.getElementById("main").style.opacity="0.2";
}

function closeCoupon(){
    document.getElementById("coupon").style.visibility = "hidden";
    document.getElementById("main").style.opacity="1";
}




const header = document.querySelector('.Header');
const nav = document.querySelector('.Navbar')
const topOfNav = header.offsetTop;

function fixNav(){
    if (window.scrollY >= topOfNav){
        nav.style.paddingTop = header.offsetHeight + 2 + 'px';
    }
    else{
        nav.style.paddingTop = 0;
    }
}
// for fixing the navbar at top
window.addEventListener('scroll',fixNav);



