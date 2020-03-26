"use strict";

function navList() {
  var navigation = document.getElementById("navList");
  var btn = document.getElementById('toggle');
  btn.classList.toggle("js-on-toggle");
  navigation.classList.toggle("js-on");
}