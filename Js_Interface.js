const sideBar = document.querySelector("#Side_bar");
const content = document.querySelector("#content");

const placePartyType = document.querySelector('#Place_party_Type');
const Snack = document.querySelector("#Place_Snack");
const PlaceDrink = document.querySelector('#Place_Drink');
const PlaceParty = document.querySelector('#Place_Party');
const PlaceResultado = document.querySelector('#Place_Resultado');

const fritosForm = document.querySelector("#fritos");
const assadosForm = document.querySelector("#assados");
const folhadosForm = document.querySelector("#folhados");

const botao1 = document.querySelector("#botao1");
const botao2 = document.querySelector("#botao2");
const botao3 = document.querySelector("#botao3");
const botao4 = document.querySelector("#botao4");
const botao5 = document.querySelector("#botao5");

const alcolicas = document.querySelector("#Cervejas");
const refrigerantes = document.querySelector("#Refrigerantes");
const sucos = document.querySelector("#Sucos");
const energeticos = document.querySelector("#Energeticos");

const BotaoAlcolicos = document.querySelector('#Place_Drink_Alcolicos');
const BotaoRefrigerantes = document.querySelector('#Place_Drink_Refrigerantes');
const BotaoSucos = document.querySelector('#Place_Drink_Sucos');
const BotaoEnergeticos = document.querySelector('#Place_Drink_Energeticos');

const BotaoFritos = document.querySelector('#Products_buttons_Fritos');
const BotaoFolhados = document.querySelector('#Products_buttons_Folhados');
const BotaoAssados = document.querySelector('#Products_buttons_Assados');


function SelectTypeParty() {
    if (placePartyType.style.display === "none" || placePartyType.style.display === "" || content.style.display === "none") {
        placePartyType.style.display = "block";
        content.style.display = "block";
    
        Snack.style.display = "none";
        PlaceDrink.style.display = "none";
        PlaceParty.style.display = "none";
        PlaceResultado.style.display = "none";
        sideBar.style.width = "40%"
        
    } else {
        placePartyType.style.display = "none";
        content.style.display = "none";
        sideBar.style.width = "100%"
    }
}

function SelectSnack(){
    if (Snack.style.display === "none" || Snack.style.display === "" || content.style.display === "none") {
        Snack.style.display = "block";
        content.style.display = "block";

        placePartyType.style.display = "none";
        PlaceDrink.style.display = "none";
        PlaceParty.style.display = "none";
        PlaceResultado.style.display = "none";
        sideBar.style.width = "40%"
        
    } else {
        Snack.style.display = "none";
        content.style.display = "none";
        sideBar.style.width = "100%"
    }
}

function SelectDrink(){
    if (PlaceDrink.style.display === "none" || PlaceDrink.style.display === "" || content.style.display === "none") {
        PlaceDrink.style.display = "block";
        content.style.display = "block";

        placePartyType.style.display = "none";
        Snack.style.display = "none";
        PlaceParty.style.display = "none";
        PlaceResultado.style.display = "none";
        sideBar.style.width = "40%"
        
    } else {
        PlaceDrink.style.display = "none";
        content.style.display = "none";
        sideBar.style.width = "100%"
    }
}

function SelectPartyPlace(){
    if (PlaceParty.style.display === "none" || PlaceParty.style.display === "" || content.style.display === "none") {
        PlaceParty.style.display = "block";
        content.style.display = "block";


        placePartyType.style.display = "none";
        Snack.style.display = "none";
        PlaceDrink.style.display = "none";
        PlaceResultado.style.display = "none";

        sideBar.style.width = "40%"
        
    } else {
        content.style.display = "none";
        PlaceParty.style.display = "none";
        sideBar.style.width = "100%"
    }
}

function ShowResults(){
    if (PlaceResultado.style.display === "none" || PlaceResultado.style.display === "" || content.style.display === "none") {
        PlaceResultado.style.display = "block";
        content.style.display = "block";

        
        placePartyType.style.display = "none";
        Snack.style.display = "none";
        PlaceDrink.style.display = "none";
        PlaceParty.style.display = "none";

        sideBar.style.width = "40%"
        
    } else {
        content.style.display = "none";
        PlaceResultado.style.display = "none";
        sideBar.style.width = "100%"
    }
}


function ShowFritos(){
    if(fritosForm.style.display === 'none' || fritosForm.style.display === ""){
        fritosForm.style.display = 'block';

        assadosForm.style.display = 'none';
        folhadosForm.style.display =  'none';
    }
}
function ShowFolhados(){
    if(folhadosForm.style.display === 'none' || folhadosForm.style.display === ""){
        folhadosForm.style.display = 'block';

        assadosForm.style.display = 'none';
        fritosForm.style.display =  'none';
    }
}
function ShowAssados(){
    if(assadosForm.style.display === 'none' || assadosForm.style.display === ""){
        assadosForm.style.display = 'block';

        fritosForm.style.display = 'none';
        folhadosForm.style.display =  'none';
    }
}

botao1.addEventListener("click", function() {
    botao1.style.background = 'rgba(143, 203, 223, 0.57)';

    botao2.style.background = '';
    botao3.style.background = '';
    botao4.style.background = '';
    botao5.style.background = '';
});

botao2.addEventListener("click", function() {
    botao2.style.background = 'rgba(143, 203, 223, 0.57)';

    botao1.style.background = '';
    botao3.style.background = '';
    botao4.style.background = '';
    botao5.style.background = '';
});

botao3.addEventListener("click", function() {
    botao3.style.background = 'rgba(143, 203, 223, 0.57)';

    botao2.style.background = '';
    botao1.style.background = '';
    botao4.style.background = '';
    botao5.style.background = '';
});

botao4.addEventListener("click", function() {
    botao4.style.background = 'rgba(143, 203, 223, 0.57)';

    botao2.style.background = '';
    botao3.style.background = '';
    botao1.style.background = '';
    botao5.style.background = '';
});

botao5.addEventListener("click", function() {
    botao5.style.background = 'rgba(143, 203, 223, 0.57)';

    botao2.style.background = '';
    botao3.style.background = '';
    botao1.style.background = '';
    botao4.style.background = '';
});

function ShowAlcolicas(){
    if(alcolicas.style.display === "none" || alcolicas.style.display === ""){
        alcolicas.style.display = 'block';

        refrigerantes.style.display = 'none';
        sucos.style.display = 'none';
        energeticos.style.display = 'none';
    }
}
function ShowRefrigerante(){
    if(refrigerantes.style.display === "none" || refrigerantes.style.display === ""){
        refrigerantes.style.display = 'block';

        alcolicas.style.display = 'none';
        sucos.style.display = 'none';
        energeticos.style.display = 'none';
    }
}
function ShowSucos(){
    if(sucos.style.display === "none" || sucos.style.display === ""){
        sucos.style.display = 'block';

        refrigerantes.style.display = 'none';
        alcolicas.style.display = 'none';
        energeticos.style.display = 'none';
    }
}
function ShowEnergetico(){
    if(energeticos.style.display === "none" || energeticos.style.display === ""){
        energeticos.style.display = 'block';

        refrigerantes.style.display = 'none';
        sucos.style.display = 'none';
        alcolicas.style.display = 'none';
    }
}

BotaoFritos.style.background = 'rgba(111, 194, 221, 0.57)';
BotaoFritos.addEventListener("click", function() {
    BotaoFritos.style.background = 'rgba(111, 194, 221, 0.57)';

    BotaoFolhados.style.background = '';
    BotaoAssados.style.background = '';
});

BotaoFolhados.addEventListener("click", function() {
    BotaoFolhados.style.background = 'rgba(111, 194, 221, 0.57)';

    BotaoFritos.style.background = '';
    BotaoAssados.style.background = '';
});

BotaoAssados.addEventListener("click", function() {
    BotaoAssados.style.background = 'rgba(111, 194, 221, 0.57)';

    BotaoFolhados.style.background = '';
    BotaoFritos.style.background = '';
});


BotaoRefrigerantes.style.background = 'rgba(111, 194, 221, 0.57)';
BotaoAlcolicos.addEventListener("click", function() {
    BotaoAlcolicos.style.background = 'rgba(111, 194, 221, 0.57)';

    BotaoRefrigerantes.style.background = '';
    BotaoEnergeticos.style.background = '';
    BotaoSucos.style.background = '';
});

BotaoRefrigerantes.addEventListener("click", function() {
    BotaoRefrigerantes.style.background = 'rgba(111, 194, 221, 0.57)';

    BotaoAlcolicos.style.background = '';
    BotaoEnergeticos.style.background = '';
    BotaoSucos.style.background = '';
});

BotaoEnergeticos.addEventListener("click", function() {
    BotaoEnergeticos.style.background = 'rgba(111, 194, 221, 0.57)';

    BotaoRefrigerantes.style.background = '';
    BotaoAlcolicos.style.background = '';
    BotaoSucos.style.background = '';
});

BotaoSucos.addEventListener("click", function() {
    BotaoSucos.style.background = 'rgba(111, 194, 221, 0.57)';

    BotaoRefrigerantes.style.background = '';
    BotaoEnergeticos.style.background = '';
    BotaoAlcolicos.style.background = '';
});