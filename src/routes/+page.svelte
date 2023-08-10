<script lang="ts">
    export let data: { data: Array<String> };
    const emo: Array<String> = ["🤟", "💪", "🌟", "⬆️", "👈", "🎉"];
</script>

<ul class="text-[20px] w-[80%] mt-4">
    {#each data.data as name, idx}
        <li class="m-2">
            {idx + 1}. {name} - (
            <a
                href="/certificate?name={name}"
                class="text-blue-600 underline cursor-pointer"
                >COLLECT YOU CERTIFICATE {emo[
                    Math.floor(Math.random() * emo.length)
                ]}</a
            > )
        </li>
    {/each}
</ul>
