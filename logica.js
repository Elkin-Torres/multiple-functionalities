import carousel from "./logica-index.js";
import { btnImg } from "./logica-index.js";
import {contadora} from "./contadora.js";
import { resenias } from "./resenias.js";
import {compania} from "./compania.js";
import {catalogo} from "./catalogo.js";
import {video} from "./video.js";
import { diferencia } from "./nuestra-diferencia.js";
import {texto} from "./texto.js";
import { listaViveres } from "./lista.js";
import {conversorDivisas} from "./conversor.js";
import {calculando} from "./calculadora.js";
import {library} from "./library.js";
import {planes} from "./planes.js";
import { blog } from "./blog.js";
import {contacto} from "./contacto.js";

//global variable
const d = document;

//load imported functions
d.addEventListener("DOMContentLoaded",()=>{
carousel();
btnImg();
resenias();
compania();
video();
diferencia();
contadora();
conversorDivisas();
library();
planes();
blog();
contacto();
})

//imported functions that by default are already loaded with the document
listaViveres();
catalogo();
texto();
calculando();