import {data} from "./recipes";

export async function SeedRecipes() {
    await fetch('https://restapi.fr/api/recipes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}