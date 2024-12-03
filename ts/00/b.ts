import { ensureFile } from "@std/fs";

const day = "00";
//
//PUT YOUR INPUTS ON A VARIABLE
await ensureFile("../../inputs/" + day + "/example.txt");
const input = Deno.readTextFileSync("../../inputs/" + day + "/example.txt");
//const input = Deno.readTextFileSync("../../inputs/" + day + "/b.txt");
console.log(input);
//input.split().forEach(() => {})

//
//START YOUR SOLUTION HERE

const output = "placeholder"
//
//OUTPUT SHOULD BE THE RESULT TO PUT ON THE ADVENT OF CODE RESPONSE FIELD
console.log(output);
