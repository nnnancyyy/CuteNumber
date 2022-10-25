import {Foo,isCuteNumberGreaterThan10} from '../src/Foo'

describe('Foo', () => {
  it('bar', () => {
    expect(new Foo().bar()).toEqual('bar')
  })
})

it('shoul return true given numbers: 1, 2, 3, 4, 20',()=>{
  //given
  const numbers = [1, 2, 3, 4,20]

  //when
  const actual: boolean = isCuteNumberGreaterThan10(numbers)

  //then
  expect(actual).toBeTruthy()

})
