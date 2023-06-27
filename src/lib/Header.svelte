<script>
    import TitleBar from '$lib/Titlebar.svelte';
</script>

<div class="columns is-vcentered">
    <div class="column is-two-thirds">
        <TitleBar title={'Placemark'} subTitle={'Explore the World'} />
    </div>
    <div class="column">
        <slot/>
    </div>
</div>
