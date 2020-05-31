/* eslint-disable no-eval */
/* eslint-disable no-unused-vars */
class Character{
    constructor(character, fontName, fontSize) {
        this.character = character;
        this.fontName = fontName;
        this.fontSize = fontSize;
    }
    drawCharacter() {
        return this.character;
    }
}
class Letter extends Character{
    constructor(character, fontName, fontSize, charCase) {
        super(character, fontName, fontSize);
        this.charCase = charCase;
    }
    getCase() {
        return this.charCase;
    }
    toLowerCase() {
        this.charCase = `lowerCase`;
        this.character = this.character.toLowerCase();
    }
    toUpperCase() {
        this.charCase = `upperCase`;
        this.character = this.character.toUpperCase();
    }
}
class Digit extends Character{
    constructor(...args) {
        super(...args);
        this.isDigit = (typeof(this.character) === 'number');
    }
    integerValue() {
        this.isDigit = true;
        this.character = eval(this.character);
    }
}
/* Classes are quite excellent functions because 
 * they allow objects to inherit characteristics 
 * such as specific methods via the prototype chain which 
 * modify properties using the `this` keyword.  
 * In this problem, I've implemented 
 * three classes, and two of which inherit the 
 * character, font name, and font size from the 
 * Character() class.  So, in the last sub-class 
 * Digit, I just wrote ...args instead of spelling out 
 * each individual argument; is this recommended form, or 
 * should I write them out individually?  
 * Anyway, thanks Justin for being such a good mentor, 
 * I am glad to have you as a mentor and believe that these
 * exercises have illuminated a lot of my questions which I 
 * have about syntax and stuff. */