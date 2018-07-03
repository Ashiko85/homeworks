function czyMamWKoszykuOwoc(owoc) {
        if(!owoc) return "Musisz podać owoc";

            var wartosc = Math.floor((Math.random()*10)+1);

            switch(owoc) {
                case "Banana":
                       if (wartosc === 1) {
                           return "Tak, masz w koszyku 1 Banana";
                                break;
                            }
                            if (wartosc > 1 && wartosc < 5) {
                                    return "Tak, masz w koszyku " + wartosc + " Banany";
                                break;
                            }
                            if (wartosc > 5) {
                        return "Tak, masz w koszyku " + wartosc + " Bananów";
                        break;
                    }

                    case "Jabłko":
                        if (wartosc === 1) {
                            return "Tak, masz w koszyku 1 Jabłko";
                                break;
                            }
                            if (wartosc > 1 && wartosc < 5) {
                                return "Tak, masz w koszyku " + wartosc + " Jabłka";
                                break;
                            }
                            if (wartosc > 5) {
                                return "Tak, masz w koszyku " + wartosc + " Jabłek";
                                break;
                            }

                        case "Mandarynkę":
                        if (wartosc === 1) {
                            return "Tak, masz w koszyku 1 Mandarynkę";
                                break;
                                }

                            if (wartosc > 1 && wartosc < 5) {
                                return "Tak, masz w koszyku " + wartosc + " Mandarynki";
                                break;
                                }

                            if (wartosc > 5) {
                                return "Tak, masz w koszyku " + wartosc + " Mandarynek";
                                break;
                            }

                       case "Melona":
                        if (wartosc === 1) {
                            return  "Tak, masz w koszyku 1 Melona";
                               break;
                           }
                           if (wartosc > 1 && wartosc < 5) {
                                return  "Tak, masz w koszyku " + wartosc + " Melony";
                                break;
                           }

                           if (wartosc > 5) {
                               return "Tak, masz w koszyku " + wartosc + " Melonów";
                               break;
                           }

                        default:
                        return czyMamWKoszykuWarzywo(warzywo);
                }
    }
function czyMamWKoszykuWarzywo(warzywo) {

    switch(warzywo) {
        case "Ziemniaka":
        case "Marchewkę":
        case "Kartofle":
        case "Buraka":
        case "Kalafiora":
        case "Kapustę":
        case "Cukinię":
        case "Ogórka":
        case "Grzyby shitake":
            return  "Podałeś warzywo a w koszyku masz tylko owoce!";
            break;
        default:
            return  "Nie masz tego w koszyku";
    }
}