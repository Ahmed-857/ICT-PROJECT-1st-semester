/* ================= PAGE LOAD EFFECT ================= */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

/* ================= TOAST NOTIFICATION ================= */

const toastNotification =
document.getElementById(
"toastNotification"
);

function showToast(message){

    toastNotification.textContent =
    message;

    toastNotification.classList.add(
    "showToast"
    );

    setTimeout(() => {

        toastNotification.classList.remove(
        "showToast"
        );

    },3000);
}

/* ================= SERVICE BUTTONS ================= */

const serviceButtons =
document.querySelectorAll(
".serviceRequestButton"
);

serviceButtons.forEach(button => {

    button.addEventListener(
    "click",
    () => {

        const serviceName =
        button.dataset.service;

        showToast(
        `✓ Thank you for your interest in ${serviceName}`
        );

    });

});

/* ================= SCROLL ANIMATION ================= */

const animatedCards =
document.querySelectorAll(
".restaurantServiceCard, .whyChooseUsCard"
);

const observer =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity =
            "1";

            entry.target.style.transform =
            "translateY(0px)";
        }

    });

},
{
    threshold:0.15
}
);

animatedCards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
    "translateY(40px)";

    card.style.transition =
    "0.6s ease";

    observer.observe(card);

});

/* ================= STATS COUNTER ================= */

const statisticsNumbers =
document.querySelectorAll(
".statisticsNumber"
);

const statisticsObserver =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter =
            entry.target;

            const target =
            Number(
            counter.dataset.target
            );

            let current = 0;

            const increment =
            target / 100;

            const updateCounter =
            () => {

                current += increment;

                if(current < target){

                    counter.textContent =
                    Math.floor(current);

                    requestAnimationFrame(
                    updateCounter
                    );
                }

                else{

                    if(target === 10000){

                        counter.textContent =
                        "10K+";
                    }

                    else{

                        counter.textContent =
                        target + "+";
                    }

                }

            };

            updateCounter();

            statisticsObserver.unobserve(
            counter
            );

        }

    });

},
{
    threshold:0.5
}
);

statisticsNumbers.forEach(number => {

    statisticsObserver.observe(
    number
    );

});

/* ================= ACTIVE NAVBAR LINK ================= */

const navbarLinks =
document.querySelectorAll(
".navbarLinks a"
);

navbarLinks.forEach(link => {

    link.addEventListener(
    "click",
    () => {

        navbarLinks.forEach(navLink => {

            navLink.classList.remove(
            "activeNavbarLink"
            );

        });

        link.classList.add(
        "activeNavbarLink"
        );

    });

});