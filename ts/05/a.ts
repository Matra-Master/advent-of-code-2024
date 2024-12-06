import { ensureFile } from "@std/fs";

const day = "05";
//
//PUT YOUR INPUTS ON A VARIABLE
//await ensureFile("../../inputs/" + day + "/example.txt");
//const input = Deno.readTextFileSync("../../inputs/" + day + "/example.txt");
await ensureFile("../../inputs/" + day + "/a.txt");
const input = Deno.readTextFileSync("../../inputs/" + day + "/a.txt");
//console.log(input);
//input.split().forEach(() => {})
//
const [rules, pages] = input.split("\n\n")

//console.log("====================================")
//console.log("Rules: ")
//console.log(rules)
//console.log("====================================")
//console.log("Pages: ")
//console.log(pages)
//console.log("====================================")
//
//START YOUR SOLUTION HERE

function update_is_in_right_order(pages_to_update: string, rules_array: Map<string, string[]>): number{
  //Recorrer cada grupo de páginas al revés, de la última a la primera
  const reversed_pages = pages_to_update.split(',').reverse()
  //Crear arreglo de prohibidas
  const invalid_pages: string[] = []
  console.log("Reversed pages", reversed_pages)
  //Fijarse que la página actual no esté ya en el arreglo de prohibidas
  for (let i = 0; i < reversed_pages.length; i++) {
    const page = reversed_pages[i];
    if (invalid_pages.includes(page)) return 0
    invalid_pages.concat(rules_array.get(page) || [])
  }
  const middle_page_value = reversed_pages[Math.floor(reversed_pages.length / 2)]
  return parseInt(middle_page_value)
}

function gather_rules(rules: string): Map<string, string[]> {
  const a_map = new Map<string, string[]>()
  rules.split('\n').map((value) => {
    const [a_page, its_rule] = value.split('|')
    if (a_map.get(a_page) == undefined) {
      a_map.set(a_page, [its_rule])
    } else {
      a_map.get(a_page)?.push(its_rule)
    }
  })
  return a_map
}

//Armar arreglo de reglas
const rules_array: Map<string, string[]> = gather_rules(rules)
console.log("Rules Array")
console.log(rules_array)
const pages_array = pages.split('\n')
pages_array.pop()
console.log("===========================================")
console.log("Pages Array")
console.log(pages_array)
let output = 0
for (let index = 0; index < pages_array.length; index++) {
  output += update_is_in_right_order(pages_array[index], rules_array)
  
}

//
//OUTPUT SHOULD BE THE RESULT TO PUT ON THE ADVENT OF CODE RESPONSE FIELD
console.log(output);
