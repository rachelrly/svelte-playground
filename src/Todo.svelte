<script lang="ts">
  import { fly, fade } from 'svelte/transition'

  import type { TodoType } from './types'

  export let todo: TodoType
  export let handleToggleDone: (todo: TodoType) => void
</script>

<button
  in:fade={{ duration: 300 }}
  out:fly={{ y: window.innerHeight, duration: 1000, opacity: 0.5 }}
  class="flex flex-row justify-between align-center w-full p-2 mb-2"
  on:click={() => handleToggleDone(todo)}
>
  <span class={todo.done ? 'line-through' : 'no-underline text-purple-800'}
    >{todo.content}</span
  >
  <span>{todo.createdAt}</span>
</button>
