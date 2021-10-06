export interface Section {
    id: string,
    createdAt: string,
    name: string,
    content: any,
    order: number
    updatedAt: string
}

export interface AboutType {
    portrait: string,
    body: string
}