import { ensureFile } from "@std/fs";

const day = "03";
//
//PUT YOUR INPUTS ON A VARIABLE
//await ensureFile("../../inputs/" + day + "/example.txt");
//const input = Deno.readTextFileSync("../../inputs/" + day + "/example.txt");
await ensureFile("../../inputs/" + day + "/a.txt");
const input = Deno.readTextFileSync("../../inputs/" + day + "/a.txt");
//console.log(input);

//
//START YOUR SOLUTION HERE
//

function make_mults_from_array(input: string): number {
  let result = 0
  const mults_array = input.split('mul(')

  mults_array.shift()
  //console.log(possible_mults_array)

  for (const some_string of mults_array) {
    const possible_mult = some_string.split(')')[0]
    //console.log(possible_mult)
    const possible_numbers = possible_mult.split(',')
    if ( possible_numbers.length == 1 || possible_numbers.length > 2) {
      result += 0
      //console.log("Possible numbers length incorrect", possible_numbers)
    } else {
      //Check if those are two numbers
      const possible1 = Number(possible_numbers[0])
      const possible2 = Number(possible_numbers[1])
      if ( !(isNaN(possible1) || isNaN(possible2)) ){
        result += parseInt(possible_numbers[0]) * parseInt(possible_numbers[1])
      }
    }
  }
  return result
}

const output = make_mults_from_array(input)

//OUTPUT SHOULD BE THE RESULT TO PUT ON THE ADVENT OF CODE RESPONSE FIELD
console.log(output);
