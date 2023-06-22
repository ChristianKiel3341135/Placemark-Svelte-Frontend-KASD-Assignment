<script>
    import "leaflet/dist/leaflet.css";
    import { LeafletMap } from "../services/leaflet-map";
    import { onMount } from "svelte";
    import {placemarkApiService} from "../services/placemark-Api-Service.js";

    const mapConfig = {
        location: { lat: 49.013432, lng: 12.101624 },
        zoom: 8,
        minZoom: 1
    };

    onMount(async () => {
        const map = new LeafletMap("placemark-map", mapConfig);
        map.showZoomControl();
        map.showLayerControl();
        const placemarks = await placemarkApiService.getAllPlacemarks();
        console.log(placemarks);
        placemarks.forEach((placemark) => {
            addPlacemarkToMap(map,placemark)
        });

        async function addPlacemarkToMap(map, placemark) {
            placemark.category = await placemarkApiService.getCategory(placemark.categoryid);
            const placemarkStr = `Category: ${placemark.category.title} ${placemark.name}  ${placemark.description}`;
            map.addMarker({ lat: placemark.latitude, lng: placemark.longitude }, placemarkStr);
        }
    });
</script>

<div class="box" id="placemark-map" style="height:75vh"></div>
