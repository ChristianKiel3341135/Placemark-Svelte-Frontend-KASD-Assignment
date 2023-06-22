<script>
    import Chart from 'svelte-frappe-charts';
    import {placemarkApiService} from "../services/placemark-Api-Service.js";
    import {onMount} from "svelte";

    let currentUsers = [];
    let data;
    onMount(async () => {
        currentUsers = await placemarkApiService.getAllUsers();
        data = {
            labels: ["Registered Users"],
            datasets: [
                {
                    values: [currentUsers.length]
                }
            ]
        };
    });

</script>

<div class="box">
    <p> Analytics here</p>
    <Chart data={data} type="bar" />

</div>
