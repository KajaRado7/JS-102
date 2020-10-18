let poruka;

function kalkOcjena(bodovi){
    if(bodovi<50){ poruka="Dobili ste negativnu ocjenu!!!"; return 1;}
    if(bodovi>=50 && bodovi<62.9){ poruka="Dobili ste ocjenu DOVOLJAN!"; return 2;}
    if(bodovi>=63 && bodovi<75.9){ poruka="Dobili ste ocjenu DOBAR!"; return 3;}
    if(bodovi>=76 && bodovi<88.9){ poruka="Dobili ste ocjenu VRLO DOBAR!"; return 4;}
    if(bodovi>=89 && bodovi<100){ poruka="Dobili ste ocjenu ODLIČAN! Čestitke! :)"; return 5;}
}

let bodovi =prompt ("Unesi broj bodova: ")
let ocjena =kalkOcjena(bodovi);

console.log(poruka);
