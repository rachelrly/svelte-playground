export interface TodoType {
  content: string
  createdAt: string
  done: boolean
  id: string
}

export type TodoListType = TodoType[] | undefined
