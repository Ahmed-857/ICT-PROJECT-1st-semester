// Reservation confirmation

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert(
        "Thank you for choosing Crustz n' Bites!\n\nYour reservation request has been received."
    );

    form.reset();

});