import { MorseLibrary } from "./library.js";

/**
 * Morse Code Translation Tool
 */
class MorseCodeTranslator {
    /**
     * Converts a single character into a Morse Code value
     * @param letter The character that will be turned into Morse Code
     * @returns Code equivalent to input letter
     */
    public TranslateLetterToCode(letter: string): string {
        const code = MorseLibrary[letter.toLowerCase()];
        if (!code) return "";

        return code;
    };

    /**
     * Converts a single Morse Code value into a character
     * @param data The Morse Code that will be turned into a character
     * @returns Letter equivalent to input code
     */
    public TranslateCodeToLetter(data: string): string {
        let letterValue = "";

        for (let [ letter, code ] of Object.entries(MorseLibrary)) {
            if (code === data) {
                letterValue += letter;
                return letter;
            };
        };

        return "";
    };

    /**
     * Converts a string into Morse Code
     * @param code The string that will be turned into Morse Code
     * @returns Morse Code equivalent to input string
     */
    public TranslateStringIntoCode(data: string): string {
        const letters = data.split("");
        let code = "";

        for (let letter of letters) {
            const singleCode = this.TranslateLetterToCode(letter);
            if (!singleCode) continue;

            if (singleCode === "/") { code += " / "; continue; };

            code += singleCode;
            code += " ";
        };

        return code;
    };

    /**
     * Converts Morse Code into a string
     * @param data The Morse Code that will be turned into a string
     * @returns String equivalent to input code
     */
    public TranslateCodeIntoString(data: string): string {
        let output = "";
        const splitCode = data.split(" ");

        for (let code of splitCode) {
            const letter = this.TranslateCodeToLetter(code);
            if (!letter) continue;

            output += letter;
        };
        
        return output;
    };
};

export const MorseUtil = new MorseCodeTranslator();