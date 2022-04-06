export type TaskData = {
    readonly _id :string
    readonly groups: string[]
    readonly name: string
    readonly tasks: {
        readonly author: string
        readonly date: Date
        readonly description: string
        readonly file: string
    }[]
}