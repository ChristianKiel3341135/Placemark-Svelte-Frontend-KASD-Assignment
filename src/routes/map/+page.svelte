<script>
    import { beforeUpdate } from "svelte";
    import Header from "$lib/Header.svelte";
    import MainNavigator from "$lib/MainNavigator.svelte";
    import PlacemarkMap from "../../lib/PlacemarkMap.svelte";
    import {placemarkApiService} from "../../services/placemark-Api-Service";
    import AddPlacemarkForm from "../../lib/AddPlacemarkForm.svelte";

    export const ssr = false;

</script>

<Header>
    <MainNavigator />
</Header>
<div class="columns">
    <div class="column">
        <PlacemarkMap />
    </div>

    <div class="column">
        <AddPlacemarkForm/>
    </div>

</div>



