const name = document.querySelector("#Name");
const identification = document.querySelector("#Identification");
const mail = document.querySelector("#Mail");
const cellPhone = document.querySelector("#CellPhone");
const numberPeople = document.querySelector("#Number_people");
const date = document.querySelector("#Date");
const time = document.querySelector("#Time");
const partyType = document.querySelector("#Party_type");
const drinks = document.querySelector("#Drinks");
const partyPlace = document.querySelector("#Party_place");
const sideBar = document.querySelector("#Side_bar");
const content = document.querySelector("#content");
const placeSS = document.querySelector("#Place_SS");
const customerRegistration = document.querySelector("#Customer_registration");

const Snack = document.querySelector("#Place_Snack");
const placePartyType = document.querySelector('#Place_party_Type');
const PlaceDrink = document.querySelector('#Place_Drink');
const PlaceParty = document.querySelector('#Place_Party');

function SelectTypeParty() {
    if (placePartyType.style.display === "none" || placePartyType.style.display === "" || content.style.display === "none") {
        placePartyType.style.display = "block";
        content.style.display = "block";
    
        Snack.style.display = "none";
        PlaceDrink.style.display = "none";
        PlaceParty.style.display = "none";
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
        sideBar.style.width = "40%"
        
    } else {
        content.style.display = "none";
        PlaceParty.style.display = "none";
        sideBar.style.width = "100%"
    }
}