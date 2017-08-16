// Initialize Firebase
var config = {
    apiKey: "AIzaSyBOFC9R93z-5Yq6c4wNbT2OqK3nrAROunU",
    authDomain: "product-planer.firebaseapp.com",
    databaseURL: "https://product-planer.firebaseio.com",
    projectId: "product-planer",
    storageBucket: "product-planer.appspot.com",
    messagingSenderId: "1039482368977"
};
firebase.initializeApp(config);

const contador = 4;

const cargarPagina = function () {
    $('.collapsible').collapsible();
    $('.modal').modal();
    $("#categoria").change(confirmacion);
    $("#check1").click(seccion2);
    $("#seccion1").submit(siguiente);
    $("#seccion2").submit(siguiente);
    $("#seccion3").submit(siguiente);
    $("#nuevoUsuario").click(masUsuario);


};


const confirmacion = function () {
    console.log("cambió");
    $("#correcto1").removeClass("hide");
};

const seccion2 = function () {
    console.log("sig de 1 a 2");
    $("#correcto1s").removeClass("hide");
};

const siguiente = function (e) {
    e.preventDefault();
    console.log("enter");
    $("#inicio").addClass("hide");
    $("#user-persona").removeClass("hide");
};
//Section1: Tipo de Prooducto
const masUsuario = function () {
    //let contadorUsuario = contador;
    const plantillaUsuario = `<div class="row">
                            <div class="input-field col s6">
                                <i class="material-icons prefix">account_circle</i>
                                <input id="un__contador__" type="text" class="validate">
                                <label for="un__contador__">Nombre de usuario (rol):</label>
                            </div>
                            <div class="input-field col s6">
                                <i class="material-icons prefix">details</i>
                                <input id="ue__contador__" class="">
                                <label for="ue__contador__">Especificaciones(edad, sexo):</label>
                            </div>
                        </div>`;
    for (let i = 4; i < 7; i++) {
        let nuevaPlantilla = plantillaUsuario.replace('__contador__', i)
            .replace('__contador__', i)
            .replace('__contador__', i)
            .replace('__contador__', i);
        $("#seccion2").append(nuevaPlantilla);
    }
        
}

$(document).ready(cargarPagina);
