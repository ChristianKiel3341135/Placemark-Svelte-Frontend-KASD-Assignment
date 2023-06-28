<script>
    // import "leaflet/dist/leaflet.css";
    import { LeafletMap } from "../services/leaflet-map";
    import { onMount } from "svelte";
    import {placemarkApiService} from "../services/placemark-Api-Service.js";
    import {latestPlacemark} from "../stores.ts";

    const mapConfig = {
        location: { lat: 49.013432, lng: 12.101624 },
        zoom: 8,
        minZoom: 1
    };

    onMount(async () => {
        const map = new LeafletMap("placemark-map", mapConfig);
        map.showZoomControl();
        const allCategories = await placemarkApiService.getAllCategories();
        allCategories.forEach((category) =>{
            map.addLayerGroup(category.title);
        });

        map.showLayerControl();
        const placemarks = await placemarkApiService.getAllPlacemarks();
        console.log(placemarks);
        placemarks.forEach((placemark) => {
            addPlacemarkToMap(map,placemark)
        });

        async function addPlacemarkToMap(map, placemark) {
            placemark.category = await placemarkApiService.getCategory(placemark.categoryid);
            const placemarkStr = `Category: ${placemark.category.title} ${placemark.name}  ${placemark.description}`;
            map.addMarker({ lat: placemark.latitude, lng: placemark.longitude }, placemarkStr, placemark.category.title);
        }

        latestPlacemark.subscribe((placemark) => {
            if (placemark && map) {
                addPlacemarkToMap(map, placemark);
            }
        });

    });
</script>

<div class="box" id="placemark-map" style="height:75vh"></div>
