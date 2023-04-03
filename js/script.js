'use strict';

const addEventOnElem = ((elem, type, callback) => {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    }
    else {
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

addEventOnElem(navbartoggle, "click", toggleNavbar);

const closenavbar = (() => {
    navbar.classList.remove("active");
    navbartoggle.classList.remove("active");
    document.body.classList.remove("active");
})

addEventOnElem(navbarLinks, "click", closenavbar);


const header = document.querySelector("[data-header]");

const activeheader = function () {
    if (window.scrollY > 300) {
        header.classList.add("active");
    }
    else {
        header.classList.remove("active");
    }
}

addEventOnElem(window, "scroll", activeheader);


let settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cdogecoin%2Csolana%2Cripple%2Cmaker%2Caave&vs_currencies=usd&include_market_cap=true&include_24hr_change=true&include_last_updated_at=true&precision=2",
    "method": "GET",
    "headers": {}
};


function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

$.ajax(settings).done(function (response) {

    console.log(response);
    // // bt_.innerHTML = "$" + (response.bitcoin.usd).toFixed(0);
    // let a = response.bitcoin.usd_24h_change + response.bitcoin.usd;
    // bt1.innerHTML = a.toFixed(2);
    // let b = (response.bitcoin.usd_24h_change / response.bitcoin.usd) * 100;
    
    let arr = [
        { mv: response.bitcoin.usd, pc: (response.bitcoin.usd_24h_change / response.bitcoin.usd) * 100, mc: response.bitcoin.usd_market_cap, prc: response.bitcoin.usd_24h_change },
        { mv: response.ethereum.usd, pc: (response.ethereum.usd_24h_change / response.ethereum.usd) * 100, mc: response.ethereum.usd_market_cap, prc: response.ethereum.usd_24h_change },
        { mv: response.tether.usd, pc: (response.tether.usd_24h_change / response.tether.usd) * 100, mc: response.tether.usd_market_cap, prc: response.tether.usd_24h_change },
        { mv: response.dogecoin.usd, pc: (response.dogecoin.usd_24h_change / response.dogecoin.usd) * 100, mc: response.dogecoin.usd_market_cap, prc: response.dogecoin.usd_24h_change },
        { mv: response.solana.usd, pc: (response.solana.usd_24h_change / response.solana.usd) * 100, mc: response.solana.usd_market_cap, prc: response.solana.usd_24h_change },
        { mv: response.ripple.usd, pc: (response.ripple.usd_24h_change / response.ripple.usd) * 100, mc: response.ripple.usd_market_cap, prc: response.ripple.usd_24h_change },
        { mv: response.aave.usd, pc: (response.aave.usd_24h_change / response.aave.usd) * 100, mc: response.aave.usd_market_cap, prc: response.aave.usd_24h_change },
        { mv: response.maker.usd, pc: (response.maker.usd_24h_change / response.maker.usd) * 100, mc: response.maker.usd_market_cap, prc: response.maker.usd_24h_change },
    ]
    
    let arr2 = [
        {id: document.getElementById("bitcoin"),ch: document.getElementById("bitcoin1"),pc: document.getElementById("bitper")},
        {id: document.getElementById("ethereum"),ch: document.getElementById("ethereum1"),pc: document.getElementById("ethper")},
        {id: document.getElementById("tether"),ch: document.getElementById("tether1"),pc: document.getElementById("tetper")},
        {id: document.getElementById("doge"),ch: document.getElementById("doge1"),pc: document.getElementById("dogper")},
    ]
    
    const per = document.querySelectorAll("[data-card-trend]");

    for(let i=0;i<per.length;i++){
        arr2[i].id.innerHTML = numberWithCommas(arr[i].mv.toFixed(2));

        arr2[i].ch.innerHTML = arr[i].prc.toFixed(4);

        if(arr[i].pc < 0){
            per[i].classList.add("red");
            arr2[i].pc.innerHTML = arr[i].pc.toFixed(2) + "%";
        }
        else{
            per[i].classList.add("green");
            arr2[i].pc.innerHTML = arr[i].pc.toFixed(2) + "%";
        }
    }

    let arr1 = [
        {id: document.getElementById("bitcoin_"),pid: document.getElementById("bitper_"),mid: document.getElementById("bitmc")},
        {id: document.getElementById("eth_"),pid: document.getElementById("ethper_"),mid: document.getElementById("ethmc")},
        {id: document.getElementById("tet_"),pid: document.getElementById("tetper_"),mid: document.getElementById("tetmc")},
        {id: document.getElementById("doge_"),pid: document.getElementById("dogper_"),mid: document.getElementById("dogemc")},
        {id: document.getElementById("sol_"),pid: document.getElementById("solper_"),mid: document.getElementById("solmc")},
        {id: document.getElementById("ripple"),pid: document.getElementById("ripper_"),mid: document.getElementById("ripmc")},
        {id: document.getElementById("aave"),pid: document.getElementById("aaveper_"),mid: document.getElementById("aavemc")},
        {id: document.getElementById("mkr"),pid: document.getElementById("mkrper_"),mid: document.getElementById("mkrmc")}
    ];

    let arr3 = [
        {chr: document.getElementById("one")},
        {chr: document.getElementById("two")},
        {chr: document.getElementById("three")},
        {chr: document.getElementById("four")},
        {chr: document.getElementById("five")},
        {chr: document.getElementById("six")},
        {chr: document.getElementById("seven")},
        {chr: document.getElementById("eight")},
    ];


    const pcd = document.querySelectorAll("[data-market-perch]");
    const chi = document.querySelectorAll("[data-chart]");


    for (let i = 0; i < pcd.length; i++) {
        arr1[i].id.innerHTML = "$" + numberWithCommas(arr[i].mv.toFixed(2));


        if (arr[i].pc < 0) {
            pcd[i].classList.add("red");
            arr1[i].pid.innerHTML = arr[i].pc.toFixed(2) + "%";
            arr3[i].chr.src = "images/chart-2.svg";
            
        }
        else {
            pcd[i].classList.add("green");
            arr1[i].pid.innerHTML = arr[i].pc.toFixed(2) + "%";
            arr3[i].chr.src = "images/chart-1.svg";
        }
        arr1[i].mid.innerHTML = "$"+ numberWithCommas(arr[i].mc.toFixed(0));
    }

});


const addToFavBtns = document.querySelectorAll("[data-add-to-fav]");

const toggleactive = function () {
    this.classList.toggle("active");
};

addEventOnElem(addToFavBtns, "click", toggleactive);

const sections = document.querySelectorAll("[data-section]");


const scrollReveal = function () {
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
            sections[i].classList.add("active");
        }
        else {
            sections[i].classList.remove("active");
        }
    }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);