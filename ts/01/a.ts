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
const _rightList :string[] = [];

input.split('\n').forEach((line) => {
  if( line === "") return
  const split = line.split('   ');
  _leftList.push(split[0])
  _rightList.push(split[1])
})
_leftList.sort()
_rightList.sort()

console.log("List A")
console.log(_leftList)
console.log("List B")
console.log(_rightList)

const toSum = _leftList.map((value,key) => {
  return Math.abs(parseInt(_rightList[key]) - parseInt(value))
})

const output = toSum.reduce((accumulator, current) => { return accumulator + current})
//
//OUTPUT SHOULD BE THE RESULT TO PUT ON THE ADVENT OF CODE RESPONSE FIELD
console.log(output);
