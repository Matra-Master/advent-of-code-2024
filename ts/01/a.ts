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
const _listA :string[] = [];
const _listB :string[] = [];

input.split('\n').forEach((line) => {
  if( line === "") return
  const split = line.split('   ');
  _listA.push(split[0])
  _listB.push(split[1])
})
_listA.sort()
_listB.sort()

console.log("List A")
console.log(_listA)
console.log("List B")
console.log(_listB)

const toSum = _listA.map((value,key) => {
  return Math.abs(parseInt(_listB[key]) - parseInt(value))
})

const output = toSum.reduce((accumulator, current) => { return accumulator + current})
//
//OUTPUT SHOULD BE THE RESULT TO PUT ON THE ADVENT OF CODE RESPONSE FIELD
console.log(output);
