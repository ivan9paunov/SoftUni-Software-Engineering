import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm.js";
import { useGetOneGames } from "../../hooks/useGames.js";
import gamesAPI from "../../api/games-api.js";

export default function GameEdit() {
    const navigate = useNavigate();
    const { gameId } = useParams();
    const [game] = useGetOneGames(gameId);
    const {
        changeHandler,
        submitHandler,
        values
    } = useForm(game, async (values) => {
        const isConfirmed = confirm('Are you sure you want to update this game?');

        if (isConfirmed) {
            await gamesAPI.update(gameId, values);
    
            navigate(`/games/${gameId}/details`);
        }
    }, true);

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={submitHandler}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={changeHandler}
                        value={values.title}
                    />

                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        onChange={changeHandler}
                        value={values.category}
                    />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min="1"
                        onChange={changeHandler}
                        value={values.maxLevel}
                    />

                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        onChange={changeHandler}
                        value={values.imageUrl}
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        onChange={changeHandler}
                        value={values.summary}
                    ></textarea>
                    <input className="btn submit" type="submit" value="Edit Game" />

                </div>
            </form>
        </section>
    );
}