export default function returnHowManyArguments(...input) {
  let count = 0;
  for (let i = 0; i < input.length; i+=1) {
    count += 1;
  }
  return count;
}
