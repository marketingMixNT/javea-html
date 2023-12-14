
const nav = document.querySelector(".desktop-nav-container");
// const bookBtn = document.querySelector('#tourmaster-room-navigation-checkout-button')
// const menuItems = document.querySelectorAll('.menu-ite a')
// const dropdown = document.querySelector('.menu-item.menu-item-has-children.hotale-normal-menu a')
const logo = document.querySelector('.logo-nav')


const height = 250;

window.addEventListener("scroll", () => {
    const actualPos = window.scrollY;

    if (actualPos >= height) {
        logo.style.display='block'
        // nav.classList.add("change-bgc");
        // bookBtn.classList.remove('btn--secondary')
        // bookBtn.classList.add('btn--third')
        // menuItems.forEach(item=>item.style.color='white')
        // dropdown.style.color='white'

    }else{
        logo.style.display='none'

        // nav.classList.remove("change-bgc");
        // bookBtn.classList.add('btn--secondary')
        // bookBtn.classList.remove('btn--third')
        // menuItems.forEach(item=>item.style.color='black')
        // dropdown.style.color='black'
    }
});


const filterItem = document.querySelector('.items-links');
const filterImages = document.querySelectorAll('.project-img');
const filterInfo = document.querySelector('.info');

if (filterItem && filterImages.length > 0) {
    window.addEventListener('load', () => {
        const initialFilter = 'a3a';

        filterImages.forEach((image) => {
            let filterImageName = image.getAttribute('data-name');
            if (filterImageName === initialFilter) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });

        if (filterInfo) {
            filterInfo.querySelectorAll('[data-name]').forEach((infoItem) => {
                let infoName = infoItem.getAttribute('data-name');
                if (infoName === initialFilter) {
                    infoItem.style.display = "block";
                } else {
                    infoItem.style.display = "none";
                }
            });
        }

        filterItem.querySelector(`[data-name="${initialFilter}"]`).classList.add('menu-active');

        filterItem.addEventListener('click', (selectedItem) => {
            if (selectedItem.target.classList.contains('item-link')) {
                document.querySelector('.menu-active').classList.remove('menu-active');
                selectedItem.target.classList.add('menu-active');
                let filterName = selectedItem.target.getAttribute('data-name');

                filterImages.forEach((image) => {
                    let filterImageName = image.getAttribute('data-name');
                    if (filterImageName === filterName || filterName === 'all') {
                        image.style.display = "block";
                    } else {
                        image.style.display = "none";
                    }
                });

                if (filterInfo) {
                    filterInfo.querySelectorAll('[data-name]').forEach((infoItem) => {
                        let infoName = infoItem.getAttribute('data-name');
                        if (infoName === filterName || filterName === 'all') {
                            infoItem.style.display = "block";
                        } else {
                            infoItem.style.display = "none";
                        }
                    });
                }
            }
        });
    });
}




const footerYearSpan = document.querySelector('.footer__year')

const date = new Date()

const currentYear = date.getFullYear()


if(footerYearSpan){
    footerYearSpan.innerHTML = currentYear
}



window.onload = function() {
    // Hide the loader
    document.getElementById('loader').style.display = 'none';

    // Show the images
    document.querySelectorAll('.gallery-image').forEach(function(image) {
        image.style.display = 'block';
    });
};






// const cookieBox = document.querySelector("#cookieBox");
// const acceptBtn = document.querySelector("#acceptBtn");

// const addCookie = () => {
//     document.cookie = "Privacy Policy; max-age=" + 60 * 60 * 24 * 30;

//     if (document.cookie.indexOf("Privacy Policy") !== -1) {
//         cookieBox.classList.add("hidden");
//     }
// };

// const checkCookie = () => {
//     if (document.cookie.indexOf("Privacy Policy") !== -1) {
//         cookieBox.classList.add("hidden");
//     } else {
//         cookieBox.classList.remove("hidden");
//     }
// };

// checkCookie();

// acceptBtn.addEventListener("click", () => {
//     addCookie();
//     checkCookie();
// });






document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('rooms-container'); // ID Twojego konkretnego kontenera
    const divs = Array.from(container.children); // Pobranie dzieci kontenera jako tablicy
    const shuffledDivs = divs.sort(() => 0.5 - Math.random()); // Losowe mieszanie DIV-ów

    // Usunięcie istniejących DIV-ów z kontenera
    container.innerHTML = '';

    // Dodanie wymieszanych DIV-ów z powrotem do kontenera
    shuffledDivs.forEach(div => container.appendChild(div));
});