var imiona = ['Ania', 'Krzysiek', 'Damian', 'Dawid', 'Patrycja'];
var wyniki = [];

imiona.forEach(function (Imie) {
    wyniki.push(Imie + ' Kowalski')
});
dane = wyniki.map(function (imieNazwisko) {
    return imieNazwisko + ' ma fajne oczy!';
});

var dodajOczy = dane;
dodajOczy.forEach(function (zOczami) {
    return wyswietl(zOczami);
});
function wyswietl(twojWynik) {
    var container = document.getElementById("wyniki"),
        newItem = document.createElement("div");

    newItem.innerHTML = twojWynik;
    container.appendChild(newItem);
}