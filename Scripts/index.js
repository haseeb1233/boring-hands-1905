// Script for Nav Bar & Top Yellow postion gets fixed when Scroll Down
let box1 = document.querySelector("#topmost_div");
let box2 = document.querySelector("#Product_drop_down_cont");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 150) {
    box1.style.position = "fixed";
    box2.style.position = "fixed";
    box2.style.top = "42px";
  } else {
    box1.style.position = "static";
    box2.style.position = "static";
    box2.style.top = "auto";
  }
});
// ********************************

// Category Box with Drop Down Functionality
let drop_down_title = document.querySelectorAll(".product_title");
let drop_down_box = document.querySelectorAll(".drop_down_products");

drop_down_box.forEach(function (item, ind) {
  item.addEventListener("mouseover", function () {
    drop_down_title[ind].style.color = "#ed7745";
    drop_down_title[ind].borderBottom = "2px solid #ed7745";
    drop_down_title[ind].position = "relative";
  });

  item.addEventListener("mouseout", function () {
    drop_down_title[ind].style.color = "#000000";
    drop_down_title[ind].position = "static";
  });
});
// ***********************

// Script for Tooltip When Hovering Over Icons in Nav Bar
var tooltip_1 = document.createElement("div");
tooltip_1.className = "tooltip";
tooltip_1.innerText = "Track Order";
document.body.appendChild(tooltip_1);

var rect_1 = document.getElementById("rect_1");
let track_icon = document.getElementById("truck_icon");

track_icon.addEventListener("mouseover", function () {
  tooltip_1.style.visibility = "visible";
  tooltip_1.style.opacity = 1;
  var rect_1Pos = rect_1.getBoundingClientRect();
  tooltip_1.style.left =
    rect_1Pos.left +
    rect_1Pos.width / 2 -
    tooltip_1.offsetWidth / 2 +
    10 +
    "px";
  tooltip_1.style.top = rect_1Pos.top - tooltip_1.offsetHeight - 8 + 50 + "px";
});
track_icon.addEventListener("mouseout", function () {
  tooltip_1.style.visibility = "hidden";
  tooltip_1.style.opacity = 0;
});

var tooltip_2 = document.createElement("div");
tooltip_2.className = "tooltip";
tooltip_2.innerText = "Wishlist";
document.body.appendChild(tooltip_2);

var rect_2 = document.getElementById("rect_2");
let wishlist_icon = document.getElementById("wishlist_icon");

wishlist_icon.addEventListener("mouseover", function () {
  tooltip_2.style.visibility = "visible";
  tooltip_2.style.opacity = 1;
  var rect_2Pos = rect_1.getBoundingClientRect();
  tooltip_2.style.left =
    rect_2Pos.left +
    rect_2Pos.width / 2 -
    tooltip_2.offsetWidth / 2 +
    75 +
    "px";
  tooltip_2.style.top = rect_2Pos.top - tooltip_2.offsetHeight - 8 + 50 + "px";
});
wishlist_icon.addEventListener("mouseout", function () {
  tooltip_2.style.visibility = "hidden";
  tooltip_2.style.opacity = 0;
});

var tooltip_3 = document.createElement("div");
tooltip_3.className = "tooltip";
tooltip_3.innerText = "Cart";
document.body.appendChild(tooltip_3);

var rect_3 = document.getElementById("rect_3");
let cart_icon = document.getElementById("cart_icon");

cart_icon.addEventListener("mouseover", function () {
  tooltip_3.style.visibility = "visible";
  tooltip_3.style.opacity = 1;
  var rect_3Pos = rect_3.getBoundingClientRect();
  tooltip_3.style.left =
    rect_3Pos.left +
    rect_3Pos.width / 2 -
    tooltip_3.offsetWidth / 2 -
    10 +
    "px";
  tooltip_3.style.top = rect_3Pos.top - tooltip_3.offsetHeight - 8 + 50 + "px";
});
cart_icon.addEventListener("mouseout", function () {
  tooltip_3.style.visibility = "hidden";
  tooltip_3.style.opacity = 0;
});
// ***************

// Script For Animation

const images = [
  `https://www.ulcdn.net/media/Slideshow/Dining-3.jpg?1676877042`,
  `https://www.ulcdn.net/media/Slideshow/Shoeracks4.jpg?1676894369`,
  `https://www.ulcdn.net/media/Slideshow/UI-Feb-slideshow.jpg?1676622712`,
  `https://www.ulcdn.net/media/Slideshow/Spring-into-sale-Slideshow.jpg?1676664267`,
  `https://www.ulcdn.net/media/Slideshow/Beds-2.jpg?1676877037`,
];

let currentImageIndex = 0;
const animImageTag = document.getElementById("anim_image_tag");
const animDotsIcons = document.querySelectorAll(".anim_dots_icons");

function updateImageAndDots() {
  animImageTag.src = images[currentImageIndex];
  animDotsIcons.forEach((dot, index) => {
    if (index === currentImageIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}
function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  animImageTag.classList.remove("slide-right");
  void animImageTag.offsetWidth;
  animImageTag.classList.add("slide-right");
  updateImageAndDots();
}
function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  animImageTag.classList.remove("slide-right");
  void animImageTag.offsetWidth;
  animImageTag.classList.add("slide-right");
  updateImageAndDots();
}

document.getElementById("next_anim_btn").addEventListener("click", nextImage);
document.getElementById("prev_anim_btn").addEventListener("click", prevImage);
updateImageAndDots();
setInterval(nextImage, 5000);
// *****************
