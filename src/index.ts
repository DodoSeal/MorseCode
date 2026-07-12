import { MorseUtil } from "./morse/util.js";

const translationString = "Hello, World!";

const originalLabel = document.getElementById("original")!;
originalLabel.innerText = translationString;

const morseLabel = document.getElementById("morse")!;
morseLabel.innerText = MorseUtil.TranslateStringIntoCode(translationString)!;