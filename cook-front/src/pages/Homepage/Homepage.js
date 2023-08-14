import styles from './Homepage.module.scss';
import Recipe from "./components/Recipe/Recipe";
import {useContext, useEffect, useState} from "react";
import Loading from "../../components/Loading/Loading";
import {ApiContext} from "../../context/ApiContext";
function Homepage(){
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('');
    const BASE_URL_API = useContext(ApiContext);

    useEffect(() => {
        let cancel = false;
        async function fetchRecipes() {
            try{
                setLoading(true);
                const response = await fetch(BASE_URL_API);
                if(response.ok && !cancel){
                    const recipes = await response.json();
                    setRecipes(Array.isArray(recipes) ? recipes : [recipes]);
                    setLoading(false);
                }
            } catch (e) {
                console.error(e);
            }finally {
                setLoading(false);
            }
        }
        fetchRecipes();
        return () => {
            cancel = true;
        }
    }, [BASE_URL_API]);

    function updateRecipe(updatedRecipe) {
        setRecipes(recipes.map(recipe => recipe._id === updatedRecipe._id ? updatedRecipe : recipe));
    }

    const handleInput = (e) => {
        setFilter(e.target.value.trim().toLowerCase());
    }

    return (
        <div className="flex-fill container d-flex flex-column">
            <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
            <div className={`${styles.contentCard} flex-fill d-flex flex-column card p-20 mb-20`}>
                <div className={`d-flex flex-row justify-content-center align-items-center my-30 ${styles.searchBar}`}>
                    <i className="fa-solid fa-magnifying-glass mr-15"></i>
                    <input type="text"  onInput={handleInput} placeholder="Rechercher une recette" className="flex-fill" />
                </div>
                {loading ?
                    (
                       <Loading />
                    ) : <div className={styles.grid}>
                    {recipes.filter( r =>  r.title.toLowerCase().startsWith(filter)).map((recipe) => {
                        return <Recipe key={recipe._id} recipe={recipe} toggleLikedRecipe={ updateRecipe }/>
                    })}
                </div>}

            </div>

        </div>);
}

export default Homepage;