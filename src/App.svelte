<script lang="ts">
  import type { TodoListType } from './types/Todo'
  import Form from './Form.svelte'
  import List from './List.svelte'

  export let name: string
  export let todos: TodoListType
</script>

<main class="flex flex-col items-center justify-evenly p-3 ">
  <h1 class="text-red-500">Hello {name}!</h1>
  <Form />
  <List {todos} />
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
