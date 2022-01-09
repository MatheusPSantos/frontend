<script>
    import { FeedbackStore } from "../stores";
    import { fade, scale } from "svelte/transition";
    import FeedbackItem from "./FeedbackItem.svelte";
    import { onDestroy, onMount } from "svelte";

    // let feedback = [];

    // FeedbackStore.subscribe((data) => (feedback = data));

    // const unsubscribe = FeedbackStore.onMount(() => {
    //     console.log("mounted");
    // });

    // onDestroy(() => {});
</script>

{#each $FeedbackStore as fb (fb.id)}
    <div in:scale out:fade>
        <FeedbackItem item={fb} />
    </div>
{/each}
