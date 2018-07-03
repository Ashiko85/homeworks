function attachMenuListeners () {
    var addHeroButton = document.getElementById('addHero-button'),
        editHeroButton = document.getElementById('editHero-button'),
        loadMockHeroesButton = document.getElementById('loadMockHeroes-button'),
        clearHeroesListButton = document.getElementById('clearHeroesList-button'),
        removeHeroButton = document.getElementById('removeHero-button');

    addHeroButton.addEventListener('click', showHeroCreateView);
    editHeroButton.addEventListener('click', showHeroEditView);
    loadMockHeroesButton.addEventListener('click', loadMockHeroes);
    clearHeroesListButton.addEventListener('click', clearHeroesList);
    removeHeroButton.addEventListener('click',showHeroRemoveView);
}
