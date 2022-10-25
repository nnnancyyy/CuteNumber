export class Foo {
  bar() {
    return 'bar'
  }}

export function isCuteNumberGreaterThan10(num:number[]):boolean {
  const evenList = findAllEvenNumber(num)
  const maxNum = findTheMax(evenList)
  return isGreaterthan10(maxNum)
}

function findTheMax(num:number[]):number{
  return Math.max(...num)
}

function findAllEvenNumber(num:number[]):number[]{
  return num.filter(num=>num%2==0)
}

function isGreaterthan10(num:number):boolean{
  return num > 10
}