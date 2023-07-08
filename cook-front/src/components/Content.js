import styles from './Content.module.scss';
import Recipe from "./Recipe";
import { data } from '../data/recipes';
import {useState} from "react";
function Content(){
    const recipes  = data;
    const [filter, setFilter] = useState('');

    const handleInput = (e) => {
        setFilter(e.target.value.trim().toLowerCase());
    }

    return (
        <div className="flex-fill container">
            <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
            <div className={`${styles.contentCard} d-flex flex-column card p-20 `}>
                <div className={`d-flex flex-row justify-content-center align-items-center my-30 ${styles.searchBar}`}>
                    <i className="fa-solid fa-magnifying-glass mr-15"></i>
                    <input type="text"  onInput={handleInput} placeholder="Rechercher une recette" className="flex-fill" />
                </div>
                <div className={styles.grid}>
                    {recipes.filter( r =>  r.title.toLowerCase().startsWith(filter)).map((recipe) => {
                        return <Recipe key={recipe._id} title={recipe.title} image={recipe.image} />
                    })}
                </div>
            </div>

        </div>);
}

export default Content;