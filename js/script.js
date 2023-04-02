'use strict';

const addEventOnElem = ((elem, type, callback) => {
    if(elem.length > 1){
        for(let i=0;i < elem.length; i++){
            elem[i].addEventListener(type, callback);
        }
    }
    else{
        elem.addEventListener(type, callback);
    }
})

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbartoggle = document.querySelector("[data-nav-toggler]");


const toggleNavbar = (() => {
    navbar.classList.toggle("active");
    navbartoggle.classList.toggle("active");
    document.body.classList.toggle("active");
});

addEventOnElem(navbartoggle,"click",toggleNavbar);

const closenavbar = (() => {
    navbar.classList.remove("active");
    navbartoggle.classList.remove("active");
    document.body.classList.remove("active");
})

addEventOnElem(navbarLinks,"click",closenavbar);


const header = document.querySelector("[data-header]");

const activeheader = function(){
    if(window.scrollY > 300){
        header.classList.add("active");
    }
    else{
        header.classList.remove("active");
    }
}

addEventOnElem(window,"scroll",activeheader);

let bt = document.getElementById("bitcoin");
let bt1 = document.getElementById("bitcoin1");
let btp = document.getElementById("bitper");

let et = document.getElementById("ethereum");
let et1 = document.getElementById("ethereum1");
let etp = document.getElementById("ethper");

let th = document.getElementById("tether");
let th1 = document.getElementById("tether1");
let thp = document.getElementById("tetper");

let dg = document.getElementById("doge");
let dg1 = document.getElementById("doge1");
let dgp = document.getElementById("dogper");




let settings = {
    "async":true,
    "scrossDomain":true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cdogecoin%2Csolana%2Cripple%2Cstacks%2Cavalanche&vs_currencies=usd&include_market_cap=true&include_24hr_change=true&include_last_updated_at=true&precision=2",
    "method":"GET",
    "headers":{}
};

$.ajax(settings).done(function(response){
    console.log(response);
    bt.innerHTML = response.bitcoin.usd;
    let a = response.bitcoin.usd_24h_change+response.bitcoin.usd;
    bt1.innerHTML = a.toFixed(2);
    let b = (response.bitcoin.usd_24h_change/response.bitcoin.usd)*100;
    const per = document.querySelector("[data-card-trend]");
    if(b < 0){
        per.classList.add("red");
        btp.innerHTML = b.toFixed(2)+"%";
    }
    else{
        
        per.classList.add("green");
        btp.innerHTML = "+"+b.toFixed(2)+"%";
    }

    et.innerHTML = response.ethereum.usd;
    a = response.ethereum.usd_24h_change+response.ethereum.usd;
    et1.innerHTML = a.toFixed(2);
    let c = (response.ethereum.usd_24h_change/response.ethereum.usd)*100;
    const pern = document.querySelector("[data-card-trend1]");

    if(c < 0){
        pern.classList.add("red");
        etp.innerHTML = b.toFixed(2)+"%";
    }
    else{
        
        pern.classList.add("green");
        etp.innerHTML = "+"+b.toFixed(2)+"%";
    }

    th.innerHTML = response.tether.usd;
    a = response.tether.usd_24h_change+response.tether.usd;
    th1.innerHTML = a.toFixed(2);
    c = (response.ethereum.usd_24h_change/response.ethereum.usd)*100;
    const pernt = document.querySelector("[data-card-trend2]");

    if(c < 0){
        pernt.classList.add("red");
        thp.innerHTML = "-"+b.toFixed(2)+"%";
    }
    else{
        
        pernt.classList.add("green");
        thp.innerHTML = "+"+b.toFixed(2)+"%";
    }
    dg.innerHTML = response.dogecoin.usd;
    a = response.dogecoin.usd_24h_change+response.dogecoin.usd;
    dg1.innerHTML = a.toFixed(2);
});


const addToFavBtns = document.querySelectorAll("[data-add-to-fav]");

const toggleactive = function() {
    this.classList.toggle("active");
};

addEventOnElem(addToFavBtns, "click", toggleactive);

const sections = document.querySelectorAll("[data-section]");


const scrollReveal = function () {
    for (let i = 0; i < sections.length; i++) {
        if(sections[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
            sections[i].classList.add("active");
        }
        else{
            sections[i].classList.remove("active");
        }
    }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);