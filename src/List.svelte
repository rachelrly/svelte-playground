<script lang="ts">
  import type { TodoListType, TodoType } from './types/Todo'
  import Todo from './Todo.svelte'

  export let todos: TodoListType
  export let handleToggleDone: (todo: TodoType) => void
</script>

<div class="flex-1 h-full w-full max-w-2xl">
  {#if todos && todos.length}
    <ul class="w-full flex-col flex justify-center">
      {#each todos as todo}
        <Todo {todo} {handleToggleDone} />
      {/each}
    </ul>
  {/if}
</div>
