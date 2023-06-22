<script>
    import Header from '$lib/Header.svelte';
    import DashboardForm from '$lib/DashboardForm.svelte';
    import MainNavigator from "../../lib/MainNavigator.svelte";
    import Titlebar from "../../lib/Titlebar.svelte";

</script>

<Header>
    <MainNavigator/>
</Header>

<div class="columns is-vcentered">
    <div class="column box has-text-centered">
        <h1 class="title is-4">Welcome</h1>
        <DashboardForm />
    </div>
</div>
