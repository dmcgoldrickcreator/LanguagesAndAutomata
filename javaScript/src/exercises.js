//question 1
export function change(cents) {
    let quarters = 0
       ,dimes = 0
       ,nickels = 0
       ,pennies = 0

    let quarter_val = 25
       ,dimes_val = 10
       ,nickels_val = 5
       ,pennies_val = 1

    let rem_cents = cents

    if(cents < 0){
        throw new RangeError("No negative values.")

    }
    quarters = Math.floor(rem_cents / quarter_val)
    rem_cents = rem_cents % quarter_val

    dimes = Math.floor(rem_cents / dimes_val)
    rem_cents = rem_cents % dimes_val

    nickels = Math.floor(rem_cents / nickels_val)
    rem_cents = rem_cents % nickels_val

    pennies = rem_cents / pennies_val
    rem_cents = rem_cents % pennies_val

    let coins = [quarters, dimes, nickels, pennies]

    return coins

}

//question 2
export function stretched(str){
    let newstr = str.replaceAll(" ", "")
    let strArray = [...newstr]
    let map = strArray.map((x, i) => x.repeat(i+1))
    return map.join('')
}

//question 3
export function powers(base, limit, func){

    let value = 1

    for (let i = 1; value <= limit; i++){
        func(value)
        value = Math.pow(base, i)
    }

}

//question 4
export function* powersGenerator(base, limit){
    let value = 1

    for (let i = 1; value <= limit; i++){
        yield value
        value = Math.pow(base, i)
    }
}


//question 5
export function say(word){

    let temp
    if(word !== undefined){
        temp = word
        let sayAgain
        return sayAgain = function(next_word){
            if(next_word !== undefined){
                temp = temp + " " + next_word
                return sayAgain
            }
            return temp
        }
    }
    return ''


}

//question 6
export function makeCryptoFunctions(cryptInfo){
    const e = function cipher(set){
        let cryptoCipher = crypto.createCipheriv(
            cryptInfo.using, 
            cryptInfo.forKey, 
            cryptInfo.withIV
        )
        let key = cryptoCipher.update(set)
        key = Buffer.concat([key, cryptoCipher.final()])
        let cryptostr = key.toString("hex")
        return cryptostr
    }
    const d = function decrypt(cryptostr) {
        let cipherstr = Buffer.from(cryptostr, "hex")
        let cryptoDecipher = crypto.createDecipheriv(
           cryptInfo.using, 
           cryptInfo.forKey, 
           cryptInfo.withIV
        )
        let decipherstr = cryptoDecipher.update(cipherstr)
   
        decipherstr = Buffer.concat([decipherstr, cryptoDecipher.final()])
   
        return decipherstr.toString()
       }
       return [e,d]
    
}

//question 7
export function topTenScorers(){
    return null
}

//question 8
export function interpret (){
    return null
}
