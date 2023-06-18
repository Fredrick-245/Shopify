const navBar = document.querySelector(".search-container");
const productsSection = document.querySelector(".hero-section");

/// Inter-section Observer
options = {
  root: null,
  // rootMargin: "-150px",
  threshold: 0.1,
};

const productsSectionObserver = (entries) => {
  // console.log(entries);

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry);

      navBar.classList.remove("fixed");
    } else {
      navBar.classList.add("fixed");
    }
  });

  // if (entries[0].isIntersecting) {
  //   // navBar.classList.add("fixed");
  //   navBar.classList.add("fixed");
  // } else {
  //   navBar.classList.remove("fixed");
  // }
};
const observer = new IntersectionObserver(productsSectionObserver, options);
observer.observe(productsSection);

///////////////////////
/// SLIDESHOW ACTUALIZATION
document.addEventListener("DOMContentLoaded", function () {
  const slideshow = document.querySelectorAll(".hero-image");
  const dots = document.querySelectorAll(".dot");
  let currentSlide = 0;

  function showSlide(i) {
    slideshow.forEach(function (image, index) {
      image.style.transform = `translateX(${(index - i) * 100}%)`;
      image.style.display = "block";
    });
    dots.forEach(function (dot) {
      dot.classList.remove("active");
    });

    slideshow[i].style.display = "block";
    dots[i].classList.add("active");
    //calling functions
  }

  function nextSlide() {
    currentSlide++;
    if (currentSlide >= slideshow.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }
  function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slideshow.length;
    }
  }

  function jumpToSlide(i) {
    currentSlide = i;
    showSlide(currentSlide);
  }

  // Attach event listeners to dots
  dots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
      jumpToSlide(index);
    });
  });
  // Auto slide every 3 seconds (adjust as needed)
  // setInterval(nextSlide, 15000);

  // Show the initial slide
  showSlide(currentSlide);
});
