<script lang="ts">
  import type { TodoType } from './types'

  export let todo: TodoType
  export let handleToggleDone: (todo: TodoType) => void
  let line = 'no-underline'
  $: {
    line = todo.done ? 'line-through' : 'no-underline'
  }
</script>

<button
  class="flex flex-row justify-between align-center w-full p-2 mb-2"
  on:click={() => handleToggleDone(todo)}
>
  <span class={line}>{todo.content}</span>
  <span>AM I DONE?? {todo.done}</span>
  <span>{todo.createdAt}</span>
</button>
