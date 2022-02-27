export function parsePrice(price: number) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}