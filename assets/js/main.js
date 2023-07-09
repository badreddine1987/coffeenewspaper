"use strict";

const smartButton = document.querySelector('#smart')
const smartMenu = document.querySelector('#smart-menu')


function aboutToggle(e) {
        smartButton.classList.toggle('active');
        smartMenu.classList.toggle('active');
} 

smartButton.addEventListener('click', aboutToggle);

document.querySelector(".about__includ_picture").classList.add('reveal-3');

const ratio = 0.1;
const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio
};

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("reveal-visible");
      observer.unobserve(entry.target);
    }
  });
};

// Observer les éléments avec Intersection Observer
const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="reveal-"]').forEach(function (element) {
  observer.observe(element);
});