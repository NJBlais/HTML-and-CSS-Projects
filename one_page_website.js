//open the modal
function openModal() {
    document.getElementById("myModal").style.display = "block"
}
//Close the modal

function closeModal() {
    document.getElementById("myModal").style.display = "none"
}
var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
}

    if (n > slides.length) {
        slideIndex = 1;
         if(n < 1) {
            slideIndex = slides.length};
             for (i = 0; i < slides.lenght; i++) {
        slides[i].style.display = "none";
        slides[slideIndex-1].style.display = "block";
    }
}

