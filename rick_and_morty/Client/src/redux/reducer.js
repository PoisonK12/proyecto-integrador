import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
  myFavorites: [],
  allCharactersFav: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: payload,
        allCharactersFav: payload,
      };
    case REMOVE_FAV:
      return {
         ...state, myFavorites: payload,
         allCharactersFav: payload
        };

    case FILTER:
      const allCharactersFiltered = state.allCharactersFav.filter(character => character.gender === payload)
      return {
        ...state,
        myFavorites:
          payload === "allCharacters"
            ? [...state.allCharactersFav]
            : allCharactersFiltered
      }
    case ORDER:
      const allCharactersFavCopy = [...state.allCharactersFav]
      return {
        ...state,
        myFavorites:
          payload === "A"
            ? allCharactersFavCopy.sort((a, d) => a.id - d.id)
            : allCharactersFavCopy.sort((a, d) => d.id - a.id)
      }
    default:
      return { ...state };
  }
};

export default reducer;
