var slideIndex = 0;
showSlides();
mapNavToPage();

function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  	slides[slideIndex-1].style.display = "block"; 
  	setTimeout(showSlides, 6000); 
}

function mapNavToPage(){
	$(".resume").on("click", function(){
		document.location.assign("res.html");
	});
	$(".portfolio").on("click", function(){
		document.location.assign("portfolio.html");
	})
	$(".navbar-brand").on("click", function(){
		document.location.assign("../index.html");
	})

}
