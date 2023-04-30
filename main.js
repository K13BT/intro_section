
// Dropdown Menu
const featuresBtn = document.querySelector('.featuresBtn');
const companyBtn = document.querySelector('.companyBtn');

let showFeatures = false;
let showCompany = false;

const showDropdown = (element, showElement) => {
    const dropdown = element.nextElementSibling;
    const arrowDown = element.firstElementChild;
    const arrowUp = element.lastElementChild;

    if(showElement) {
        dropdown.classList.add('display');
        arrowUp.classList.add('display');
        arrowDown.classList.remove('display');
    } else {
        dropdown.classList.remove('display');
        arrowUp.classList.remove('display');
        arrowDown.classList.add('display');
        showElement = true;
    };
};

// Features button
const setShowFeatures = features => {
    showDropdown(features, showFeatures);
    showFeatures = !showFeatures;
};

// Company button
const setShowCompany = company => {
    showDropdown(company, showCompany);
    showCompany = !showCompany;
};


// Sidebar Menu
const featuresBtnMb = document.querySelector('.featuresBtn_mobile');
const companyBtnMb = document.querySelector('.companyBtn_mobile');
const menuBtn = document.querySelector('.menu_btn');

let showMenu = false;
let showFeaturesMb = false;
let showCompanyMb = false;

const setShowMenu = () => {
    const hamMenu = menuBtn.firstElementChild;
    const closeMenu = menuBtn.lastElementChild;
    const menuMobile = document.querySelector('.menu_mobile');
    const overlay = document.querySelector('.overlay');

    if (showMenu) {
        menuMobile.classList.add('display');
        closeMenu.classList.add('display');
        hamMenu.classList.remove('display');
        overlay.classList.add('display');
    } else {
        menuMobile.classList.remove('display');
        closeMenu.classList.remove('display');
        hamMenu.classList.add('display');
        overlay.classList.remove('display');
    };

    showMenu = !showMenu;
};

const setShowFeaturesMb = features => {
    showDropdown(features, showFeaturesMb);
    showFeaturesMb = !showFeaturesMb;
};

const setShowCompanyMb = company => {
    showDropdown(company, showCompanyMb);
    showCompanyMb = !showCompanyMb;
};

// Event listener
featuresBtn.addEventListener('click', e => setShowFeatures(e.currentTarget));

companyBtn.addEventListener('click', e => setShowCompany(e.currentTarget));

menuBtn.addEventListener('click', setShowMenu);

featuresBtnMb.addEventListener('click', e => setShowFeaturesMb(e.currentTarget));

companyBtnMb.addEventListener('click', e => setShowCompanyMb(e.currentTarget));