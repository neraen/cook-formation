import styles from './Recipe.module.scss';
import {useContext, useState} from "react";
import {ApiContext} from "../../../../context/ApiContext";
function Recipe({recipe : {title, image, liked, _id}, toggleLikedRecipe}){

    const BASE_URL_API = useContext(ApiContext);
    async function handleClick() {
        try {
            const response = await fetch(`${BASE_URL_API}/${_id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    liked: !liked
                })
            });
            if(response.ok){
                const updatedRecipe = await response.json();
                toggleLikedRecipe(updatedRecipe);
            }
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div onClick={ handleClick } className={ styles.recipe }>
            <div className={ styles.imageContainer }>
                <img src={ image } alt="poulet"/>
            </div>
            <div className={ `${styles.recipeTitle} d-flex flex-column align-items-center justify-content-center`}>
                <h3 className="mb-10">{ title }</h3>
                <i className={`fa-solid fa-heart ${ liked ? 'text-primary' : ''}`}></i>
            </div>
        </div>
    )
}

export default Recipe;