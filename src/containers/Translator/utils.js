import code from "./../../data/code";

// CONVERT TO ENGLISH
export const convertToEnglish = (string) => {
  let resultArr = [];
  let reverseCode = {};
  let errorArr = [];

  //reverse code data
  Object.keys(code).forEach((i) => {
    reverseCode[code[i]] = i;
  });
  
  const stringArr = string.trim().split(" ");
  stringArr.forEach((i) => {
    reverseCode[i] ?
    resultArr.push(reverseCode[i]) :
    errorArr.push(i);
  });

  //return results as string if no error, else error message
  return (errorArr.length===0 
  ? resultArr.join(' ')
  : `Sorry, can't recognise these: '${errorArr.join("' '")}'`);
}

//CONVERT TO MORSE
export const convertToMorse = (string) => {
  let resultArr = [];
  let errorArr = [];
  let stringArr;
  let result;
  
  //set to lower case, remove multiple spaces
  const cleanString = string.trim().toLowerCase().replace(/  +/, " ");
  //convert to array
  stringArr = cleanString.split("");
  //push coverversion to new array
  stringArr.forEach((i) => {
    code[i] ?
    resultArr.push(code[i]) :
    errorArr.push(i);
  });
  
  // if error reject results, else send to Output
  if (resultArr.length===0) {
    console.log(`Error: string was empty`);
    return `Try typing something!`;
  } else if (errorArr.length===0){ 
    return resultArr.join(" ");
  } else {
    console.log(`Error: input character ${result} was not valid`);
    result = errorArr.join("' '");
    return `Sorry, try without these: '${result}'`;
  };
}