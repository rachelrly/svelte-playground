<script lang="ts">
  import type { TodoListType } from './types/Todo'
  import { addTodo } from './utils'
  import Form from './Form.svelte'
  import List from './List.svelte'

  export let todos: TodoListType = undefined
  export let error: string = undefined

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

  function handleToggleDone() {}
</script>

<main class="flex flex-col items-center justify-evenly p-3 ">
  <h1 class="text-red-500">Svelte/Tailwind/TypeScript Todo List</h1>
  <Form onClick={handleAddTodo} {error} />
  <List {todos} />
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
