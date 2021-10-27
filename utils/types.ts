export interface Section {
    id: string,
    createdAt: string,
    name: string,
    content: any,
    order: number
    updatedAt: string
}

interface EducationType {
    name: string,
    degree: string,
    year: number
}

export interface AboutType {
    portrait: string,
    body: string
    education: EducationType
    interests: string[]
}