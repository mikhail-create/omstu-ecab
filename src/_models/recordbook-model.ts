export type RecordBookData = {
    readonly email: string
    readonly number: string
    readonly name: string
    readonly format: string
    readonly speciality: string
    readonly requisites: string
    readonly librarycard: string
    readonly semesters: {
        average: number,
        rating: number,
        attendance: number,
        exams: {
            nameOfCourse: string,
            hourse: number,
            rating: number,
            rate: string,
            date: string,
            teacher: string
        }[],

        offset: {
            nameOfCourse: string,
            hourse: number,
            rating: number,
            rate: string,
            date: string,
            teacher: string
        }[]
    }[]
}