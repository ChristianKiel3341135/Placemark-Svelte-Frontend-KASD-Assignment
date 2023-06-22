<script>
    import { beforeUpdate } from "svelte";
    import Header from "$lib/Header.svelte";
    import MainNavigator from "$lib/MainNavigator.svelte";
    import PlacemarkMap from "../../lib/PlacemarkMap.svelte";
    import {placemarkApiService} from "../../services/placemark-Api-Service";

    beforeUpdate(() => {
        //placemarkApiService.checkPageRefresh();
    });
</script>

<Header>
    <MainNavigator />
</Header>

<PlacemarkMap />
