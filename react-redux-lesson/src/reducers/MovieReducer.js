import { categories } from "../data";

const INITIAL_STATE = {
    categories: [...categories],
    selectedMovie: {},
    selectedCategory: {}
};

function MovieReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SELECT_MOVIE':
            return {
                ...state,
                selectedMovie: action.movie,
                selectedCategory: action.category
            };
        default:
            break;
    }
    return state;
}

export default MovieReducer;