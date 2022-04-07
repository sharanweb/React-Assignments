import "../index.css";
import { takeNote } from "./takenote";

// const root = document.getElementById("root");

document.getElementById("notes").addEventListener("keypress", takeNote);