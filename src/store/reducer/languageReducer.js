const defaultState = [];

const ADD_CARD = 'ADD_CARD';
const CHANGE_CARD = 'CHANGE_CARD';
const DELETE_CARD = 'DELETE_CARD';
const CHANGE_ENG_LANGUAGE = 'CHANGE_ENG_LANGUAGE';
const CHANGE_RUS_LANGUAGE = 'CHANGE_RUS_LANGUAGE';

export const addCard = (payload) => ({ type: ADD_CARD, payload });
export const changeCard = (payload) => ({ type: CHANGE_CARD, payload });
export const deleteCard = (payload) => ({ type: DELETE_CARD, payload });
export const changeEngLanguage = () => ({ type: CHANGE_ENG_LANGUAGE });
export const changeRusLanguage = () => ({ type: CHANGE_RUS_LANGUAGE })

export const languageReducer = (state = defaultState, action) => {
    if (action.type === ADD_CARD) {
        return [...state, {
            ...action.payload,
            id: Date.now(),
            type: 'ru'
        }]
    } else if (action.type === CHANGE_CARD) {
        return state.map(el => {
            if (el.id === action.payload) {
                el.type = el.type === 'ru' ? 'en' : 'ru'
            }
            return el
        }) 
    } else if (action.type === DELETE_CARD) {
        return state.filter(el => el.id !== action.payload)
    } else if (action.type === CHANGE_ENG_LANGUAGE) {
        return state.map(el => {
            el.type = 'en';
            return el
        })
    } else if (action.type === CHANGE_RUS_LANGUAGE) {
        return state.map(el => {
            el.type = 'ru';
            return el
        })
    } else {
        return state
    }
}
