export const convertToRomanNumeral = (num) => {
    if (!parseInt(num)) { return num }

    const numeralCodes = [
        ["","I","II","III","IV","V","VI","VII","VIII","IX"],         // Ones
        ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],   // Tens
        ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],         // Hundreds
        ["","M","MM","MMM","VM","V","VM","VMM","VMMM"]
    ];        
    var numeral = "";
    var digits = num.toString().split('').reverse();
    for (var i=0; i < digits.length; i++){
        numeral = numeralCodes[i][parseInt(digits[i])] + numeral;
    }
    return numeral;  
}
