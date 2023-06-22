<script>
    import {onMount} from "svelte";
    import {placemarkApiService} from "../services/placemark-Api-Service.js";

    let allPlacemarks = [];
    onMount(async () => {
        allPlacemarks = await placemarkApiService.getAllPlacemarks();
    });
</script>

    {#each allPlacemarks as placemark}
        <div class="columns mt-6">
            <div class="box box-link-hover-shadow">
                <h2 class="title">
                    {placemark.name}
                    <i class="fas fa-map-pin" style="color:rgb(196,14,21)"></i>
                </h2>
                <p>{placemark.description}</p>
                <p class="has-text-weight-bold">Lat. {placemark.latitude} Lgt. {placemark.longitude}</p>
            </div>
        </div>
    {/each}
