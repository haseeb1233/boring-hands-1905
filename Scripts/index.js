// Tooltip Script
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

// Product Category Drop Down Functionality
// let product_drop_down_card = document.querySelectorAll(".child_product_divs");
// product_drop_down_card.forEach((item, ind) => {
//   item.addEventListener("mouseover", function (e) {
//     e.target.style.display = "block";
//   });

//   item.addEventListener("mouseout", function (e) {
//     this.style.display = "none";
//   });
// });

// let product_title = document.querySelectorAll(".product_title");
// product_title.forEach((item, ind) => {
//   item.addEventListener("mouseover", function () {
//     this.nextElementSibling.style.display = "block";
//   });

//   item.addEventListener("mouseout", function () {
//     this.nextElementSibling.style.display = "none";
//   });
// });
