import carousel from "./logica-index.js";
import {calculadora} from "./calculadora.js";
import { btnImg } from "./logica-index.js";
import {contadora} from "./contadora.js";
import { resenias } from "./resenias.js";
import {compania} from "./compania.js";
import {catalogo} from "./catalogo.js";


const d = document;

d.addEventListener("DOMContentLoaded",()=>{
carousel();
calculadora();
btnImg();
contadora();
resenias();
compania();
catalogo();
})