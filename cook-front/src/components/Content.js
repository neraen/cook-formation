import styles from './Content.module.scss';
import Recipe from "./Recipe";
import { data } from '../data/recipes';
function Content(){
    const recipes  = data;

    return (
        <div className="flex-fill container">
            <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
            <div className={`${styles.contentCard} card p-20 `}>
                <div className={styles.grid}>
                    {recipes.map((recipe) => {
                        return <Recipe key={recipe._id} title={recipe.title} image={recipe.image} />
                    })}
                </div>
            </div>

        </div>);
}

export default Content;