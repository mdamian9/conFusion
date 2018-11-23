$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass("fa-pause")) {
            $("#mycarousel").carousel("pause");
            $("#carouselButton").children("span").removeClass("fa-pause");
            $("#carouselButton").children("span").addClass("fa-play");
        } else if ($("#carouselButton").children("span").hasClass("fa-play")) {
            $("#mycarousel").carousel("cycle");
            $("#carouselButton").children("span").removeClass("fa-play");
            $("#carouselButton").children("span").addClass("fa-pause");
        };
    });
    // When login button is clicked show the login modal
    $("#loginLink").click(function () {
        $("#loginModal").modal("show");
    });
    // When reserve table button is clicked, show the reserve table modal
    $("#reserveTableButton").click(function () {
        $("#reserveTableModal").modal("show");
    });
});