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
  if (list === undefined) return [makeTodo(content)]
  return [makeTodo(content), ...list]
}

export function deleteTodo(list: TodoListType, todo: TodoType): TodoListType {
  return list.filter((item) => todo.content !== item.content)
}

export function handleToggleDone(
  list: TodoListType,
  todo: TodoType
): TodoListType {
  const toggled = toggleTodoDone(todo)
  const newList = deleteTodo(list, todo)
  if (toggled.done) {
    return newList.length ? [...newList, toggled] : [toggled]
  }
  return newList.length ? [toggled, ...newList] : [toggled]
}
