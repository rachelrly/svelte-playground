<script lang="ts">
  import Button from './Button.svelte'
  export let onClick: any
  export let onSubmit: any
  export let error: string
  export let hasTodos: boolean
</script>

<form
  class="flex flex-col items-center justify-center w-full max-w-2xl"
  on:submit|preventDefault={onSubmit}
>
  <div class="h-6 flex items-center">
    {#if error}
      <span class="text-red-800 text-xs text-center">{error}</span>
    {/if}
  </div>
  <fieldset class="flex flex-row w-full mb-3">
    <label class="mr-2 flex-1 w-full">
      <input
        class="p-1 w-full"
        name="todo"
        type="text"
        placeholder="What are you doing today?"
      />
    </label>
    <Button text="Add +" type="submit" />
    <span class="mr-1" />
    {#if hasTodos}
      <Button text="Clear" type="button" {onClick} inverted />
    {/if}
  </fieldset>
</form>
