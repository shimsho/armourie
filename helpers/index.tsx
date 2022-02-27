export function parsePrice(price: number) {
    return (price.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}