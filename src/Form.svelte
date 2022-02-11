<script lang="ts">
  import Button from './Button.svelte'
  export let onClick: any
  export let error: string
</script>

<form
  class="flex flex-col px-2 items-center justify-center"
  on:submit|preventDefault={onClick}
>
  <div class="h-3">
    {#if error}
      <span class="text-red-600">{error}</span>
    {/if}
  </div>
  <label>
    <input name="todo" type="text" placeholder="What are you doing today?" />
  </label>
  <Button text="Add +" type="submit" />
</form>
