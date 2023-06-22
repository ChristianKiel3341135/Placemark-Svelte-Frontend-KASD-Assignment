<script>
    import Chart from 'svelte-frappe-charts';
    import {placemarkApiService} from "../services/placemark-Api-Service.js";
    import {onMount} from "svelte";

    let currentUsers = [];
    let allRegisteredAmount;
    let placemarkAnalytics;
    let allCategories = [];
    let placemarkCount = [];
    let userVsAdminAmount = {
        labels: ["Normal User","Admin"],
        datasets: [
            {
                values: [0,0]
            }
        ]
    };
    onMount(async () => {
        currentUsers = await placemarkApiService.getAllUsers();
        allRegisteredAmount = {
            labels: ["Registered Users"],
            datasets: [
                {
                    values: [currentUsers.length]
                }
            ]
        };

        currentUsers.forEach((user) => {
           if(!user.isAdmin){
                userVsAdminAmount.datasets[0].values[0] += 1;
           }
           else{
               userVsAdminAmount.datasets[0].values[1] += 1;
           }
        });

        allCategories = await placemarkApiService.getAllCategories();
        const allPlacemarks = await placemarkApiService.getAllPlacemarks();
        let categoryTitles = [];
        for (let i = 0; i < allCategories.length; i++) {
            categoryTitles[i] = allCategories[i].title;
        }
        console.log(categoryTitles);
        let categoryCounter = 0;
        for (let i = 0; i < allCategories.length; i++) {
            categoryCounter = 0;
            for (let j = 0; j < allPlacemarks.length; j++) {
                if(allCategories[i]._id === allPlacemarks[j].categoryid){
                    categoryCounter++;
                }
            }
            placemarkCount[i] = categoryCounter;
        }
        placemarkAnalytics = {
            labels: categoryTitles,
            datasets: [
                {
                    values: placemarkCount
                }
            ]
        };


    });

</script>

<h1 class="is-size-5">User Analytics</h1>
<div class="columns is-vcentered">
        <div class="column">
            <Chart data={allRegisteredAmount} type="bar" />
        </div>

        <div class="column">
            <table class="table is-striped is-fullwidth">
                <thead>
                <tr>
                    <th></th>
                    <th>Nr.</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Emailadress</th>
                </tr>
                </thead>
                <tbody>
                {#if {currentUsers}}
                    {#each currentUsers as user, i}
                        <tr>
                            <th><i class="fas fa-user"></i></th>
                            <th>{i+1}</th>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                        </tr>
                    {/each}
                {/if}
                </tbody>
            </table>
        </div>

    <div class="column">
        <Chart data={userVsAdminAmount} type="pie" />
    </div>
</div>

<h1 class="is-size-5">Placemark Analytics</h1>
<div class="columns is-vcentered">

    <div class="column">
        <Chart data={placemarkAnalytics} type="pie" />
    </div>

    <div class="column">
        <table class="table is-striped is-fullwidth">
            <thead>
            <tr>
                <th>Nr.</th>
                <th>Title</th>
                <th>Placemarks in Category</th>
            </tr>
            </thead>
            <tbody>
            {#if {allCategories}}
                {#each allCategories as category, i}
                    <tr>
                        <th>{i+1}</th>
                        <td>{category.title}</td>
                        <td>{placemarkCount[i]}</td>
                    </tr>
                {/each}
            {/if}
            </tbody>
        </table>
    </div>

</div>