<script lang="ts">
  import type { TodoType } from './types'
  export let todo: TodoType
  // if todo is done, have strikethrough text
</script>

<div class="flex flex-row justify-between align-center p-2">
  <span>{todo.content}</span>
  <span>{todo.createdAt}</span>
</div>
