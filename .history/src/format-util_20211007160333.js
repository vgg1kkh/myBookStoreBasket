export function formatPrice(price){
    if(typeof price)
    return ("$"+price.toFixed(2))
}