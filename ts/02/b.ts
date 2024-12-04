import { ensureFile } from "@std/fs";

const day = "02";
//
//PUT YOUR INPUTS ON A VARIABLE
await ensureFile("../../inputs/" + day + "/example.txt");
//const input = Deno.readTextFileSync("../../inputs/" + day + "/example.txt");
const input = Deno.readTextFileSync("../../inputs/" + day + "/a.txt");
//console.log(input);

//
//START YOUR SOLUTION HERE
//

function examine_report(report_array: string[]): number[] {
  const examination_array: number[] = []
  for(const i in report_array)  {
    const index = parseInt(i)
    if (index > 0) examination_array.push(parseInt(report_array[index]) - parseInt(report_array[index-1]))
  }
  return examination_array

}

function is_spike(value: number) : boolean{
  const absolute = Math.abs(value)
  if (absolute > 3 || absolute == 0) return true
  return false
}
function changes_sign(previous_value: number, value: number) : boolean{
  if ((value > 0 && previous_value < 0) || (value < 0 && previous_value > 0)) return true
  return false
}


function report_is_safe(report: string): boolean {
  const report_array = report.split(' ')
  const examination_array = examine_report(report_array)
  console.log("Report array:   %s", report_array)
  console.log("Examination array: %s", examination_array)

  for (const i in examination_array) {
    const index = parseInt(i)
    const value = examination_array[index]
    //if (index == examination_array.length -1) {
    //  console.log("Got to the last value, this is safe no matter what");
    //  break
    //}
    if (is_spike(value)) return false
    if (index > 0 && changes_sign(examination_array[index-1], value)) return false
  }
  //console.log("returned true");
  return true
}



const reports = input.split('\n')
reports.pop()

let output = 0
reports.forEach((line) => {
  if (report_is_safe(line)) output++
  console.log("===================================")
})

//
//OUTPUT SHOULD BE THE RESULT TO PUT ON THE ADVENT OF CODE RESPONSE FIELD
console.log(output);
