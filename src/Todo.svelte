<script lang="ts">
  import type { TodoType } from './types'
  export let todo: TodoType
  const line = todo.done ? 'line-through' : 'no-underline'
</script>

<div class="flex flex-row justify-between align-center p-2">
  <span class={line}>{todo.content}</span>
  <span>{todo.createdAt}</span>
</div>
