/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let map = {
        '1':'A',
        '2':'B',
        '3':'C',
        '4':'D',
        '5':'E',
        '6':'F',
        '7':'G',
        '8':'H',
        '9':'I',
        '10':'J',
        '11':'K',
        '12':'L',
        '13':'M',
        '14':'N',
        '15':'O',
        '16':'P',
        '17':'Q',
        '18':'R',
        '19':'S',
        '20':'T',
        '21':'U',
        '22':'V',
        '23':'W',
        '24':'X',
        '25':'Y',
        '26':'Z'
    }
    
      // DP table initialized
  let table = new Array(s.length + 1).fill(0);
  
  // Edge case handle for the last position;
  table[s.length] = 1;
  
  // Loop from the top;
  for (let i = s.length - 1; i >=0; i--) {
    console.log(table)
    let option1 = 0;
    let option2 = 0;
    
    // length 1 code and length 2 code to be decoded;
    let char1 = s.slice(i, i + 1);
    let char2 = s.slice(i, i + 2);
    
    if (char1 in map) { // check if length 1 num can be decoded checking in the map
	 
	  // I can decode 1, so number of ways to decode using decoding 1 from ith position to the end is table[i+1]
      option1 = table[i + 1];
    }
	
    // char2.length === 2 validation is needed for i = s.length - 1 since it will slice only to length 1, in which case we don't count 
    if (char2.length === 2 && char2 in map) { // check if length 2 num can be decoded checking in the map
	
	  // I can decode 2, so number of ways to decode using decoding 2 from ith position to the end is table[i+2]
      option2 = table[i + 2];
    }
	
	// numer of ways to decode at i is sum of options1 and option2;
    table[i] = option1 + option2;

  }
  console.log(table)
  // return number of ways to decode starting from 0th position;
  return table[0]
};