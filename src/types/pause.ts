export type Pause = {
    id: number;
    debdate: Date;
    time: number;
}


// Fake data for test
export const PAUSES: Pause[] = [
    ...Array(100).fill(null).map((_, i) => ({
        id: i + 1,
        debdate: new Date(Date.now() - Math.floor(Math.random() * 10000000000)),
        time: Math.floor(Math.random() * 10000000000),
    }))
]
