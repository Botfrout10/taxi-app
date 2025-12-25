export type notes = {
    id: number;
    name: string;
    note: string;
}


// Fake data for test
export const NOTES: notes[] = [
    ...Array(100).fill(null).map((_, i) => ({
        id: i + 1,
        name: `Note ${i + 1}`,
        note: `test note ${i + 1}`,
    }))
]
