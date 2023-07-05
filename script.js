var nama = document.getElementById('name')
var email = document.getElementById('email')
var dropBtn = document.getElementById('cardown')
var dropdownLink = document.getElementById('dl')

function validation() {
    if (nama.value === null || nama.value === ""){
        alert('Name cannot empty!');
    }
    if (email.value  === null || email.value === "") {
        alert('Email cannot empty!');
    }
}
function dropLinkdown(){
    let indLink = 0
    if (dropBtn.onpointerdown) {
        indLink++;
        dropdownLink.style.display = 'flex'
    }
    console.log(indLink)
    return;
}
function dropLinkleave(){
    if (dropBtn.onpointerleave) {
        indLink = 0;
        dropdownLink.style.display = 'none'
    }
    console.log(indLink)
    return
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 5000);
    }
}