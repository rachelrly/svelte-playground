import type { TodoListType, TodoType } from '../types'

export function makeTodo(content: string): TodoType {
  return {
    content,
    createdAt: new Date().toDateString(),
    done: false
  }
}

export function toggleTodoDone(todo: TodoType): TodoType {
  return { ...todo, done: !todo.done }
}

export function addTodo(list: TodoListType, content: string): TodoListType {
  return [makeTodo(content), ...list]
}

export function deleteTodo(list: TodoListType, todo: TodoType): TodoListType {
  return list.filter((item) => todo.content !== item.content)
}
