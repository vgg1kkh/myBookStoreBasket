export function formatPrice(price){
    if(typeof price !== "number"){
        return Number(price) || 0
    }
    return ("$"+price.toFixed(2))
}