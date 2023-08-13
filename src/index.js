const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    const dot = '10';
    const dash = '11';
    let newString = expr.split('**********'); 
    let decodedItem = '';
    let codedItem = ''; 
    let char = ''; 
    let bin = ''; 
    let decodedWord = '';
    let result = '';

    for (let i = 0; i < newString.length; i++) { 
        for (let j = 0; j < newString[i].length; j+= 10) { 
            bin = newString[i].slice([j], [j + 10]); 
            
            for (let k = 0; k < bin.length; k+= 2) { 
                char = bin.slice([k], [k + 2]);
                if (char === dot) { 
                    codedItem += '.'
                 }  else if (char === dash) { 
                    codedItem += '-'
                  } else { 
                    codedItem = codedItem
                   }
            } 
            
            for (let key in MORSE_TABLE) {
                if (key === codedItem) {
                decodedItem = MORSE_TABLE[key];
            } 
        }  
            decodedWord += decodedItem;
            codedItem = '';
        } 
        result = result + decodedWord + ' ';
        decodedWord = '';
    } 
    
    return result.trim() 
}

module.exports = {
    decode
}