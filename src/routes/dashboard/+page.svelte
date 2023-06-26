<script>
    import Header from '$lib/Header.svelte';
    import DashboardForm from '$lib/DashboardForm.svelte';
    import MainNavigator from "../../lib/MainNavigator.svelte";

</script>

<Header>
    <MainNavigator/>
</Header>

<div class="columns is-vcentered">
    <div class="column box has-text-centered">
        <h1 class="title is-4">Welcome! Categorization implemented in the Hapi/Handlebars Version!</h1>
        <h2>Just showing all Placemarks</h2>
        <DashboardForm />
    </div>
</div>
