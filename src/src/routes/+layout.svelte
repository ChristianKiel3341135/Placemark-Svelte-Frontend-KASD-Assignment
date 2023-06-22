<script>
    import { beforeUpdate } from "svelte";
    import { placemarkApiService } from "../services/placemark-Api-Service.js";

    beforeUpdate(() => {
        placemarkApiService.reload();
    });
</script>

<div class="container">
    <slot />
</div>
