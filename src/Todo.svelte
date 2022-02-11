<script lang="ts">
  import type { TodoType } from './types'

  export let todo: TodoType
  export let handleToggleDone: (todo: TodoType) => void
</script>

<button
  class="flex flex-row justify-between align-center w-full p-2 mb-2"
  on:click={() => handleToggleDone(todo)}
>
  <span class={todo.done ? 'line-through' : 'no-underline text-purple-800'}
    >{todo.content}</span
  >
  <span>{todo.createdAt}</span>
</button>
