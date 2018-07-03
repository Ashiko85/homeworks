var heroesList = [];

function prepareCreateHeroData (heroForm) {
    return {
        name: heroForm.name.value,
        price: heroForm.price.value,
        img: heroForm.photo.value,
        desc: 'desc'
    };
}

function addHero (hero) {
    heroesList.push(hero);
    
    saveToLocalStorage();
}

function removeHero(heroName) {
    var newHeroesList = [];

    heroesList.forEach(function (hero) {
        if (heroName !== hero.name) {
            newHeroesList.push(hero);
        }
    });

    heroesList = newHeroesList;

    saveToLocalStorage();
    clearRegions();
    showHeroListView();
}

function loadMockHeroes () {
    var mockHeroesList = [
        {
            name: "Thor",
            price: 5000,
            img: 'thor.jpg',
            desc: 'lorem ipsum.....'
        },
        {
            name: "Superman",
            price: 7000,
            img: 'superman.jpg',
            desc: 'lorem ipsum.....'
        },
        {
            name: "Batman",
            price: 3000,
            img: 'batman.jpg',
            desc: 'lorem ipsum.....'
        },
        {
            name: "Hulk",
            price: 4000,
            img: 'hulk.jpg',
            desc: 'lorem ipsum.....'
        },
        {
            name: "Ironman",
            price: 9000,
            img: 'ironman.jpg',
            desc: 'lorem ipsum.....'
        },
        {
            name: "Harry Potter",
            price: 6000,
            img: 'potter.jpg',
            desc: 'lorem ipsum.....'
        }
    ];

    heroesList = heroesList.concat(mockHeroesList);
    saveToLocalStorage();
    clearRegions();
    showHeroListView();
}

function clearHeroesList () {
    heroesList = [];
    saveToLocalStorage();
    clearRegions();
    showHeroListView();
}
// local storage functions
function saveToLocalStorage () {
    var listToObject = { data: heroesList },
        heroesString = JSON.stringify(listToObject);

    localStorage.setItem('heroesList', heroesString)
}

function loadFromLocalStorage () {
    var localStorageData = localStorage.getItem('heroesList'),
        parsedLocalStorageData;

    if (!localStorageData) {
        parsedLocalStorageData = {data: []}
    } else {
        parsedLocalStorageData = JSON.parse(localStorageData);
    }

    heroesList = parsedLocalStorageData.data;
}
