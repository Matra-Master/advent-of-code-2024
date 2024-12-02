import { ensureFile } from "@std/fs";

const day = "01";
//
//PUT YOUR INPUTS ON A VARIABLE
await ensureFile("../../inputs/" + day + "/example.txt");
//const input = Deno.readTextFileSync("../../inputs/" + day + "/example.txt");
const input = Deno.readTextFileSync("../../inputs/" + day + "/a.txt");

//
//START YOUR SOLUTION HERE

//Separate input in two lists
const _leftList :string[] = [];
const _rightList :number[] = [];

input.split('\n').forEach((line) => {
  if( line === "") return
  const split = line.split('   ');
  _leftList.push(split[0])


  if (isNaN(_rightList[parseInt(split[1])-1])) _rightList[parseInt(split[1])-1] = 0
  _rightList[parseInt(split[1])-1]++
})
console.log("List A")
console.log(_leftList)
console.log("List B")
console.log(_rightList)

const toSum = _leftList.map((value) => {
  let mult = 0
  if (!isNaN(_rightList[parseInt(value)-1])) {
    mult = _rightList[parseInt(value)-1]
  }
  console.log("Mult %s %s", parseInt(value)-1, mult)
  
  return parseInt(value) * mult
})

console.log("Sum array")
console.log(toSum)


const output = toSum.reduce((accumulator, current) => { return accumulator + current})
//
//OUTPUT SHOULD BE THE RESULT TO PUT ON THE ADVENT OF CODE RESPONSE FIELD
console.log(output);
