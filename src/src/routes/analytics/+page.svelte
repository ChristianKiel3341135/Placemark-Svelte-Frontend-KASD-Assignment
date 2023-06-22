<script>
    import Header from '$lib/Header.svelte';
    import MainNavigator from "../../lib/MainNavigator.svelte";
    import AnalyticsForm from "../../lib/AnalyticsForm.svelte";

</script>

<Header>
    <MainNavigator/>
</Header>

<div class="columns is-vcentered">
    <div class="column box has-text-centered">
        <AnalyticsForm />
    </div>
</div>