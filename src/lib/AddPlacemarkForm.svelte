<script>
    // @ts-nocheck

    import Coordinates from "./Coordinates.svelte";
    import {onMount} from "svelte";
    import {placemarkApiService} from "../services/placemark-Api-Service.js";

    let placemark_name;
    let description;
    let latitude;
    let longitude;
    let user;
    let categories = [];
    let selectedCategory;
    let message = "Fill out this form to create your Placemark";

    onMount(async () => {
        const loggedInUser = JSON.parse(localStorage.placemarkUser)
       user = await placemarkApiService.getUserByEmail(loggedInUser.email);
       console.log(user);
       categories = await placemarkApiService.getAllCategories();
       console.log(categories.title);
    });

    async function createPlacemarkForm(){
        console.log(categories.find((category) => category.title === selectedCategory));
        if(selectedCategory && placemark_name && description && user){
            let category = categories.find((category) => category.title === selectedCategory);
            const placemark = {
                name: placemark_name,
                description: description,
                latitude: latitude,
                longitude: longitude,
            }
            const succes = await placemarkApiService.createPlacemark(category._id, placemark, user._id);
            if(!succes){
                message ="Error occured - Placemark not created";
                return;
            }
            message = "Placemark succesfully created!"
        } else {
            message = "Please fill out every input field"
        }

    };
</script>

<form on:submit|preventDefault={createPlacemarkForm}>
    <div class="field">
        <label class="label" for="placemark_name">Enter Name</label>
        <input bind:value={placemark_name} class="input" id="placemark_name" name="placemark_name" type="text" />
    </div>
    <div class="field">
        <label class="label" for="description">Enter Description</label>
        <input bind:value={description} class="input" id="description" name="descriptipn" type="text" />
    </div>

    <div class="field">
        <div class="select">
            <select bind:value={selectedCategory}>
                {#each categories as category}
                    <option>{category.title}</option>
                {/each}
            </select>
        </div>
    </div>

    <Coordinates bind:latitude bind:longitude />

    <div class="box">
        {message}
    </div>

    <div class="field">
        <div class="control">
            <button class="button is-link is-light">Create Placemark</button>
        </div>
    </div>
</form>
