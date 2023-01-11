// Déclaration de l'automate
let automate = new Object();

// Page d'acceui
// document.getElementById("autmate-btn-check").addEventListener("click", function() {

// })
document.getElementById("btn-start").addEventListener("click", function() {
    document.querySelector(".background").style.display = "flex";
    document.querySelector(".first-step").style.display = "flex";
})


// Page AUTOMATE
document.getElementById("automate-btn-cancel").addEventListener("click", function() {
    document.querySelector(".first-step").style.display = "none";
    document.querySelector(".background").style.display = "none";
})
document.getElementById("automate-btn-next").addEventListener("click", function() {
    // Recupère le type d'automate
    var type = document.getElementsByName("typeAutomate");
    for (var i = 0; i < type.length; i++) {
        if (type[i].checked) {
            automate.type = type[i].value;
        }
    }

    document.querySelector(".first-step").style.display = "none";
    document.querySelector(".step-alphabet").style.display = "flex";
})


// Page ALPHABET
document.getElementById("alphabet-btn-cancel").addEventListener("click", function() {
    document.querySelector(".step-alphabet").style.display = "none";
    document.querySelector(".first-step").style.display = "flex";

    automate.symboles = null;
})
document.getElementById("alphabet-btn-check").addEventListener("click", function() {
    deleteInitialStates();
    deleteFinalStates();
    deleteTable();
    cancelCreation();

    document.querySelector(".step-alphabet").style.display = "none"
    document.querySelector(".background").style.display = "none";
})
document.getElementById("alphabet-btn-next").addEventListener("click", function() {
    var nbrSymb = document.getElementById("inputNbrSymbols").value;
    var symbols = document.getElementById("inputSymbols").value;

    automate.nbrSymboles = nbrSymb;
    automate.symboles = toTableType(symbols);

    document.querySelector(".step-alphabet").style.display = "none";
    document.querySelector(".step-transitions").style.display = "flex";
})


// Page ETATS
document.getElementById("transitions-btn-prev").addEventListener("click", function() {
    document.querySelector(".step-transitions").style.display = "none";
    document.querySelector(".step-alphabet").style.display = "flex";

    automate.etats = null;
})
document.getElementById("transitions-btn-check").addEventListener("click", function() {
    deleteInitialStates();
    deleteFinalStates();
    deleteTable();
    cancelCreation();

    document.querySelector(".step-transitions").style.display = "none"
    document.querySelector(".background").style.display = "none";
})
document.getElementById("transitions-btn-next").addEventListener("click", function() {
    var nbrTrans = document.getElementById("inputNbrTransitions").value;
    var transit = document.getElementById("inputTransitions").value;

    automate.nbrEtats = nbrTrans;
    automate.etats = toTableType(transit);

    document.querySelector(".step-transitions").style.display = "none";
    if (automate.type == 'AFD') {
        document.querySelector(".step-initialStateAFD").style.display = "flex";
    } else if (automate.type == 'AFN') {
        document.querySelector(".step-initialStatesAFN").style.display = "flex";
    } else if (automate.type == 'e-AFN') {
        document.querySelector(".step-initialStatese-AFN").style.display = "flex";
    }

    console.log(automate.nbrEtats);
    printInitialStates();
})


// Page ETAT INITIAL

// AFD
document.getElementById("initialStateAFD-btn-prev").addEventListener("click", function() {
    document.querySelector(".step-initialStateAFD").style.display = "none";
    document.querySelector(".step-transitions").style.display = "flex";

    deleteInitialStates();
    automate.etatInitiaux = null;
})
document.getElementById("initialStateAFD-btn-check").addEventListener("click", function() {
    deleteInitialStates();
    deleteFinalStates();
    deleteTable();
    cancelCreation();

    document.querySelector(".step-initialStateAFD").style.display = "none"
    document.querySelector(".background").style.display = "none";
})
document.getElementById("initialStateAFD-btn-next").addEventListener("click", function() {
    var initState = document.getElementsByName("options-selectInitialState");
    for (var i = 0; i < initState.length; i++) {
        if (initState[i].checked) {
            var automa = initState[i].value;
        }
    }
    automate.etatInitiaux = automa;
    document.querySelector(".step-initialStateAFD").style.display = "none";
    document.querySelector(".step-finalStates").style.display = "flex";

    printFinalStates();
})

// AFN
document.getElementById("initialStatesAFN-btn-prev").addEventListener("click", function() {
    document.querySelector(".step-initialStatesAFN").style.display = "none";
    document.querySelector(".step-transitions").style.display = "flex";

    deleteInitialStates();
    automate.etatInitiaux = null;
})
document.getElementById("initialStatesAFN-btn-check").addEventListener("click", function() {
    deleteInitialStates();
    deleteFinalStates();
    deleteTable();
    cancelCreation();

    document.querySelector(".step-initialStatesAFN").style.display = "none"
    document.querySelector(".background").style.display = "none";
})
document.getElementById("initialStatesAFN-btn-next").addEventListener("click", function() {
    var checkboxes = document.getElementsByName("btn-selectInitialStatesAFN");
    let etats = '';
    for (var checkbox of checkboxes) {
        if (checkbox.checked) {
            // document.body.append(checkbox.value + ',');
            etats += checkbox.value + ',';
        }
    }
    automate.etatsInitiauxAFN = etats.substring(0, etats.length - 1);

    automate.etatsInitiaux = toTable(etats);

    document.querySelector(".step-initialStatesAFN").style.display = "none";
    document.querySelector(".step-finalStates").style.display = "flex";

    printFinalStates();
})

// e-AFn
document.getElementById("initialStatese-AFN-btn-prev").addEventListener("click", function() {
    document.querySelector(".step-initialStatese-AFN").style.display = "none";
    document.querySelector(".step-transitions").style.display = "flex";

    deleteInitialStates();
    automate.etatInitiaux = null;
})
document.getElementById("initialStatese-AFN-btn-check").addEventListener("click", function() {
    deleteInitialStates();
    deleteFinalStates();
    deleteTable();
    cancelCreation();

    document.querySelector(".step-initialStatese-AFN").style.display = "none"
    document.querySelector(".background").style.display = "none";
})
document.getElementById("initialStatese-AFN-btn-next").addEventListener("click", function() {
    var checkboxes = document.getElementsByName("btn-selectInitialStatese-AFN");
    let etats = '';
    for (var checkbox of checkboxes) {
        if (checkbox.checked) {
            // document.body.append(checkbox.value + ',');
            etats += checkbox.value + ',';
        }
    }
    automate.etatsInitiaux = toTable(etats);

    document.querySelector(".step-initialStatese-AFN").style.display = "none";
    document.querySelector(".step-finalStates").style.display = "flex";

    printFinalStates();
})



// Page ETAT FINAUX

document.getElementById("finalStates-btn-prev").addEventListener("click", function() {
    document.querySelector(".step-finalStates").style.display = "none";
    if (automate.type == 'AFD') {
        document.querySelector(".step-initialStateAFD").style.display = "flex";
    } else if (automate.type == 'AFN') {
        document.querySelector(".step-initialStatesAFN").style.display = "flex";
    } else if (automate.type == 'e-AFN') {
        document.querySelector(".step-initialStatese-AFN").style.display = "flex";
    }
    deleteFinalStates();
    automate.etatsFinaux = null;
})
document.getElementById("finalStates-btn-check").addEventListener("click", function() {
    deleteInitialStates();
    deleteFinalStates();
    deleteTable();
    cancelCreation();

    document.querySelector(".step-finalStates").style.display = "none"
    document.querySelector(".background").style.display = "none";
})
document.getElementById("finalStates-btn-next").addEventListener("click", function() {
    var checkboxes = document.getElementsByName("btn-selectFinalStates");
    let etats = '';
    for (var checkbox of checkboxes) {
        if (checkbox.checked) {
            // document.body.append(checkbox.value + ',');
            etats += checkbox.value + ',';
        }
    }
    console.log(etats);
    automate.etatsFinaux = toTable(etats);
    console.log(toTable(etats));

    document.querySelector(".step-finalStates").style.display = "none";
    document.querySelector(".step-transitionFunction").style.display = "flex";

    generate_table(automate.symboles, automate.etats);
})



// Page FONCTION DE TRANSITION
document.getElementById("transitionFunction-btn-prev").addEventListener("click", function() {
    document.querySelector(".step-transitionFunction").style.display = "none";
    document.querySelector(".step-finalStates").style.display = "flex";
    deleteTable();
    automate.tableTransition = null;
})
document.getElementById("transitionFunction-btn-check").addEventListener("click", function() {
    deleteInitialStates();
    deleteFinalStates();
    deleteTable();
    cancelCreation();

    document.querySelector(".step-transitionFunction").style.display = "none"
    document.querySelector(".background").style.display = "none";
})
document.getElementById("transitionFunction-btn-save").addEventListener("click", function() {
    automate.tableTransition = recuperer_tableau();
    console.table(automate.tableTransition);
    document.querySelector(".step-transitionFunction").style.display = "none";
    document.querySelector(".step-testWord").style.display = "flex";

})



// Page TESTER AUTOMATE
document.getElementById("testWord-btn-prev").addEventListener("click", function() {
    document.querySelector(".step-testWord").style.display = "none";
    document.querySelector(".step-transitionFunction").style.display = "flex";
})
document.getElementById("testWord-btn-check").addEventListener("click", function() {
    deleteInitialStates();
    deleteFinalStates();
    deleteTable();
    cancelCreation();

    document.querySelector(".step-testWord").style.display = "none"
    document.querySelector(".background").style.display = "none";
})
document.getElementById("testWord-btn-save").addEventListener("click", function() {
    console.table(getWord().toString().split(''));

    if (automate.type == "AFD") {
        testWord(getWord());
    } else if (automate.type == "AFN") {
        automate.validAFN = false;
        testWordAFN(getWord(), automate.etatsInitiauxAFN);
    } else if (automate.type == "e-AFN") {

    }

})



/* 
-----------------------------------------------------------------------------------------
                                        LES FONCTIONS
-----------------------------------------------------------------------------------------
*/

function cancelCreation() {
    automate.type = null;
    automate.symboles = null;
    automate.etats = null;
    automate.etatInitiaux = null;
    automate.etatsFinaux = null;
    automate.tableTransition = null;
}

function toTableType(word) {
    var table = word.toString().split(',');
    return table;
}

function toTable(word) {

    word = word.toString().substr(0, word.length - 1);
    var table = word.split(',');
    return table;
}


function printInitialStates() {
    if (automate.type == "AFD") {
        var div = document.getElementsByClassName("selectInitial")[0];
        for (let i = 0; i < automate.nbrEtats; i++) {
            console.log(automate.nbrEtats);
            var radio = document.createElement("input");
            radio.setAttribute("type", "radio");
            radio.setAttribute("class", "btn-check");
            radio.setAttribute("id", "btn-initialState" + automate.etats[i].toString());
            radio.setAttribute("name", "options-selectInitialState");
            radio.setAttribute("autocomplete", "off");
            radio.setAttribute("value", automate.etats[i]);

            var label = document.createElement("label");
            label.setAttribute("class", "btn btn-outline-primary");
            label.setAttribute("for", "btn-initialState" + automate.etats[i].toString());
            label.setAttribute("id", "lbl-initialState" + automate.etats[i].toString());

            var text = document.createTextNode(automate.etats[i]);

            label.appendChild(text);

            div.appendChild(radio);
            div.appendChild(label);
        }
    } else if (automate.type == "AFN") {
        var div = document.getElementsByClassName("selectInitial")[1];
        for (let i = 0; i < automate.nbrEtats; i++) {

            var radio = document.createElement("input");
            radio.setAttribute("type", "checkbox");
            radio.setAttribute("class", "btn-check");
            radio.setAttribute("id", "btn-check-initialStatesAFN-" + automate.etats[i].toString());
            radio.setAttribute("name", "btn-selectInitialStatesAFN");
            radio.setAttribute("autocomplete", "off");
            radio.setAttribute("value", automate.etats[i]);

            var label = document.createElement("label");
            label.setAttribute("class", "btn btn-outline-primary");
            label.setAttribute("for", "btn-check-initialStatesAFN-" + automate.etats[i].toString());
            label.setAttribute("id", "lbl-check-initialStatesAFN-" + automate.etats[i].toString());

            var text = document.createTextNode(automate.etats[i]);

            label.appendChild(text);
            div.appendChild(radio);
            div.appendChild(label);
        }
    } else if (automate.type == "e-AFN") {
        var div = document.getElementsByClassName("selectInitial")[2];
        for (let i = 0; i < automate.nbretats; i++) {

            var radio = document.createElement("input");
            radio.setAttribute("type", "checkbox");
            radio.setAttribute("class", "btn-check");
            radio.setAttribute("id", "btn-check-initialStatese-AFN-" + automate.etats[i].toString());
            radio.setAttribute("name", "btn-selectInitialStatese-AFN");
            radio.setAttribute("autocomplete", "off");
            radio.setAttribute("value", automate.etats[i]);

            var label = document.createElement("label");
            label.setAttribute("class", "btn btn-outline-primary");
            label.setAttribute("for", "btn-check-initialStatese-AFN-" + automate.etats[i].toString());
            label.setAttribute("id", "lbl-check-initialStatese-AFN-" + automate.etats[i].toString());

            var text = document.createTextNode(automate.etats[i]);

            label.appendChild(text);
            div.appendChild(radio);
            div.appendChild(label);
        }
    }

}

function deleteInitialStates() {
    if (automate.type == "AFD") {
        var div = document.getElementsByClassName("selectInitial")[0];
        for (let i = 0; i < automate.nbrEtats; i++) {
            console.log(automate.nbrEtats);

            var radio = document.getElementById("btn-initialState" + automate.etats[i].toString());
            var label = document.getElementById("lbl-initialState" + automate.etats[i].toString());

            div.removeChild(label);
            div.removeChild(radio);
        }
    } else if (automate.type == "AFN") {
        var div = document.getElementsByClassName("selectInitial")[1];
        for (let i = 0; i < automate.nbrEtats; i++) {
            var radio = document.getElementById("btn-check-initialStatesAFN-" + automate.etats[i].toString());
            var label = document.getElementById("lbl-check-initialStatesAFN-" + automate.etats[i].toString());

            div.removeChild(label);
            div.removeChild(radio);

        }
    } else if (automate.type == "e-AFN") {
        var div = document.getElementsByClassName("selectInitial")[2];
        for (let i = 0; i < automate.nbretats; i++) {

            var radio = document.getElementById("btn-check-initialStatese-AFN-" + automate.etats[i].toString());
            var label = document.getElementById("lbl-check-initialStatese-AFN-" + automate.etats[i].toString());

            if (radio != null && label != null) {

                div.removeChild(label);
                div.removeChild(radio);
            }

        }
    }
}

function printFinalStates() {

    var div = document.getElementsByClassName("selectFinal")[0];
    for (let i = 0; i < automate.nbrEtats; i++) {

        var radio = document.createElement("input");
        radio.setAttribute("type", "checkbox");
        radio.setAttribute("class", "btn-check");
        radio.setAttribute("id", "btn-check-finalStates1-" + automate.etats[i]);
        radio.setAttribute("name", "btn-selectFinalStates");
        radio.setAttribute("autocomplete", "off");
        radio.setAttribute("value", automate.etats[i]);

        var label = document.createElement("label");
        label.setAttribute("class", "btn btn-outline-primary");
        label.setAttribute("for", "btn-check-finalStates1-" + automate.etats[i]);
        label.setAttribute("id", "lbl-check-finalStates1-" + automate.etats[i]);

        var text = document.createTextNode(automate.etats[i]);

        label.appendChild(text);
        div.appendChild(radio);
        div.appendChild(label);
    }
}

function deleteFinalStates() {

    var div = document.getElementsByClassName("selectFinal")[0];
    for (let i = 0; i < automate.nbrEtats; i++) {

        var radio = document.getElementById("btn-check-finalStates1-" + automate.etats[i].toString());
        var label = document.getElementById("lbl-check-finalStates1-" + automate.etats[i].toString());

        if (radio != null && label != null) {

            div.removeChild(label);
            div.removeChild(radio);
        }

    }
}

function generate_table(Symbs, Etat) {
    // get the reference for the body
    var div = document.getElementsByClassName("transitionTable")[0];

    // creates a <table> element
    var tbl = document.createElement("table");
    tbl.setAttribute("id", "tbl-transitionTable");

    // creates a <thead> element
    var tblHead = document.createElement("thead");
    tblHead.setAttribute("class", "table-light");

    // creates a <tr> element
    var row0 = document.createElement("tr");

    // creates all th cells
    for (let i = 0; i <= Symbs.length; i++) {
        // creates a <th> element
        var cellH0 = document.createElement("th");
        cellH0.setAttribute("scope", "col");

        if (i == 0) {
            var cellHeadText = document.createTextNode("");
        } else {
            var cellHeadText = document.createTextNode(Symbs[i - 1]);
        }
        cellH0.appendChild(cellHeadText);
        row0.appendChild(cellH0);

    }

    tblHead.appendChild(row0);

    // creates a <tbody> element
    var tblBody = document.createElement("tbody");
    tblBody.setAttribute("class", "table-group-divider");

    // creating all cells
    for (var i = 0; i < Etat.length; i++) {
        // creates a table row
        var row1 = document.createElement("tr");

        var cellH1 = document.createElement("th");
        var cellThText = document.createTextNode(Etat[i]);

        cellH1.appendChild(cellThText);
        row1.appendChild(cellH1);

        cellH1.setAttribute("scope", "row");

        for (var j = 0; j < Symbs.length; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            var cell = document.createElement("td");
            var cellText = document.createElement("input");

            var nom = i + '' + j;
            cellText.setAttribute("id", "cell" + nom);
            cellText.setAttribute("type", "text");

            cell.appendChild(cellText);
            row1.appendChild(cell);

        }


        // add the row to the end of the table body
        tblBody.appendChild(row1);
    }

    // put the <thead> in the <table>
    tbl.appendChild(tblHead);
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    div.appendChild(tbl);

}

function deleteTable() {
    var div = document.getElementsByClassName("transitionTable")[0];
    var tbl = document.getElementById("tbl-transitionTable");
    console.log(tbl);

    if (tbl != null) {
        tbl.remove();

    }

}



function recuperer_tableau() {
    let transRow = new Array();
    let transCol = new Array();
    for (let i = 0; i < automate.nbrEtats; i++) {
        transCol = [];
        for (let j = 0; j < automate.nbrSymboles; j++) {
            transCol[j] = document.getElementById("cell" + i + "" + j).value;
        }
        transRow[i] = transCol;

    }
    return transRow;
}

function getWord() {
    let word = document.getElementById("inputWord").value;
    console.log(word);
    return word;
}


function testWord(mot) {

    let word = mot.toString().split('');

    // let reponse = [0, "", "", 0];
    // let valid = false;

    let current = automate.etatInitiaux;
    console.table(current);
    let i = 0;
    let prevCurrent;
    let character;
    let posiCharacter;

    try {
        while (i < word.length) {
            posiCharacter = i
            if (current == "") {
                console.log("il n'y a pas transition sur " + prevCurrent + " avec le symbole " + character);

                testresult(mot, 3, prevCurrent, character, posiCharacter);

                break;
            } else {
                prevCurrent = current;
                character = word[i];
                current = automate.tableTransition[automate.etats.indexOf(current)][automate.symboles.indexOf(word[i])];
            }

            if (current == undefined) {
                console.log("le symbole '" + word[i] + "' ne fait pas parti de l'aphabet")

                testresult(mot, 2, "", word[i], posiCharacter);

            }

            console.log(current);
            i++;
        }
    } catch (error) {
        console.log(error);
    }
    if (automate.etatsFinaux.indexOf(current) != -1) {

        console.log("le mot est valid");

        testresult(mot, 1, "", "", posiCharacter);

    } else {

        testresult(mot, 0, "", "", posiCharacter);


    }

}


function testWordAFN(mot, init) {
    let word = mot.toString().split('');
    let current = init;
    let i = 0;
    console.log("init:-->" + current);
    while (!automate.validAFN && i < word.length) {
        if (/,/.test(current)) {
            currents = current.split(',');
            wordR = mot.substr(i, mot.length);
            currents.forEach(current => {
                console.log(wordR);
                console.log("brache : ")
                if (word.length == 0) {
                    if (automate.etatsFinaux.indexOf(current) != -1) {
                        automate.validAFN = true;
                        console.log("brache: valid");
                    }
                } else {
                    testWordAFN(wordR, current);
                }
            });
        } else {
            if (current == "") {
                //console.log("il n'y a pas transition sur " + prevCurrent + " avec le symbole " + character);
            } else {
                console.log("init : " + current + " word :  " + word[i])
                current = automate.tableTransition[automate.etats.indexOf(current)][automate.symboles.indexOf(word[i])];
                console.log("final -->" + current);
            }

            if (current == undefined) {
                //console.log("le symbole '" + word[i] + "' ne fait pas parti de l'aphabet")

            }
        }
        i++;
        console.log("index: " + i);
    }
    if (automate.etatsFinaux.indexOf(current) != -1) {
        automate.validAFN = true;
        console.log();
    }

    if (automate.validAFN) {
        console.log("mot valid");
    } else {
        console.log("mot invalid");
    }
}


// <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
//     <div class="modal-dialog modal-dialog-centered">
//         <div class="modal-content">
//         <div class="modal-header">
//             <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Modal 1</h1>
//             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//         </div>
//         <div class="modal-body">
//             Show a second modal and hide this one with the button below.
//         </div>
//         <div class="modal-footer">
//             <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
//         </div>
//         </div>
//     </div>
// </div>

function testresult(word, type, state = "", symbol = "", posi) {
    if (type == 0) {
        alert("Tout le mot " + word + " est lu mais ne tombe pas à l'état final");
    } else if (type == 1) {
        alert("le mot " + word + " est valide");
    } else if (type == 2) {
        alert("le " + posi + "ième symbole '" + symbol + "' ne fait pas parti de l'aphabet");
    } else if (type == 3) {
        alert("il n'y a pas transition sur " + state + " avec le " + posi + "ième symbole " + symbol);
    }
}