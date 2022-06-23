
class Buch {
    Farbe
    Titel
    Autor
    Preis
    Anzahl
    constructor(Farbe, Titel,Autor, Preis, Anzahl){
        this.Farbe = Farbe
        this.Titel = Titel
        this.Autor = Autor
        this.Preis = Preis
        this.Anzahl = Anzahl
    }
    vorhanden(){
        if(this.Anzahl > 0){
            console.log("Das Buch ist noch vorhanden")
        }
    }
    verkauft(){
        this.Anzahl -= 1;
    }
}

let lager = []

function init() {
    let buch = new Buch("Grün", "Der Schimmelreiter", "Theodor Sturm", "2,99€", 7)
    lager.push(buch)
    buch = new Buch("Rot", "Maria Stuart", "Friedrich Schiller", "2,99€",10)
    lager.push(buch)
    buch = new Buch("Gelb", "Nathan der Weise", "Gotthold Ephraim Lessing", "3,99€",6)
    lager.push(buch)
    buch = new Buch("Schwarz", "Der Dunkle Turm", "Stephen King", "10,99€",3)
    lager.push(buch)
}

function lagerListe() {
    for (let i = 0; i < lager.length; i++) {
        console.log (lager[i])
    }
}

function sortieren(){
    lager.sort(vergleich)
}
function vergleich(buch1,buch2){
    if(buch1.Autor < buch2.Autor){
        return -1;
    }
    if(buch1.Autor > buch2.Autor){
        return 1;
    }
    return 0
}

function titelSuchen(titel){
    for (let i = 0; i < lager.length; i++){
        if(lager.contains("Der Schimmelreiter")){}
        console.log(this.Anzahl)
    }
}