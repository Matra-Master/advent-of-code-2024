import { ensureFile } from "@std/fs";

const day = "02";
//
//PUT YOUR INPUTS ON A VARIABLE
await ensureFile("../../inputs/" + day + "/example.txt");
const input = Deno.readTextFileSync("../../inputs/" + day + "/example.txt");
//const input = Deno.readTextFileSync("../../inputs/" + day + "/a.txt");
//console.log(input);

//
//START YOUR SOLUTION HERE
function report_is_safe(report: string): boolean {
  let veredict = true
  const arr = report.split(' ')
  const examine: number[] = []
  arr.forEach((value, index) => {
    if (index > 0) {
      examine[index-1] = parseInt(arr[index - 1]) - parseInt(value)
      if (Math.abs(examine[index-1]) > 3 || Math.abs(examine[index-1]) == 0) veredict = false
      if (index > 1)
        if ((examine[index-2] > 0 && examine[index-1] < 0) || (examine[index-2] < 0 && examine[index-1] > 0)) veredict = false
    }
  })
  console.log("Report: %s", report)
  console.log("Examine: %s", examine)
  return veredict
}

const reports = input.split('\n')
reports.pop()

let output = 0
reports.forEach((line) => {
  if (report_is_safe(line)) output++
})

//
//OUTPUT SHOULD BE THE RESULT TO PUT ON THE ADVENT OF CODE RESPONSE FIELD
console.log(output);
