<script lang="ts">
  import Button from './Button.svelte'
</script>

<form class="flex flex-col px-2 items-center justify-center">
  <label>
    <input
      name="password"
      type="text"
      placeholder="What are you doing today?"
    />
  </label>
  <Button text="Add +" />
</form>
