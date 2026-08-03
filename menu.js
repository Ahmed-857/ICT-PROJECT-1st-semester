/* ================= CART SYSTEM ================= */

let cartItemsCount = 0;

const cartCountDisplay =
document.getElementById("cartCount");

const toastNotification =
document.getElementById("toastNotification");

const addToCartButtons =
document.querySelectorAll(".addToCartButton");

addToCartButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartItemsCount++;

        cartCountDisplay.textContent =
        cartItemsCount;

        const itemName =
        button.dataset.name;

        showToast(
        `✓ ${itemName} added to cart`
        );

    });

});

/* ================= TOAST NOTIFICATION ================= */

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

/* ================= MENU SEARCH ================= */

const menuSearchInput =
document.getElementById(
"menuSearchInput"
);

menuSearchInput.addEventListener(
"keyup",
() => {

    const searchValue =
    menuSearchInput.value
    .toLowerCase();

    const menuCards =
    document.querySelectorAll(
    ".menuItemCard"
    );

    menuCards.forEach(card => {

        const cardText =
        card.textContent
        .toLowerCase();

        if(cardText.includes(searchValue)){

            card.style.display =
            "block";
        }

        else{

            card.style.display =
            "none";
        }

    });

});

/* ================= CATEGORY FILTER ================= */

const categoryButtons =
document.querySelectorAll(
".menuCategoryButton"
);

categoryButtons.forEach(button => {

    button.addEventListener(
    "click",
    () => {

        categoryButtons.forEach(btn => {

            btn.classList.remove(
            "activeFilter"
            );

        });

        button.classList.add(
        "activeFilter"
        );

        const selectedCategory =
        button.dataset.category;

        const menuCards =
        document.querySelectorAll(
        ".menuItemCard"
        );

        menuCards.forEach(card => {

            if(
            selectedCategory === "all"
            ){

                card.style.display =
                "block";
            }

            else{

                if(
                card.classList.contains(
                selectedCategory
                )
                ){

                    card.style.display =
                    "block";
                }

                else{

                    card.style.display =
                    "none";
                }

            }

        });

    });

});

/* ================= SCROLL ANIMATION ================= */

const animatedElements =
document.querySelectorAll(
".menuItemCard"
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

animatedElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
    "translateY(40px)";

    element.style.transition =
    "0.6s ease";

    observer.observe(element);

});

/* ================= NAVBAR ACTIVE LINK ================= */

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

/* ================= PAGE LOAD EFFECT ================= */

window.addEventListener(
"load",
() => {

    document.body.style.opacity =
    "1";

}
);