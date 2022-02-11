<script lang="ts">
  import type { TodoListType, TodoType } from './types/Todo'
  import {
    addTodo,
    handleTodoListDone,
    getTodosLocalStorate,
    setTodosLocalStorage
  } from './utils'
  import Form from './Form.svelte'
  import List from './List.svelte'
  import { afterUpdate, onMount } from 'svelte'

  export let todos: TodoListType = undefined
  export let error: string = undefined

  onMount(() => {
    todos = getTodosLocalStorate()
  })

  afterUpdate(() => {
    setTodosLocalStorage(todos)
  })

  function handleAddTodo(event: any) {
    const todo = event.target.todo?.value
    if (todo) {
      todos = addTodo(todos, todo)
      event.target.todo.value = ''
      if (error) error = undefined
    } else {
      error = 'Could not add todo'
    }
  }

  function handleToggleDone(todo: TodoType): void {
    todos = handleTodoListDone(todos, todo)
  }
</script>

<main class="flex flex-col items-center justify-evenly h-screen p-3">
  <h1 class="text-black text-xl">Svelte/Tailwind/TypeScript Todo List</h1>
  <Form onClick={handleAddTodo} {error} />
  <List {todos} {handleToggleDone} />
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
