export function formatPrice(price){
    if(typeof price !== Number)
    return ("$"+price.toFixed(2))
}