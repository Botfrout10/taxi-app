export type Frais = {
    id: number;
    price: number;
    payement: 'Cash' | 'Card' | string
}


// Fake data for test
export const FRAIS : Frais[] = [
    ...Array(100).fill(null).map((_, i) => ({
        id: i + 1,
        price: Math.round(Math.random() * 100),
        payement: ['Cash', 'Card', 'Credit'][Math.floor(Math.random() * 3)]
    }))
]
