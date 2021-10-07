export function formatPrice(price){
    if(typeof price !== "number"){
        return Number(pr)
    }
    return ("$"+price.toFixed(2))
}