import carousel from "./logica-index.js";
import {calculadora} from "./calculadora.js";
import { btnImg } from "./logica-index.js";


const d = document;

d.addEventListener("DOMContentLoaded",()=>{
carousel();
calculadora();
btnImg();
})