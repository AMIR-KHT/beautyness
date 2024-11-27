// document.querySelectorAll(".c2-c1-items")[0].addEventListener("click",e=>{
//     document.querySelector("#nail").children[0].children[0].style.rotate = "45deg"
// })
// document.querySelectorAll(".c2-c1-items")[0].addEventListener("mouseout",e=>{
//     document.querySelector("#nail").children[0].children[0].style.rotate = "0deg"
// })

let a,b,c,d,f = false;

window.addEventListener("resize",e=>{
    if(window.innerWidth > 960){
        document.querySelector("#nail").children[0].children[0].style.rotate = "0deg"
        document.querySelectorAll(".c2-c1-items")[0].style.height = "50px"
        a = false;
        document.querySelector("#keratin").children[0].children[0].style.rotate = "0deg"
        document.querySelectorAll(".c2-c1-items")[1].style.height = "50px"
        b = false;
        document.querySelector("#chignon").children[0].children[0].style.rotate = "0deg"
        document.querySelectorAll(".c2-c1-items")[2].style.height = "50px"
        c = false;
        document.querySelector("#eyelash").children[0].children[0].style.rotate = "0deg"
        document.querySelectorAll(".c2-c1-items")[3].style.height = "50px"
        d = false;
        document.querySelector("#brushing").children[0].children[0].style.rotate = "0deg"
        document.querySelectorAll(".c2-c1-items")[4].style.height = "50px"
        f = false;
    }else{
        document.querySelector("#nail").children[0].children[0].style.rotate = "0deg"
        document.querySelectorAll(".c2-c1-items")[0].style.height = "40px"
        a = false;
        document.querySelector("#keratin").children[0].children[0].style.rotate = "0deg"
        document.querySelectorAll(".c2-c1-items")[1].style.height = "40px"
        b = false;
        document.querySelector("#chignon").children[0].children[0].style.rotate = "0deg"
        document.querySelectorAll(".c2-c1-items")[2].style.height = "40px"
        c = true;
        document.querySelector("#eyelash").children[0].children[0].style.rotate = "0deg"
        document.querySelectorAll(".c2-c1-items")[3].style.height = "40px"
        d = false;
        document.querySelector("#brushing").children[0].children[0].style.rotate = "0deg"
        document.querySelectorAll(".c2-c1-items")[4].style.height = "40px"
        f = false;
    }
})

document.querySelectorAll(".top-service")[0].addEventListener("click",e=>{
    if(window.innerWidth > 960){
        if(a){
            document.querySelector("#nail").children[0].children[0].style.rotate = "0deg"
            document.querySelectorAll(".c2-c1-items")[0].style.height = "50px"
            a = false;
        }else{
            document.querySelector("#nail").children[0].children[0].style.rotate = "45deg"
            document.querySelectorAll(".c2-c1-items")[0].style.height = "275px"
            a = true;
        }
    }else{
        if(a){
            document.querySelector("#nail").children[0].children[0].style.rotate = "0deg"
            document.querySelectorAll(".c2-c1-items")[0].style.height = "40px"
            a = false;
        }else{
            document.querySelector("#nail").children[0].children[0].style.rotate = "45deg"
            document.querySelectorAll(".c2-c1-items")[0].style.height = "230px"
            a = true;
        }
    }
})

document.querySelectorAll(".top-service")[1].addEventListener("click",e=>{
    if(window.innerWidth > 960){
        if(b){
            document.querySelector("#keratin").children[0].children[0].style.rotate = "0deg"
            document.querySelectorAll(".c2-c1-items")[1].style.height = "50px"
            b = false;
        }else{
            document.querySelector("#keratin").children[0].children[0].style.rotate = "45deg"
            document.querySelectorAll(".c2-c1-items")[1].style.height = "275px"
            b = true;
        }
    }else{
        if(b){
            document.querySelector("#keratin").children[0].children[0].style.rotate = "0deg"
            document.querySelectorAll(".c2-c1-items")[1].style.height = "40px"
            b = false;
        }else{
            document.querySelector("#keratin").children[0].children[0].style.rotate = "45deg"
            document.querySelectorAll(".c2-c1-items")[1].style.height = "230px"
            b = true;
        }
    }
})

document.querySelectorAll(".top-service")[2].addEventListener("click",e=>{
    if(window.innerWidth > 960){
        if(c){
            document.querySelector("#chignon").children[0].children[0].style.rotate = "0deg"
            document.querySelectorAll(".c2-c1-items")[2].style.height = "50px"
            c = false;
        }else{
            document.querySelector("#chignon").children[0].children[0].style.rotate = "45deg"
            document.querySelectorAll(".c2-c1-items")[2].style.height = "275px"
            c = true;
        }
    }else{
        if(c){
            document.querySelector("#chignon").children[0].children[0].style.rotate = "0deg"
            document.querySelectorAll(".c2-c1-items")[2].style.height = "40px"
            c = false;
        }else{
            document.querySelector("#chignon").children[0].children[0].style.rotate = "45deg"
            document.querySelectorAll(".c2-c1-items")[2].style.height = "230px"
            c = true;
        }
    }
})

document.querySelectorAll(".top-service")[3].addEventListener("click",e=>{
    if(window.innerWidth > 960){
        if(d){
            document.querySelector("#eyelash").children[0].children[0].style.rotate = "0deg"
            document.querySelectorAll(".c2-c1-items")[3].style.height = "50px"
            d = false;
        }else{
            document.querySelector("#eyelash").children[0].children[0].style.rotate = "45deg"
            document.querySelectorAll(".c2-c1-items")[3].style.height = "275px"
            d = true;
        }
    }else{
        if(d){
            document.querySelector("#eyelash").children[0].children[0].style.rotate = "0deg"
            document.querySelectorAll(".c2-c1-items")[3].style.height = "40px"
            d = false;
        }else{
            document.querySelector("#eyelash").children[0].children[0].style.rotate = "45deg"
            document.querySelectorAll(".c2-c1-items")[3].style.height = "230px"
            d = true;
        }
    }
})

document.querySelectorAll(".top-service")[4].addEventListener("click",e=>{
    if(window.innerWidth > 960){
        if(f){
            document.querySelector("#brushing").children[0].children[0].style.rotate = "0deg"
            document.querySelectorAll(".c2-c1-items")[4].style.height = "50px"
            f = false;
        }else{
            document.querySelector("#brushing").children[0].children[0].style.rotate = "45deg"
            document.querySelectorAll(".c2-c1-items")[4].style.height = "275px"
            f = true;
        }
    }else{
        if(f){
            document.querySelector("#brushing").children[0].children[0].style.rotate = "0deg"
            document.querySelectorAll(".c2-c1-items")[4].style.height = "40px"
            f = false;
        }else{
            document.querySelector("#brushing").children[0].children[0].style.rotate = "45deg"
            document.querySelectorAll(".c2-c1-items")[4].style.height = "230px"
            f = true;
        }
    }
})








document.querySelector("#c2-slide1").addEventListener("click",e=>{

    document.querySelector("#slider1-gallery").style.left = "225px";
    document.querySelector("#c2-slide1").style.rotate = "15deg";
    document.querySelector("#c2-slide1").innerHTML = "<img width='420px' height='550px' src='./Icons/ContentIcons/slider1.png'>";
    document.querySelector("#c2-slide2").innerHTML = "<img width='260px' height='360px' src='./Icons/ContentIcons/slider2.png'>";
    document.querySelector("#c2-slide3").innerHTML = "<img width='200px' height='260px' src='./Icons/ContentIcons/slider3.png'>";
    document.querySelector("#artist-info").innerHTML = "<img src='./Icons/ContentIcons/arr.png'><span style='color: #BCA384;font-size: 36px;'>Eyelash transplant</span><span style='color: #BDBDBD;font-size: 20px;font-family: poppins'>Face makeup specialist</span>"
    document.querySelector("#c2-slide4").innerHTML = "<img width='0px' height='0px' src='./Icons/ContentIcons/slider4.png'>";
    document.querySelector("#c2-slide5").innerHTML = "<img width='0px' height='0px' src='./Icons/ContentIcons/slider5.png'>";


    document.querySelector("#c2-slide2").style.rotate = "15deg"
    document.querySelector("#c2-slide3").style.rotate = "20deg"
})



document.querySelector("#c2-slide2").addEventListener("click",e=>{

    document.querySelector("#slider1-gallery").style.left = "100px";
    document.querySelector("#c2-slide2").style.rotate = "10deg";
    document.querySelector("#c2-slide2").innerHTML = "<img width='360px' height='490px' src='./Icons/ContentIcons/slider2.png'>";
    document.querySelector("#c2-slide1").innerHTML = "<img width='260px' height='340px' src='./Icons/ContentIcons/slider1.png'>";
    document.querySelector("#c2-slide3").innerHTML = "<img width='260px' height='340px' src='./Icons/ContentIcons/slider3.png'>";
    document.querySelector("#c2-slide4").innerHTML = "<img width='180px' height='240px' src='./Icons/ContentIcons/slider4.png'>";

    document.querySelector("#c2-slide5").innerHTML = "<img width='0px' height='0px' src='./Icons/ContentIcons/slider5.png'>";


    document.querySelector("#c2-slide1").style.rotate = "-1deg"
    document.querySelector("#c2-slide3").style.rotate = "10deg"
    document.querySelector("#c2-slide4").style.rotate = "5deg"

    document.querySelector("#artist-info").innerHTML = "<img src='./Icons/ContentIcons/arr.png'><span style='color: #BCA384;font-size: 36px;'>Hair keratin</span><span style='color: #BDBDBD;font-size: 20px;font-family: poppins'>Face makeup specialist</span>"
})

document.querySelector("#c2-slide3").addEventListener("click",e=>{

    document.querySelector("#slider1-gallery").style.left = "0px";
    document.querySelector("#c2-slide3").innerHTML = "<img width='360px' height='490px' src='./Icons/ContentIcons/slider3.png'>";
    document.querySelector("#c2-slide3").style.rotate = "0deg"
    document.querySelector("#c2-slide5").innerHTML = "<img width='180px' height='240px' src='./Icons/ContentIcons/slider5.png'>";

    document.querySelector("#c2-slide1").innerHTML = "<img width='180px' height='240px' src='./Icons/ContentIcons/slider1.png'>";
    document.querySelector("#c2-slide1").style.rotate = "-1deg"
    document.querySelector("#c2-slide2").style.rotate = "-1deg"
    document.querySelector("#c2-slide2").innerHTML = "<img width='260px' height='340px' src='./Icons/ContentIcons/slider2.png'>";
    document.querySelector("#c2-slide4").innerHTML = "<img width='260px' height='340px' src='./Icons/ContentIcons/slider4.png'>";

    document.querySelector("#c2-slide4").style.rotate = "2deg"
    document.querySelector("#c2-slide5").style.rotate = "5deg"

    document.querySelector("#artist-info").innerHTML = "<img src='./Icons/ContentIcons/arr.png'><span style='color: #BCA384;font-size: 36px;'>Nail services</span><span style='color: #BDBDBD;font-size: 20px;font-family: poppins'>Face makeup specialist</span>"


})
document.querySelector("#c2-slide4").addEventListener("click",e=>{

    document.querySelector("#slider1-gallery").style.left = "-200px";
    document.querySelector("#c2-slide4").innerHTML = "<img width='360px' height='490px' src='./Icons/ContentIcons/slider4.png'>";    
    document.querySelector("#c2-slide3").innerHTML = "<img width='260px' height='340px' src='./Icons/ContentIcons/slider3.png'>";
    document.querySelector("#c2-slide2").innerHTML = "<img width='180px' height='240px' src='./Icons/ContentIcons/slider2.png'>";
    document.querySelector("#c2-slide5").innerHTML = "<img width='260px' height='340px' src='./Icons/ContentIcons/slider5.png'>";

    document.querySelector("#c2-slide4").style.rotate = "-10deg"
    document.querySelector("#c2-slide3").style.rotate = "-10deg"
    document.querySelector("#c2-slide5").style.rotate = "5deg"

    document.querySelector("#artist-info").innerHTML = "<img src='./Icons/ContentIcons/arr.png'><span style='color: #BCA384;font-size: 36px;'>Hair brushing</span><span style='color: #BDBDBD;font-size: 20px;font-family: poppins'>Face makeup specialist</span>"
})

document.querySelector("#c2-slide5").addEventListener("click",e=>{

    document.querySelector("#slider1-gallery").style.left = "-420px";
    document.querySelector("#c2-slide5").innerHTML = "<img width='360px' height='490px' src='./Icons/ContentIcons/slider5.png'>";
    document.querySelector("#c2-slide4").innerHTML = "<img width='260px' height='340px' src='./Icons/ContentIcons/slider4.png'>";
    document.querySelector("#c2-slide3").innerHTML = "<img width='180px' height='240px' src='./Icons/ContentIcons/slider3.png'>";

    document.querySelector("#c2-slide5").style.rotate = "-12deg"
    document.querySelector("#c2-slide4").style.rotate = "-15deg"
    document.querySelector("#c2-slide3").style.rotate = "-15deg"

    document.querySelector("#artist-info").innerHTML = "<img src='./Icons/ContentIcons/arr.png'><span style='color: #BCA384;font-size: 36px;'>Hair chignon</span><span style='color: #BDBDBD;font-size: 20px;font-family: poppins'>Face makeup specialist</span>"


})

let pos = 0;
document.querySelector("#slider2-right").addEventListener("click",e=>{
    if(pos > -1000){
        pos -= 250;
        document.querySelector("#slider2-gallery").style.left = pos+"px"
    }else{
        pos = 0;
        document.querySelector("#slider2-gallery").style.left = pos+"px"
    }

})

document.querySelector("#slider2-left").addEventListener("click",e=>{
    if(pos < 0){
        pos += 250;
        document.querySelector("#slider2-gallery").style.left = pos+"px"
    }

})

document.querySelector("#go-up").addEventListener("click",e=>{
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
})