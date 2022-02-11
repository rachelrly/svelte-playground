import type { TodoListType } from '../types'

const LOCAL_STORAGE_KEY = 'This is rachels todo app woooo'

export function getTodosLocalStorate(): TodoListType {
  const cache = window.localStorage.getItem(LOCAL_STORAGE_KEY)
  return cache ? JSON.parse(cache) : undefined
}

export function setTodosLocalStorage(todos: TodoListType) {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}
