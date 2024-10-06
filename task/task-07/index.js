$("#home-btn").ready(function () {
  $("#home").show();
  $("#about").hide();
  $("#contact").hide();
  $("#view-customer").hide();
  $("#add-customer").hide();
});

$("#home-btn").click(function () {
  $("#home").show();
  $("#about").hide();
  $("#contact").hide();
  $("#view-customer").hide();
  $("#add-customer").hide();
});

$("#about-btn").click(function () {
  $("#home").hide();
  $("#about").show();
  $("#contact").hide();
  $("#view-customer").hide();
  $("#add-customer").hide();
});

$("#contact-btn").click(function () {
  $("#home").hide();
  $("#about").hide();
  $("#contact").show();
  $("#view-customer").hide();
  $("#add-customer").hide();
});

$("#view-customer-btn").click(function () {
  $("#home").hide();
  $("#about").hide();
  $("#contact").hide();
  $("#view-customer").show();
  $("#add-customer").hide();
});

$("#add-customer-btn").click(function () {
  $("#home").hide();
  $("#about").hide();
  $("#contact").hide();
  $("#view-customer").hide();
  $("#add-customer").show();
});
