export function formatPrice(price){
    if(typeof price !== "number"){
        return N
    }
    return ("$"+price.toFixed(2))
}