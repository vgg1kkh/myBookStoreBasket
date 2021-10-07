export function formatPrice(price){
    if(typeof price !== "number"){
        return Number(price)
    }
    return ("$"+price.toFixed(2))
}