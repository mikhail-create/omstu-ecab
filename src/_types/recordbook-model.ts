export type RecordBookData = {
    readonly email: string
    readonly number: string
    readonly name: string
    readonly format: string
    readonly speciality: string
    readonly requisites: string
    readonly librarycard: string
    readonly semesters: {
        exams: {
            nameOfCourse: string,
            hours: number,
            rating: number,
            rate: string,
            date: string,
            teacher: string
        }[],

        offset: {
            nameOfCourse: string,
            hours: number,
            rating: number,
            rate: string,
            date: string,
            teacher: string
        }[]
    }[]
}