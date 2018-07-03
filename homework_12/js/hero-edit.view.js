function showHeroEditView (event) {
    event.preventDefault();

    clearRegions();

    var editHeroRegion = document.getElementById('editHeroForm-region'),
        editHeroFormTemplate = ''
            +'<div class="form-container">'
            +'<form>'
            +'<h1>Edytuj Herosa</h1>'
            +'<div class="form-group">'
            +'<select name="hero" id="selectHero">'
            +'<option>--- WYBIERZ ---</option>'
            + editOptions(heroesList) +
            +'</select>'
            +'<label class="control-label" for="select">Wybierz istniejącego Heroesa</label><i class="bar"></i>'
            +'</div>'
            +'<input type="hidden" name="name"/>'
            +'<div class="form-group">'
            +'<input type="text" name="photo" />'
            +'<label class="control-label" id="editPhoto" for="photo">Adres/nazwa zdjęcia</label><i class="bar"></i>'
            +'</div>'
            +'<div class="form-group">'
            +'<input type="text" name="price" />'
            +'<label class="control-label" id="editPrice" for="price">Cena wynajmu /h</label><i class="bar"></i>'
            +'</div>'
            +'<div class="form-group">'
            +'<textarea></textarea>'
            +'<label class="control-label" id="editDesc" for="textarea">Textarea</label><i class="bar"></i>'
            +'</div>'
            +'</form>'
            +'<div class="button-container">'
            +'<button class="button" id="editHero-submit" type="button"><span>Edytuj</span></button>'
            +'</div>'
            +'</div>',
        HTMLelement = document.createElement('div');

    HTMLelement.innerHTML = editHeroFormTemplate;
    editHeroRegion.appendChild(HTMLelement);

    var editButton =  document.getElementById('editHero-submit');

    editButton.addEventListener('click', function () {
        var heroName = document.getElementById('selectHero').value;
        var heroPhoto = document.getElementById('editPhoto').value;
        var heroPrice = document.getElementById('editPrice').value;
        var heroDesc = document.getElementById('editDesc').value;

    })
}

function editOptions(heroesList){
    var editHeroOptions = '';
    heroesList.forEach(function (heroesList){
        var selectOptions = '<option>' +heroesList.name+ '</option>';
        editHeroOptions += selectOptions;
    });
    return editHeroOptions;
}
