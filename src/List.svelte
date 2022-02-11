<script lang="ts">
  import type { TodoListType, TodoType } from './types/Todo'
  import Todo from './Todo.svelte'

  export let todos: TodoListType
  export let handleToggleDone: (todo: TodoType) => void
</script>

<div class="flex-1 h-full w-full max-w-2xl flex justify-center">
  {#if todos === undefined}
    <p class="text-center text-4xl mb-10 self-center">
      Create some todos to get started
    </p>
  {:else}
    <ul class="w-full">
      {#each todos as todo}
        <Todo {todo} {handleToggleDone} />
      {/each}
    </ul>
  {/if}
</div>
