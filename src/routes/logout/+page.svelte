<script>
    import { goto } from "$app/navigation";
    import {placemarkApiService} from "../../services/placemark-Api-Service.js";

    placemarkApiService.logout();
    goto("/");
</script>
