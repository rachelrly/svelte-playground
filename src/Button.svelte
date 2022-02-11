<script lang="ts">
  export let text: string
  export let type: 'submit' | 'button' = 'button'
  export let onClick: any = undefined
  export let inverted: boolean = false
  const classes = {
    false: `bg-purple-800 text-white border-purple-800`,
    true: `bg-white text-purple-800 border-purple-800`
  }
</script>

<button
  class="{classes[`${inverted}`]} px-2 py-0"
  {type}
  on:click={type === 'submit' ? null : onClick}>{text}</button
>
