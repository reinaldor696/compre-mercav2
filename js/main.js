const onLoad = document.querySelectorAll(".on-load-home");
const menuButton = document.querySelector(".buttons-menu");
const menuNavMquerys = document.querySelectorAll(".menu-nav-mquery");
const signInSection = document.querySelector(".sign-in");
const signUpSection = document.querySelector(".sign-up");
const homeSection = document.querySelector(".home");
const userAccount = document.querySelector(".user-account");
const setupAccount = document.querySelector(".set-up-account");
const passwordPopUp = document.querySelector(".password-pop-up-container");
const historialOrder = document.querySelector(".historial-order");
const shoppingDetailPopUp = document.querySelector(".shopping-detail-pop-up-container");
const shoppingCart = document.querySelector(".shopping-cart");
const aboutUs = document.querySelector(".about-us");
const ProductDescription = document.querySelector(".product-description");
const categories = document.querySelectorAll(".categories");
const rewardZone = document.querySelector(".reward-zone");
const contact = document.querySelector(".contact");
const loyaltyProgram = document.querySelector(".loyalty-program");
const spinDaily = document.querySelector(".spin-daily");
const menuDisplayPanelControls = document.querySelectorAll(".menu-display-user-account");
const editDirectionContainers1 = document.querySelectorAll(".edit-direction-container1");
const svg1MenuPanelControls = document.querySelectorAll(".svg1-menu-panel-control");
const menuPanelControlTitle = document.querySelector(".menu-panel-control h3");
const button1SelectedMenuDisplayUser = document.querySelectorAll("#button1-selected-menu-display-user");
const button2SelectedMenuDisplayUser = document.querySelectorAll("#button2-selected-menu-display-user");
const button3SelectedMenuDisplayUser = document.querySelectorAll("#button3-selected-menu-display-user");
const button4SelectedMenuDisplayUser = document.querySelectorAll("#button4-selected-menu-display-user");
const contentPanelControls = document.querySelector(".content-panel-control");
const contentUserAccountContainers = document.querySelector(".content-user-account-container");
const myProfileOptionsMenuNavMquerys = document.querySelectorAll(".my-profile-options-menu-nav-mquery");
const topDealProductMenuNavMquerys = document.querySelectorAll(".top-deal-product-menu-nav-mquery");
const spanMenuPanelControlContainer = document.querySelector(".span-menu-panel-control-container");
const specialCategoryLists = document.querySelectorAll("#special-category-list");
const specialCategoryArrows = document.querySelectorAll("#img-arrow-categories1");
const subcategoryLists = document.querySelectorAll("#subcategory-list");
const subcategoryListArrows = document.querySelectorAll("#img-arrow-categories2");
const priceCategoriesLists  = document.querySelectorAll("#price-categories-list");
const priceCategoriesListArrows  = document.querySelectorAll("#img-arrow-categories3");
const filterCategoriesMquerys = document.querySelectorAll("#filter-categories-mquery");
const buttonsLoginRegisterMenuNavMquerys = document.querySelectorAll(".buttons-login-register-menu-nav-mquery");
const buttonLogoutMenuNavMquerys = document.querySelectorAll(".button-logout-menu-nav-mquery");
const closeBagMenuNavButton2Mquerys = document.querySelectorAll(".close-bag-menu-nav-button2-mquery");



window.onload = function() {
    onLoad.forEach((e) => {
        e.style.display = "flex";

        document.body.style.overflow = "hidden";
    });
};

function closeOnLoad() {
    onLoad.forEach((e) => {
        e.style.display = "none";

        document.body.style.overflow = "auto";
    });
}

function menuNavHeader() {
    if (menuButton.style.display === "block") {
        menuButton.style.display = "none";

        document.body.style.overflow = "auto";
    } else {
        menuButton.style.display = "block";

        document.body.style.overflow = "hidden";
    }
}

function menuNavBarMquery() {
    menuNavMquerys.forEach((e) => {
        e.style.display = "flex";

        document.body.style.overflow = "hidden";
    });
    
    for(const topDealProductMenuNavMquery of topDealProductMenuNavMquerys){
        if(topDealProductMenuNavMquery.style.display === "flex") {
                topDealProductMenuNavMquery.style.display = "none";
        }
    }

    for(const myProfileOptionsMenuNavMquery of myProfileOptionsMenuNavMquerys) {
        if(myProfileOptionsMenuNavMquery.style.display === "flex") {
                myProfileOptionsMenuNavMquery.style.display ="none";
        }
    }

    closeMenuPanelControl();
    closeButtonFilterCategories();
    closeListCategories();
}

function sectionSingIn() {
    closeMenuNavBarMquery();
    closeMenuNav();
}

function signUp() {
    closeMenuNavBarMquery();
}

function sectionUserAccount() {    
    closeMenuNavBarMquery();
    closeMenuNav();
}

function closeMenuNav() {
    if(menuButton.style.display = "block") {
        menuButton.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

function sectionSetupAccount() {
    closeMenuNav();
    closeMenuPanelControl();
}

function sectionPasswordPopUp() {
    passwordPopUp.style.display = "flex";

    document.body.style.overflow = "hidden";
}
function sectionPasswordChangedPopUp() {
    passwordPopUp.style.display = "none";

    document.body.style.overflow = "auto";
}

function sectionHistorialOrder() {
    closeMenuPanelControl();
}

function sectionShoppingDetailPopUp() {
    shoppingDetailPopUp.style.display = "flex";

    document.body.style.overflow = "hidden";
}
function sectionShoppingDetailClosedPopUp() {
    shoppingDetailPopUp.style.display = "none";

    document.body.style.overflow = "auto";
}

function sectionShoppingCart() {
    closeMenuNavBarMquery();
    closeMenuNav();
}

function sectionAboutUs() {
    closeMenuNavBarMquery();
    closeMenuNav();
}

function sectionAboutUsFromMenu() {
    closeMenuNav();
}

function sectionProductDescription() {
    closeMenuNav();
}

function sectionCategories() {    
    for(const categorie of categories){
        if(categorie.addEventListener("click")) {
            specialCategoryLists.forEach(e => {
                e.style.display = "none";
            });
            
            subcategoryLists.forEach(e => {
                e.style.display = "none";
            });
            priceCategoriesLists.forEach(e => {
                e.style.display = "none";
            });

            specialCategoryArrows.forEach(e => {e.style.transform = 'rotate(0deg)';});
            subcategoryListArrows.forEach(e => {e.style.transform = 'rotate(0deg)';});
            priceCategoriesListArrows.forEach(e => {e.style.transform = 'rotate(0deg)';});
        }
    }
    closeMenuNav();
    closeMenuNavBarMquery();
    closeButtonFilterCategories();
    closeListCategories();
}

function buttonSpecialCategory() {
    for(const specialCategoryList of specialCategoryLists){
        if (specialCategoryList.style.display === "block") {
            specialCategoryList.style.display = "none";

            specialCategoryArrows.forEach(e => {e.style.transform = 'rotate(0deg)';});
        } else {
            specialCategoryList.style.display = "block";

            specialCategoryArrows.forEach(e => {e.style.transform = 'rotate(180deg)';});
        }
    }
}

function buttonSubcategoryList() {
    for(const subcategoryList of subcategoryLists) {
        if (subcategoryList.style.display === "block") {
            subcategoryList.style.display = "none";

            subcategoryListArrows.forEach(e => {e.style.transform = 'rotate(0deg)';});
        } else {
            subcategoryList.style.display = "block";

            subcategoryListArrows.forEach(e => {e.style.transform = 'rotate(180deg)';});
        }
    }
}

function buttoPriceCategoriesList() {
    for(const priceCategoriesList of priceCategoriesLists) {
        if (priceCategoriesList.style.display === "block") {
            priceCategoriesList.style.display = "none";

            priceCategoriesListArrows.forEach(e => {e.style.transform = 'rotate(0deg)';});
        } else {
            priceCategoriesList.style.display = "block";

            priceCategoriesListArrows.forEach(e => {e.style.transform = 'rotate(180deg)';});
        }
    }
}

function closeListCategories() {
    for(const specialCategoryList of specialCategoryLists) {
        if (specialCategoryList.style.display === "block") {
            specialCategoryList.style.display = "none";

            specialCategoryArrows.forEach(e => {e.style.transform = 'rotate(0deg)';});
        }
    }

    for(const subcategoryList of subcategoryLists) {
        if (subcategoryList.style.display === "block") {
            subcategoryList.style.display = "none";

            subcategoryListArrows.forEach(e => {e.style.transform = 'rotate(0deg)';});
        }
    }

    for(const priceCategoriesList of priceCategoriesLists) {
        if (priceCategoriesList.style.display === "block") {
            priceCategoriesList.style.display = "none";

            priceCategoriesListArrows.forEach(e => {e.style.transform = 'rotate(0deg)';});
        }
    }
}

function sectionRewardZone() {
    closeMenuNavBarMquery();
    closeMenuPanelControl();
    closeMenuNav();
}

function sectionContact() {
    closeMenuNavBarMquery();
    closeMenuNav();
}

function sectionLoyaltyProgram() {
    closeMenuNavBarMquery();
    closeMenuNav();
}

function sectionSpinDailyFromMenu() {
    closeMenuNav();
    closeMenuPanelControl();
    closeMenuNavBarMquery();
}

function menuPanelControl() {
    for (const menuDisplayPanelControl of menuDisplayPanelControls) {
        if (menuDisplayPanelControl.style.display === "block") {
        
        menuDisplayPanelControl.style.display = "none";

        document.body.style.overflow = "auto";
        
        for(const editDirectionContainer1 of editDirectionContainers1){
            editDirectionContainer1.style.filter = "none";
            editDirectionContainer1.style.background = "#20B52633";
        }

        svg1MenuPanelControls.forEach((svg1MenuPanelControl) => {
            const pathElements = svg1MenuPanelControl.querySelectorAll("path");
        
            for (const path of pathElements) {
                path.setAttribute("fill", "black");
            }
        });

        menuPanelControlTitle.style.color = "#000";

        } else {
        menuDisplayPanelControl.style.display = "block";

        document.body.style.overflow = "hidden";

        for(const editDirectionContainer1 of editDirectionContainers1){
            editDirectionContainer1.style.filter = "blur(4.5px)";
            editDirectionContainer1.style.background = "#20B52633";
        }
        
        svg1MenuPanelControls.forEach((svg1MenuPanelControl) => {
            const pathElements = svg1MenuPanelControl.querySelectorAll("path");
        
            for (const path of pathElements) {
                path.setAttribute("fill", "#057A10");
            }
        });
        

        menuPanelControlTitle.style.color = "#057A10";
        }
    }    
}

function closeMenuPanelControl() {
    for (const menuDisplayPanelControl of menuDisplayPanelControls) {
        if (menuDisplayPanelControl.style.display === "block") {
            menuDisplayPanelControl.style.display = "none";
            menuPanelControlTitle.style.color = "#000";

            document.body.style.overflow = "auto";

            svg1MenuPanelControls.forEach((svg1MenuPanelControl) => {
                const pathElements = svg1MenuPanelControl.querySelectorAll("path");
            
                for (const path of pathElements) {
                    path.setAttribute("fill", "black");
                }
            });
        } 
    }  
}

function closeMenuNavBarMquery() {
    menuNavMquerys.forEach((e) => {
        e.style.display = "none";

        document.body.style.overflow = "auto";
    });
}

function myProfileMenuNavBarMquery() {
    for(const myProfileOptionsMenuNavMquery of myProfileOptionsMenuNavMquerys) {
        if (myProfileOptionsMenuNavMquery.style.display === "flex") {  
            myProfileOptionsMenuNavMquery.style.display = "none";
        } else {
            myProfileOptionsMenuNavMquery.style.display = "flex";
        }
    }

    for(const topDealProductMenuNavMquery of topDealProductMenuNavMquerys) {
        if(topDealProductMenuNavMquery.style.display === "flex") {
            topDealProductMenuNavMquery.style.display = "none";
        }
    }
}

function productsMenuNavBarMquery() {
    for(const topDealProductMenuNavMquery of topDealProductMenuNavMquerys) {
        if (topDealProductMenuNavMquery.style.display === "flex") {  
            topDealProductMenuNavMquery.style.display = "none";
        } else {
            topDealProductMenuNavMquery.style.display = "flex";
        }
    }   

    for(const myProfileOptionsMenuNavMquery of myProfileOptionsMenuNavMquerys) {
        if(myProfileOptionsMenuNavMquery.style.display === "flex") {
            myProfileOptionsMenuNavMquery.style.display = "none";
        }
    }
}

function buttonFilterCategoriesMquery() {
    for(const filterCategoriesMquery of filterCategoriesMquerys){
        if (filterCategoriesMquery.style.display === "block") {
            filterCategoriesMquery.style.display = "none";
        } else {
            filterCategoriesMquery.style.display = "block";
        }
    }

    closeListCategories();
}

function closeButtonFilterCategories() {
    for(const filterCategoriesMquery of filterCategoriesMquerys) {
        if (filterCategoriesMquery.style.display === "block") {
            filterCategoriesMquery.style.display = "none";
        } 
    }
}

function loginMqueryMenu() {
    closeBagMenuNavButton2Mquerys.forEach(e => {
        e.style.display = "flex";
    });
    
    buttonLogoutMenuNavMquerys.forEach(e => {
        e.style.display = "block";
    });

    buttonsLoginRegisterMenuNavMquerys.forEach(e => {
        e.style.display = "none";
    });
}

function logoutMqueryMenu() {
    buttonsLoginRegisterMenuNavMquerys.forEach(e => {
        e.style.display = "flex";
    });

    closeBagMenuNavButton2Mquerys.forEach(e => {
        e.style.display = "none";
    });
    buttonLogoutMenuNavMquerys.forEach(e => {
        e.style.display = "none";
    });

    closeMenuNavBarMquery();
}

const products =  [
    {
        id: 1,
        name: "Lata 335 ml",
        price: 14.99,
        img: "./media/icons/content2-home/image 30.png",
        tickets: 280
    },
    {
        id: 2,
        name: "Tetra 200 ml",
        price: 14.99,
        img: "./media/icons/content2-home/image 32.png",
        tickets: 280
    },
    {
        id: 3,
        name: "Tetra 1L",
        price: 14.99,
        img: "./media/icons/content2-home/jumex-tomate.png",
        tickets: 280
    },
    {
        id: 4,
        name: "Pack 6 Latas",
        price: 14.99,
        img: "./media/icons/content2-home/Group 1261154720.png",
        tickets: 280
    },
    {
        id: 5,
        name: "Pack 24 Latas",
        price: 14.99,
        img: "./media/icons/content2-home/Group 1261154720.png",
        tickets: 280
    },
    {
        id: 6,
        name: "Pack 6 Tetra 200ml",
        price: 14.99,
        img: "./media/icons/content2-home/Group 1261154723.png",
        tickets: 280
    },
    {
        id: 7,
        name: "Pack 24 Tetra 200ml",
        price: 14.99,
        img: "./media/icons/content2-home/Group 1261154723.png",
        tickets: 280
    },
    {
        id: 8,
        name: "Pack 6 Tetra 1L",
        price: 14.99,
        img: "./media/icons/content2-home/Group 1261154725.png",
        tickets: 280
    },
    {
        id: 9,
        name: "Pack 24 Tetra 1L",
        price: 14.99,
        img: "./media/icons/content2-home/Group 1261154725.png",
        tickets: 280
    },
    {
        id: 10,
        name: "Combinado Jumex",
        price: 14.99,
        img: "./media/icons/content2-home/Group 1261154726.png",
        tickets: 280
    },
    {
        id: 11,
        name: "Maiz Dulce",
        price: 14.99,
        img: "./media/icons/content2-home/image 56.png",
        tickets: 280
    },
    {
        id: 12,
        name: "Salsa para pizza",
        price: 14.99,
        img: "./media/icons/content2-home/salsa pizza 5.png",
        tickets: 280
    },
    {
        id: 13,
        name: "zanahoria rallada",
        price: 14.99,
        img: "./media/icons/content2-home/salsa pizza 5.png",
        tickets: 280
    },
    {
        id: 14,
        name: "Pimiento",
        price: 14.99,
        img: "./media/icons/content2-home/salsa pizza 5.png",
        tickets: 280
    },
    {
        id: 15,
        name: "Carne",
        price: 14.99,
        img: "./media/icons/content2-home/salsa pizza 5.png",
        tickets: 280
    },
    {
        id: 16,
        name: "Pollo",
        price: 14.99,
        img: "./media/icons/content2-home/image 56.png",
        tickets: 280
    },
    {
        id: 17,
        name: "Huevos",
        price: 14.99,
        img: "./media/icons/content2-home/salsa pizza 5.png",
        tickets: 280
    },
    {
        id: 18,
        name: "Clamato",
        price: 14.99,
        img: "./media/icons/content2-home/salsa pizza 5.png",
        tickets: 280
    },
    {
        id: 19,
        name: "Power B",
        price: 14.99,
        img: "./media/icons/content2-home/salsa pizza 5.png",
        tickets: 280
    },
    {
        id: 20,
        name: "Alubias",
        price: 14.99,
        img: "./media/icons/content2-home/salsa pizza 5.png",
        tickets: 280
    },
    {
        id: 21,
        name: "Cerveza Charro",
        price: 14.99,
        img: "./media/icons/content3-home/WhatsApp_Image_2023-10-10_at_12.06 1.png",
        tickets: 280
    },
    {
        id: 22,
        name: "Big Potatos",
        price: 14.99,
        img: "./media/icons/content-categories/Image2.png",
        tickets: 280
    },
    {
        id: 23,
        name: "Chanise Cabbage",
        price: 14.99,
        img: "./media/icons/content-categories/Image3.png",
        tickets: 280
    },
    {
        id: 24,
        name: "Ladies Finger",
        price: 14.99,
        img: "./media/icons/content-categories/Image4.png",
        tickets: 280
    },
    {
        id: 25,
        name: "Eggplant",
        price: 14.99,
        img: "./media/icons/content-categories/Image5.png",
        tickets: 280
    },
    {
        id: 26,
        name: "Fresh Cauliflower",
        price: 14.99,
        img: "./media/icons/content-categories/Image6.png",
        tickets: 280
    },
    {
        id: 27,
        name: "Green Apple",
        price: 14.99,
        img: "./media/icons/content-categories/Image7.png",
        tickets: 280
    },
    {
        id: 28,
        name: "Green Capsicum",
        price: 14.99,
        img: "./media/icons/content-categories/Image8.png",
        tickets: 280
    },
    {
        id: 29,
        name: "Green Chili",
        price: 14.99,
        img: "./media/icons/content-categories/Image9.png",
        tickets: 280
    },
    {
        id: 30,
        name: "Green Cucumber",
        price: 14.99,
        img: "./media/icons/content-categories/Image10.png",
        tickets: 280
    },
    {
        id: 31,
        name: "Green Littuce",
        price: 14.99,
        img: "./media/icons/content-categories/Image11.png",
        tickets: 280
    },
    {
        id: 32,
        name: "Ladies Finger",
        price: 14.99,
        img: "./media/icons/content-categories/Image12.png",
        tickets: 280
    },
    {
        id: 33,
        name: "Red Capsicum",
        price: 14.99,
        img: "./media/icons/content-categories/Image13.png",
        tickets: 280
    },
    {
        id: 34,
        name: "Red Chili",
        price: 14.99,
        img: "./media/icons/content-categories/Image14.png",
        tickets: 280
    },
    {
        id: 35,
        name: "Red Tomato",
        price: 14.99,
        img: "./media/icons/content-categories/Image15.png",
        tickets: 280
    },
    {
        id: 36,
        name: "Fresh Mango",
        price: 14.99,
        img: "./media/icons/content-categories/Image16.png",
        tickets: 280
    },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let productJs = document.getElementsByClassName("product-js");
let productJsSectionProducts = document.getElementsByClassName("product-js-section-products");
let productJsSectionSearchResult = document.getElementsByClassName("product-js-section-search-result");
let productJsSectionProductDescription = document.getElementsByClassName("product-js-section-product-description");

const saveLocal = () => {
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    
}

//products home
let generateShopHome = () => {
    let productGroups = chunkArray(products, 5);

    Array.from(productJs).forEach((e, i) => {
        if (productGroups[i]) {
            e.innerHTML = productGroups[i].map((x) => {
                    let { id, name, img, price, tickets } = x;

                    return `
                            <div class="content2-container2">
                            <div>
                            <div class="stock-products-container">
                                <div class="stock-flavor-container">
                                    <div class="apple-stock">
                                    <p>Manzana</p>
                        
                                    <div class="stock-container">
                                        <button class="button-plus-stock-container">
                                        <svg class="svg-plus-stock-container" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 4H7M4 1V7V1Z" stroke="#1A1A1A" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                        
                                        <span>1</span>
                        
                                        <svg class="svg-minus-stock-container" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.33337 7.5H11.6667" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </button>
                        
                                        <img class="button-delete-stock-container" src="./media/icons/content2-home/Close.png" alt="delete">
                        
                                        <svg class="button-delete-stock-container-mquery" xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                        <g clip-path="url(#clip0_1003_8460)">
                                            <path d="M7.03628 13.5335C10.5618 13.5335 13.4202 10.6751 13.4202 7.14956C13.4202 3.62403 10.5618 0.765625 7.03628 0.765625C3.51075 0.765625 0.652344 3.62403 0.652344 7.14956C0.652344 10.6751 3.51075 13.5335 7.03628 13.5335Z" stroke="#E6E6E6" stroke-width="0.5" stroke-miterlimit="10"/>
                                            <path d="M9.35771 4.82812L4.71484 9.47099" stroke="#666666" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M9.35771 9.47099L4.71484 4.82812" stroke="#666666" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1003_8460">
                                            <rect width="13.9286" height="13.9286" fill="white" transform="translate(0.0717773 0.185547)"/>
                                            </clipPath>
                                        </defs>
                                        </svg>
                                    </div>
                                    </div>
                        
                                    <div class="stock">
                                    <p>Fresa & Banana</p>
                        
                                    <div class="stock-container">
                                        <button class="button-plus-stock-container">
                                        <svg class="svg-plus-stock-container" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 4H7M4 1V7V1Z" stroke="#1A1A1A" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                        
                                        <span>0</span>
                        
                                        <svg class="svg-minus-stock-container" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.33337 7.5H11.6667" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </button>
                        
                                        <img class="button-delete-stock-container" src="./media/icons/content2-home/Close.png" alt="delete">
                        
                                        <svg class="button-delete-stock-container-mquery" xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                        <g clip-path="url(#clip0_1003_8460)">
                                            <path d="M7.03628 13.5335C10.5618 13.5335 13.4202 10.6751 13.4202 7.14956C13.4202 3.62403 10.5618 0.765625 7.03628 0.765625C3.51075 0.765625 0.652344 3.62403 0.652344 7.14956C0.652344 10.6751 3.51075 13.5335 7.03628 13.5335Z" stroke="#E6E6E6" stroke-width="0.5" stroke-miterlimit="10"/>
                                            <path d="M9.35771 4.82812L4.71484 9.47099" stroke="#666666" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M9.35771 9.47099L4.71484 4.82812" stroke="#666666" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1003_8460">
                                            <rect width="13.9286" height="13.9286" fill="white" transform="translate(0.0717773 0.185547)"/>
                                            </clipPath>
                                        </defs>
                                        </svg>
                                    </div>
                                    </div>
                        
                                    <div class="stock">
                                    <p>Melocotón</p>
                        
                                    <div class="stock-container">
                                        <button class="button-plus-stock-container">
                                        <svg class="svg-plus-stock-container" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 4H7M4 1V7V1Z" stroke="#1A1A1A" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                        
                                        <span>0</span>
                        
                                        <svg class="svg-minus-stock-container" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.33337 7.5H11.6667" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </button>
                        
                                        <img class="button-delete-stock-container" src="./media/icons/content2-home/Close.png" alt="delete">
                        
                                        <svg class="button-delete-stock-container-mquery" xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                        <g clip-path="url(#clip0_1003_8460)">
                                            <path d="M7.03628 13.5335C10.5618 13.5335 13.4202 10.6751 13.4202 7.14956C13.4202 3.62403 10.5618 0.765625 7.03628 0.765625C3.51075 0.765625 0.652344 3.62403 0.652344 7.14956C0.652344 10.6751 3.51075 13.5335 7.03628 13.5335Z" stroke="#E6E6E6" stroke-width="0.5" stroke-miterlimit="10"/>
                                            <path d="M9.35771 4.82812L4.71484 9.47099" stroke="#666666" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M9.35771 9.47099L4.71484 4.82812" stroke="#666666" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1003_8460">
                                            <rect width="13.9286" height="13.9286" fill="white" transform="translate(0.0717773 0.185547)"/>
                                            </clipPath>
                                        </defs>
                                        </svg>
                                    </div>
                                    </div>
                        
                                    <div class="apple-stock">
                                    <p>Guayaba</p>
                        
                                    <div class="stock-container">
                                        <button class="button-plus-stock-container">
                                        <svg class="svg-plus-stock-container" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 4H7M4 1V7V1Z" stroke="#1A1A1A" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                        
                                        <span>2</span>
                        
                                        <svg class="svg-minus-stock-container" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.33337 7.5H11.6667" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </button>
                        
                                        <img class="button-delete-stock-container" src="./media/icons/content2-home/Close.png" alt="delete">
                        
                                        <svg class="button-delete-stock-container-mquery" xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                        <g clip-path="url(#clip0_1003_8460)">
                                            <path d="M7.03628 13.5335C10.5618 13.5335 13.4202 10.6751 13.4202 7.14956C13.4202 3.62403 10.5618 0.765625 7.03628 0.765625C3.51075 0.765625 0.652344 3.62403 0.652344 7.14956C0.652344 10.6751 3.51075 13.5335 7.03628 13.5335Z" stroke="#E6E6E6" stroke-width="0.5" stroke-miterlimit="10"/>
                                            <path d="M9.35771 4.82812L4.71484 9.47099" stroke="#666666" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M9.35771 9.47099L4.71484 4.82812" stroke="#666666" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1003_8460">
                                            <rect width="13.9286" height="13.9286" fill="white" transform="translate(0.0717773 0.185547)"/>
                                            </clipPath>
                                        </defs>
                                        </svg>
                                    </div>
                                    </div>
                        
                                    <div class="stock">
                                    <p>Pera</p>
                        
                                    <div class="stock-container">
                                        <button class="button-plus-stock-container">
                                        <svg class="svg-plus-stock-container" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 4H7M4 1V7V1Z" stroke="#1A1A1A" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                        
                                        <span>0</span>
                        
                                        <svg class="svg-minus-stock-container" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.33337 7.5H11.6667" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </button>
                        
                                        <img class="button-delete-stock-container" src="./media/icons/content2-home/Close.png" alt="delete">
                        
                                        <svg class="button-delete-stock-container-mquery" xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                        <g clip-path="url(#clip0_1003_8460)">
                                            <path d="M7.03628 13.5335C10.5618 13.5335 13.4202 10.6751 13.4202 7.14956C13.4202 3.62403 10.5618 0.765625 7.03628 0.765625C3.51075 0.765625 0.652344 3.62403 0.652344 7.14956C0.652344 10.6751 3.51075 13.5335 7.03628 13.5335Z" stroke="#E6E6E6" stroke-width="0.5" stroke-miterlimit="10"/>
                                            <path d="M9.35771 4.82812L4.71484 9.47099" stroke="#666666" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M9.35771 9.47099L4.71484 4.82812" stroke="#666666" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1003_8460">
                                            <rect width="13.9286" height="13.9286" fill="white" transform="translate(0.0717773 0.185547)"/>
                                            </clipPath>
                                        </defs>
                                        </svg>
                                    </div>
                                    </div>
                        
                                    <div class="stock">
                                    <p>Piña</p>
                        
                                    <div class="stock-container">
                                        <button class="button-plus-stock-container">
                                        <svg class="svg-plus-stock-container" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 4H7M4 1V7V1Z" stroke="#1A1A1A" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                        
                                        <span>0</span>
                        
                                        <svg class="svg-minus-stock-container" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            </svg>
                                        </button>
                        
                                        <img class="button-delete-stock-container" src="./media/icons/content2-home/Close.png" alt="delete">
                        
                                        <svg class="button-delete-stock-container-mquery" xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                        <g clip-path="url(#clip0_1003_8460)">
                                            <path d="M7.03628 13.5335C10.5618 13.5335 13.4202 10.6751 13.4202 7.14956C13.4202 3.62403 10.5618 0.765625 7.03628 0.765625C3.51075 0.765625 0.652344 3.62403 0.652344 7.14956C0.652344 10.6751 3.51075 13.5335 7.03628 13.5335Z" stroke="#E6E6E6" stroke-width="0.5" stroke-miterlimit="10"/>
                                            <path d="M9.35771 4.82812L4.71484 9.47099" stroke="#666666" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M9.35771 9.47099L4.71484 4.82812" stroke="#666666" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1003_8460">
                                            <rect width="13.9286" height="13.9286" fill="white" transform="translate(0.0717773 0.185547)"/>
                                            </clipPath>
                                        </defs>
                                        </svg>
                                    </div>
                                    </div>
                        
                                    <div class="stock">
                                    <p>Mango</p>
                        
                                    <div class="stock-container">
                                        <button class="button-plus-stock-container">
                                        <svg class="svg-plus-stock-container" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 4H7M4 1V7V1Z" stroke="#1A1A1A" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                        
                                        <span>0</span>
                        
                                        <svg class="svg-minus-stock-container" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.33337 7.5H11.6667" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </button>
                        
                                        <img class="button-delete-stock-container" src="./media/icons/content2-home/Close.png" alt="delete">
                        
                                        <svg class="button-delete-stock-container-mquery" xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                        <g clip-path="url(#clip0_1003_8460)">
                                            <path d="M7.03628 13.5335C10.5618 13.5335 13.4202 10.6751 13.4202 7.14956C13.4202 3.62403 10.5618 0.765625 7.03628 0.765625C3.51075 0.765625 0.652344 3.62403 0.652344 7.14956C0.652344 10.6751 3.51075 13.5335 7.03628 13.5335Z" stroke="#E6E6E6" stroke-width="0.5" stroke-miterlimit="10"/>
                                            <path d="M9.35771 4.82812L4.71484 9.47099" stroke="#666666" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M9.35771 9.47099L4.71484 4.82812" stroke="#666666" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1003_8460">
                                            <rect width="13.9286" height="13.9286" fill="white" transform="translate(0.0717773 0.185547)"/>
                                            </clipPath>
                                        </defs>
                                        </svg>
                                    </div>
                                    </div>
                                </div>
                        
                                <a href="product-description.html" onclick="showProductDescription(${id})" class="img1-produc7-container2" id="product-img-js">
                                    <img src="${img}">
                                </a>
                                </div>
                        
                                <div class="content-info-product-container2">
                                <a href="product-description.html" onclick="showProductDescription(${id})" class="container-info">
                                    <div class="title-product-container3 product-title-js">
                                    <h3>${name}</h3>
                                    <p>*Varios sabores en stock*</p>
                                    </div>
                        
                                    <div class="product-price-container2 product-price-js">
                                    <p>$${price}</p>
                                    </div>
                        
                                    <div class="img-ticket-product-container2 product-ticket-js">
                                    <p>Gana ${tickets}</p>
                                    <img src="./media/icons/content2-home/image 59.png" alt="ticket">
                                    </div>
                                </a>

                                <button onclick='increment(${id})' id="button-comprar" class="button-bag-product-container2 button-bag-product-container2-mquery">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M6.66667 8.83333H4.16667L2.5 18H17.5L15.8333 8.83333H13.3333M6.66667 8.83333V6.33333C6.66667 4.49239 8.15905 3 10 3V3C11.8409 3 13.3333 4.49238 13.3333 6.33333V8.83333M6.66667 8.83333H13.3333M6.66667 8.83333V11.3333M13.3333 8.83333V11.3333" stroke="#1A1A1A" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>

                                </div>
                            </div>
                        </div>
                    `;
                })
                .join("");
        }
    });
};

let generateShopProductsDescription = () => {
    let productGroups = chunkArray(products, 2);

    Array.from(productJsSectionProductDescription).forEach((e, i) => {
        if (productGroups[i]) {
            e.innerHTML = productGroups[i].map((x) => {
                    let { id, name, img, price } = x;

                    return `
                        <div class="content2-container2-product-description">
                        <div>
                            <div>
                                <a href="./product-description.html" onclick="showProductDescription(${id})" class="img1-product5-container2">
                                    <img src="${img}">
                                </a>
                            </div>

                            <div class="content-info-product-description">
                                <a href="./product-description.html" class="container-info">
                                    <div class="title-product1-container3">
                                        <h3>${name}</h3>
                                        <p>*Varios sabores en stock*</p>
                                    </div>

                                    <div class="product-price-container2">
                                        <p>$${price}</p>
                                    </div>

                                    <div class="img-ticket-product-description2">
                                        <p>Gana</p>

                                        <img src="./media/icons/content2-home/image 59.png" alt="ticket">
                                    </div>
                                </a>

                                <button onclick="increment(${id})"
                                    id="button-bag-product-container2-mquery"
                                    class="button-bag-product-description-container2">
                                    <img src="./media/icons/content2-home/black-Bag.png" alt="bag">
                                </button>
                            </div>
                        </div>
                    </div>
                    `;
                })
                .join("");
        }
    });
};

let generateShopProducts = () => {
    let productGroups = chunkArray(products.slice(20), 3);

    Array.from(productJsSectionProducts).forEach((e, i) => {
        if (productGroups[i]) {
            e.innerHTML = productGroups[i].map((x) => {
                    let { id, name, img, price } = x;

                    return `
                    <div class="product-container-categories">
                    <a href="./product-description.html" onclick="showProductDescription(${id})" class="img1-product-categories">
                        <img src="${img}">
                    </a>

                    <div class="description-product-categories-container">
                        <a href="./product-description.html" onclick="showProductDescription(${id})"
                            class="description-product-categories">
                            <h3>${name}</h3>

                            <span>$${price}</span>

                            <ul>
                                <img src="./media/icons/content-categories/Star 1.png" alt="">

                                <img src="./media/icons/content-categories/Star 1.png" alt="">

                                <img src="./media/icons/content-categories/Star 1.png" alt="">

                                <img src="./media/icons/content-categories/Star 1.png" alt="">

                                <img src="./media/icons/content-categories/Star 5.png" alt="">
                            </ul>
                        </a>

                        <div onclick="increment(${id})" class="img-bag-categories">
                            <img src="./media/icons/content-categories/Bag.png" alt="bag">
                        </div>
                    </div>
                </div>
                    `;
                })
                .join("");
        }
    });
};

let generateShopSearchResult = () => {
    let productGroups = chunkArray(products.slice(10), 4);

    Array.from(productJsSectionSearchResult).forEach((e, i) => {
        if (productGroups[i]) {
            e.innerHTML = productGroups[i].map((x) => {
                    let { id, name, img, price } = x;

                    return `
                    <div class="product-container-categories">
                    <a href="./product-description.html" onclick="showProductDescription(${id})" class="img1-product-categories">
                        <img src="${img}">
                    </a>

                    <div class="description-product-categories-container">
                        <a href="./product-description.html" onclick="showProductDescription(${id})"
                            class="description-product-categories">
                            <h3>${name}</h3>

                            <span>$${price}</span>

                            <ul>
                                <img src="./media/icons/content-categories/Star 1.png" alt="">

                                <img src="./media/icons/content-categories/Star 1.png" alt="">

                                <img src="./media/icons/content-categories/Star 1.png" alt="">

                                <img src="./media/icons/content-categories/Star 1.png" alt="">

                                <img src="./media/icons/content-categories/Star 5.png" alt="">
                            </ul>
                        </a>

                        <div onclick="increment(${id})" class="img-bag-categories">
                            <img src="./media/icons/content-categories/Bag.png" alt="bag">
                        </div>
                    </div>
                </div>
                    `;
                })
                .join("");
        }
    });
};

function chunkArray(array, size) {
    let result = [];
    for (let i = 0; i < array.length; i += size) {
        let chunk = array.slice(i, i + size);
        result.push(chunk);
    }
    return result;
}
generateShopHome();
generateShopProductsDescription();
generateShopProducts();
generateShopSearchResult();

//products description
let showProductDescription = (id) => {
    const product = products.find(p => p.id === parseInt(id));
    let { img, price, name, tickets } = product;

    if (product) {
    const productDetails = document.getElementById("product-details");
    productDetails.innerHTML = `
                            <div>
                                <div class="choose-flavors">
                                    <h3>Elige tus sabores</h3>
                                </div>
                                
                                <div class="border-product-description"></div>

                                <a href="./product-description.html">
                                <label class="apple-product-description">
                                                <input type="radio" name="flavor" value="manzana" style="display: none;">
                                                <span>Manzana</span>
                                            </label>
                                            </a>

                                            <a href="./product-description.html">
                                                <label for="fresa_banana">
                                                    <input type="radio" name="flavor" value="fresa_banana" style="display: none;">
                                                    <p>Fresa & Banana</p>
                                                </label>
                                            </a>

                                            <a href="./product-description.html">
                                                <label for="melocoton">
                                                    <input type="radio" name="flavor" value="melocoton" style="display: none;">
                                                    <p>Melocotón</p>
                                                </label>
                                            </a>

                                            <a href="./product-description.html">
                                                <label for="guayaba">
                                                    <input type="radio" name="flavor" value="guayaba" style="display: none;">
                                                    <p>Guayaba</p>
                                                </label>
                                            </a>

                                            <a href="./product-description.html">
                                                <label for="pera">
                                                    <input type="radio" name="flavor" value="pera" style="display: none;">
                                                    <p>Pera</p>
                                                </label>
                                            </a>
                                            
                                            <a href="./product-description.html">
                                                <label for="pina">  
                                                    <input type="radio" name="flavor" value="pina" style="display: none;">
                                                    <p>Piña</p>
                                                </label>
                                            </a>

                                            <a href="./product-description.html">
                                                <label for="mango">
                                                    <input type="radio" name="flavor" value="mango" style="display: none;">
                                                    <p>Mango</p>
                                                </label>
                                            </a>

                                            <div class="border-product-description"></div>
                                        </div>

                                        <div class="img-productproduct-description">
                                            <img src="${img}" alt="product">
                                        </div>
                                    </div>

                                    <div class="content2-product-description-container">
                                        <div class="container-info-product-description">
                                            <div onclick="buttonBackPanelControl()"
                                                class="button-back-product-descriptio-container">
                                                <a href="./index.html" id="button-back-product-description">
                                                    <svg width="7" height="11" viewBox="0 0 7 11" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <g id="Group">
                                                            <path id="Vector" d="M5.6875 9.875L1.3125 5.5L5.6875 1.125"
                                                                stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"
                                                                stroke-linejoin="round"></path>
                                                        </g>
                                                    </svg>
                                                </a>

                                                <p>Volver</p>
                                            </div>

                                            <div class="title-product-description">
                                                <h3>${name}</h3>

                                                <span>En Stock</span>
                                            </div>

                                            <span class="ticket-price-product-description-mquery">
                                                <div class="img-ticket-product-description">
                                                    <p>Gana ${tickets}</p>

                                                    <img src="./media/icons/content2-home/image 59.png" alt="ticket">
                                                </div>

                                                <div class="price-product-description">
                                                    <p>$${price}</p>
                                                </div>
                                            </span>

                                            <div class="border-title-product-description"></div>

                                            <div class="content1-product-description-container-mquery">
                                                <div>
                                                    <div class="choose-flavors">
                                                        <h3>Elige tus sabores</h3>
                                                    </div>

                                                    <div class="border-product-description"></div>

                                                    <div class="apple-product-description">
                                                        <span>Manzana</span>
                                                    </div>

                                                    <p class="choose-type-of-product-description margin1-choose-type-of-product">
                                                        Fresa & Banana</p>

                                                    <p class="choose-type-of-product-description">Melocotón</p>

                                                    <p class="choose-type-of-product-description margin1-choose-type-of-product">
                                                        Guayaba</p>

                                                    <p class="choose-type-of-product-description">Pera</p>

                                                    <p class="choose-type-of-product-description margin1-choose-type-of-product">
                                                        Piña</p>

                                                    <p class="choose-type-of-product-description">Mango</p>

                                                    <div class="border-product-description"></div>
                                                </div>

                                                <div class="img-productproduct-description">
                                                    <img src="./media/icons/content-products-description/image 30.png"
                                                        alt="product">
                                                </div>
                                            </div>

                                            <div class="share-item-product-description">
                                                <span class="share-category-product-description">
                                                    <h3>Share item:</h3>

                                                    <div class="share-item-social-media">
                                                        <div class="facebook-product-description">
                                                            <img src="./media/icons/footer/facebook 1.png" alt="facebook">
                                                        </div>

                                                        <div class="instagram-product-description">
                                                            <img src="./media/icons/footer/instagram 1.png" alt="instagram">
                                                        </div>
                                                    </div>
                                                </span>

                                                <div class="category-products-description-mquery">
                                                    <p>Categoría</p>

                                                    <span>Bebidas</span>
                                                </div>
                                            </div>

                                            <div class="text-description-product-description">
                                                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra,<br
                                                        class="br2-product-description2"> per inceptos<br
                                                        class="br1-product-description2"> himenaeos. Nulla nibh diam, blandit vel
                                                    consequat<br class="br2-product-description2"> nec, ultrices et ipsum. Nulla<br
                                                        class="br1-product-description2"> varius magna a consequat pulvinar. </p>
                                            </div>

                                            <div class="number-product-description">
                                                <div id="plus-minus-container1" class="plus-minus-container">
                                                    <div id="plus-minus-background1" onclick="minusFunction()" class="plus-minus-background">
                                                        <img src="./media/icons/content-shopping-cart/Minus.png" alt="minus">
                                                    </div>

                                                    <span id="count">0</span>

                                                    <div id="plus-minus-background2" onclick="plusFunction()" class="plus-minus-background">
                                                        <img src="./media/icons/content-shopping-cart/plus 1.png" alt="plus">
                                                    </div>
                                                </div>

                                    <a class="buy-button">
                                        <p>Añadir a Carrito</p>

                                        <img src="./media/icons/content-products-description/Rectangle.png" alt="bag">
                                    </a>
                                </div>

                                <div class="category-products-description">
                                    <p>Categoría</p>

                                    <span>Bebidas</span>
                                </div>
                            </div>
    `;

    }
    localStorage.setItem('selectedProductId', id);
}

function minusFunction() {
    let count1 = document.getElementById('count');
    let currentCount = parseInt(count1.innerText);
    if (currentCount > 0) {
        count1.innerText = currentCount - 1;
    }
};

function plusFunction() {
    let count1 = document.getElementById('count');
    let currentCount = parseInt(count1.innerText);
    count1.innerText = currentCount + 1;
};

//cart
let generateCartItems = () => {
    let boxContentShoppingContainer1 = document.getElementById('box-content-shopping-container1');
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cart);
    if (boxContentShoppingContainer1 && cart.length !== 0) {
        boxContentShoppingContainer1.innerHTML = cart.map((x) => {
                let { id, item } = x;
                let search = products.find((x) => x.id === id) || [];
                let { img, price, name } = search;
                return `
                    <div>
                    <div class="content-product-cart-container content-product-cart-container2">
                        <div class="product-cart-container">
                            <img src="${img}">
                            <p>${name}</p>
                        </div>
                        <p class="price-product-shopping-cart">$${price}</p>

                        <div class="plus-minus-container">
                            <div onclick="decrement(${id})" class="plus-minus-background">
                                <img src="./media/icons/content-shopping-cart/Minus.png" alt="minus">
                            </div>
                            
                            <span>${item}</span>
                            
                            <div onclick="increment(${id})" class="plus-minus-background">
                                <img src="./media/icons/content-shopping-cart/plus 1.png" alt="plus">
                            </div>
                        </div>

                        <span class="subtotal-price">$${(item * price).toFixed(2)}</span>

                        <span onclick="removeItem(${id})">
                            <img src="./media/icons/content-shopping-cart/Close.png" alt="close" class="img-close-shopping-cart">
                        </span>
                    </div>
                    </div>
                `;
            })
            .join("");
        
            if(boxContentShoppingContainer1) {
                boxContentShoppingContainer1.style.height = "auto";
            }
    } else if (boxContentShoppingContainer1) {
        boxContentShoppingContainer1.innerHTML = "";

        if(boxContentShoppingContainer1) {
            boxContentShoppingContainer1.style.height = "5.729167vw";
        }
    }
};
generateCartItems();

let increment = (id) => {
    console.log(id);
    console.log(cart);
    let selectedItem = products.find((product) => product.id === id);
    let search = cart.find((item) => item === id);

    if (search === undefined) {
        cart.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        search.item += 1;
    }

    generateCartItems();
    update(selectedItem.id);
    saveLocal();
};

let decrement = (id) => {
    let selectedItem = products.find((product) => product.id === id);
    let search = cart.find((item) => item.id === id);

    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    }

    update(selectedItem.id);
    cart = cart.filter((x) => x.item !== 0);
    generateCartItems();
    calculation();
    saveLocal();
};

let update = (id) => {
    let search = cart.find((x) => x.id === id);
    let element = document.getElementById(id);
    if (element) {
        element.innerHTML = search.item;
    }
    calculation();
    TotalAmountCart();
    TotalAmount();
};

let calculation = () => {
    let cartIcon = document.getElementById("counter-item-number");
    let cartIcon2 = document.getElementById("counter-item-number1");

    cartIcon.innerHTML = cart.map((x) => x.item).reduce((x, y) => x + y, 0);
    cartIcon2.innerHTML = cart.map((x) => x.item).reduce((x, y) => x + y, 0);

    if (cart.length !== 0) {
        cartIcon.style.backgroundColor = "green";
        cartIcon2.style.backgroundColor = "green";
    } else {
        cartIcon.style.backgroundColor = "red";
        cartIcon2.style.backgroundColor = "red";
    }
};

window.onload = function() {
    TotalAmountCart();
    calculation();
    const selectedProductId = JSON.parse(localStorage.getItem("selectedProductId"));
    if (selectedProductId) {
        showProductDescription(selectedProductId);
    }
};

let removeItem = (id) => {
    let selectedItem = products.find((product) => product.id === id);
    cart = cart.filter((x) => x.id !== selectedItem.id);

    calculation();
    generateCartItems();
    TotalAmountCart();
    TotalAmount();
    saveLocal();
};

let TotalAmount = () => {
    let totalCartJs = document.getElementById('total-cart-js');
    if (totalCartJs) {
        let amount = cart.map((x) => {
            let { id, item, } = x;
            let filterData = products.find((x) => x.id === id);
            return filterData.price * item;
        }).reduce((x, y) => x + y, 0);

        let tickets = cart.reduce((total, item) => {
            let { id, item: quantity } = item;
            let product = products.find((product) => product.id === id);
            return total + (product.tickets * quantity);
        }, 0);

        totalCartJs.innerHTML = `
            <div class="subtotal-payment-container">
                <p>Subtotal:</p>
                <span>$${(amount).toFixed(2)}</span>
            </div>
            
            <div class="tickets-obtained-container">
                <p>Tickets Obtenidos</p>
                <span>${tickets}</span>
            </div>

            <div class="free-shipping">
                <p>Envío:</p>
                <span>Free</span>
            </div>

            <div class="total-payment-container">
                <p>Total:</p>
                <span>$${(amount).toFixed(2)}</span>
            </div>
        `;
    }
};
TotalAmount();

let TotalAmountCart = () => {
    let shoppingInfos = document.getElementsByClassName('shopping-info');
    for( let shoppingInfo of shoppingInfos) {
        if (shoppingInfo) {
            let amount = cart.map((x) => {
                let { id, item, } = x;
                let filterData = products.find((x) => x.id === id);
                return filterData.price * item;
            }).reduce((x, y) => x + y, 0);

            shoppingInfo.innerHTML = `
            <p>Carrito de Compra:</p>
            <span>$${(amount).toFixed(2)}</span>
            `;
        }
    }
};

const stockFlavorContainers = document.querySelectorAll('.stock-flavor-container');
const buttonBagProductContainer2 = document.querySelector(".button-bag-product-container2");
const content2Container2 = document.querySelectorAll(".content2-container2");

function showStockFlavorContainer(productContainer, flavorContainer) {
    if (flavorContainer) {
        flavorContainer.style.display = 'block';
    }

    const parentContainer = productContainer.closest('.content2-container2');
    if (parentContainer) { 
        parentContainer.style.borderColor = '#2C742F';
    }

    const hoveredButton = parentContainer.querySelector('.button-bag-product-container2');
    if (hoveredButton) {
    hoveredButton.style.backgroundColor = '#057A10';
    }

    const hoveredButtonBag = parentContainer.querySelectorAll('.button-bag-product-container2 svg');
    if (hoveredButtonBag) {
        for (const path of hoveredButtonBag) {
        path.setAttribute("fill", "#FFFFFF");
        }
    }
}

function hideStockFlavorContainer(productContainer, flavorContainer) {
    if (flavorContainer) { 
        flavorContainer.style.display = 'none';

        const parentContainer = productContainer.closest('.content2-container2');
        parentContainer.style.borderColor = '';

        const hoveredButton = parentContainer.querySelector('.button-bag-product-container2');
        if (hoveredButton) {
        hoveredButton.style.backgroundColor = '#F2F2F2';
        }
    }
}

content2Container2.forEach((productContainer, index) => {
    const correspondingFlavorContainer = stockFlavorContainers[index];

    productContainer.addEventListener('mouseover', () => showStockFlavorContainer(productContainer, correspondingFlavorContainer));
    
    productContainer.addEventListener('mouseout', () => hideStockFlavorContainer(productContainer, correspondingFlavorContainer)); 

    if (window.matchMedia("(max-width: 479px)").matches) {
        productContainer.addEventListener('touchstart', () => showStockFlavorContainer(productContainer, correspondingFlavorContainer));
    
        productContainer.addEventListener('touchend', () => hideStockFlavorContainer(productContainer, correspondingFlavorContainer));
    }  
});

const productContainerCategories = document.querySelectorAll('.product-container-categories');

function showHoverProductsSections(productContainer) {
    productContainer.style.borderColor = '#2C742F';
    productContainer.style.boxShadow = '0px 0px 12px 0px #2C742F';
}

function hideHoverProductsSections(productContainer) {
    productContainer.style.borderColor = '';
    productContainer.style.boxShadow = '';
}

productContainerCategories.forEach((productContainer) => {

    productContainer.addEventListener('mouseover', () => showHoverProductsSections(productContainer));
    
    productContainer.addEventListener('mouseout', () => hideHoverProductsSections(productContainer)); 

    if (window.matchMedia("(max-width: 479px)").matches) {
        productContainer.addEventListener('touchstart', () => showHoverProductsSections(productContainer));
    
        productContainer.addEventListener('touchend', () => hideHoverProductsSections(productContainer));
    }  
});

const rouletteContent23 = document.querySelector('.roulette-content2-3');

function girarRuleta() {

    let number = Math.ceil(Math.random() * 1000);

    rouletteContent23.style.transform = "rotate(" + number + "deg)";
    number = Math.ceil(Math.random() * 100000);
}
