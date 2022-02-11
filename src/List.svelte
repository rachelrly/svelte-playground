<script lang="ts">
  import type { TodoListType } from './types/Todo'
  export let todos: TodoListType
</script>

{#if todos !== undefined}
  <p>Create some todos to get started</p>
{:else}
  <h2>THIS SI SOME CONDITIONAL RENDERING YO</h2>
{/if}
