AFRAME.registerComponent("markerhandler", {
  init: async function () {
    this.el.addEventListener("markerfound", () => {
      console.log("marker is found");
      this.handlerMarkerFound();
    });

    this.el.addEventListener("markerlost", () => {
      console.log("marker is lost");
      this.handlerMarkerLost();
    });
  },
  handlerMarkerFound: function () {
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "flex";

    var orderButton = document.getElementById("order-button");
    var orderSummaryButton = document.getElementById("order-summary-button");

    orderButton.addEventListener("click", () => {
      swal({
        icon: "https://i.imgur.com/4NZ6uLY.jpg",
        title: "Thanks for the Order!!",
        text: " ",
        timer: 2000,
        buttons: false,
      });
    });
    orderSummaryButton.addEventListener("click", () => {
      swal({
        icon: "warning",
        title: "Order Summary",
        text: "Work in Progress",
      });
    });
  },

  handlerMarkerLost: function () {
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "none";
  },
});
