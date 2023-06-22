<script>
    import Header from '$lib/Header.svelte';
    import WelcomeNavigator from "../lib/WelcomeNavigator.svelte";
</script>

<Header>
    <WelcomeNavigator/>
</Header>

<div class="columns is-vcentered content">
    <div class="column has-text-centered">
        <img width="300" src="/poi-icon.png" alt="poi-icon" />
    </div>
    <div class="column">
        <h1 class="title">Find your next Point of Interest</h1>
        <p>PlaceMark helps you to find out what there is to see and experience out in the wide World!</p>
    </div>
</div>
