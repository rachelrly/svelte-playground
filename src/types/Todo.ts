export interface TodoType {
  content: string
  createdAt: string
  done: boolean
}

export type TodoListType = TodoType[] | undefined
