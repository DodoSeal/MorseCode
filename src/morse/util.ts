import { MorseLibrary } from "./library.js";

/**
 * Morse Code Translation Tool
 */
class MorseCode {
    /**
     * Converts a single character into a Morse Code value
     * @param letter The character that will be turned into Morse Code
     * @returns Code equivalent to input letter
     */
    public TranslateLetterToCode(letter: string): string | undefined {
        const code = MorseLibrary[letter.toLowerCase()];
        if (!code) return;

        return code;
    };

    /**
     * Converts a single Morse Code value into a character
     * @param code The Morse Code that will be turned into a character
     * @returns Letter equivalent to input code
     */
    public TranslateCodeToLetter(code: string): string | undefined {

        return;
    };

    /**
     * Converts a string into Morse Code
     * @param code The string that will be turned into Morse Code
     * @returns Morse Code equivalent to input string
     */
    public TranslateStringIntoCode(data: string) {
        const letters = data.split("");
        let code = "";

        for (let letter of letters) {
            const singleCode = this.TranslateLetterToCode(letter);
            if (!singleCode) continue;

            if (singleCode === "/") { code += " / "; continue; };

            code += singleCode;
            code += " | ";
        };

        return code;
    };

    /**
     * Converts Morse Code into a string
     * @param code The Morse Code that will be turned into a string
     * @returns String equivalent to input code
     */
    public TranslateCodeIntoString(code: string) {

    };
};

export const MorseUtil = new MorseCode();