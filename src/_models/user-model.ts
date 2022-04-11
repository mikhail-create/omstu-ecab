export type UserData = {
    email: string
    name: string
    password: string
    group: string
    roles: string[]
    fullData: {
        passportSeries: string,
        passportNumber: string,
        adress: string,
        previousEducation: string,
        previousEducationPlace: string,
        previousEducationYear: string,
        phone: string
    }[]
    files: {
        course: string
        name: string
        path: string
        semester: string
    }[]
}
