export type Course = {
    id: number;
    name: string;
    debdate: Date;
    time: number;
    price: number;
    payement: 'Cash' | 'Card' | string
}


// Fake data for test
export const COURSES : Course[] = [
    ...Array(100).fill(null).map((_, i) => ({
        id: i + 1,
        name: `Course ${i + 1}`,
        debdate: new Date(Date.now() - Math.floor(Math.random() * 10000000000)),
        time: Math.round(Math.random() * 1000000000),
        price: Math.round(Math.random() * 100),
        payement: ['Cash', 'Card', 'Credit'][Math.floor(Math.random() * 3)]
    }))
]
