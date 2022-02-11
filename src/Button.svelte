<script lang="ts">
  export let text: string
  export let type: 'submit' | 'button' = 'button'
  export let onClick: any = undefined
</script>

<button
  class="bg-purple-600 text-white p-2"
  {type}
  on:click={type === 'submit' ? null : onClick}>{text}</button
>
