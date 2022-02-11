<script lang="ts">
  import type { TodoListType } from './types/Todo'
  import Todo from './Todo.svelte'
  export let todos: TodoListType
</script>

{#if todos === undefined}
  <p>Create some todos to get started</p>
{:else}
  {#each todos as todo}
    <Todo {todo} />
  {/each}
{/if}
