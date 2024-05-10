
import { isPalindrome } from "../utils"
test('racecar is palindrome', ()=>{
    expect(isPalindrome('racecar')).toBe(true)
})

test('car is not palindrome', ()=>{
    expect(isPalindrome('car')).toBe(false)
})
