import { DISHES } from '../shared/Dished';
import { COMMENTS } from "../shared/Comment";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotion";

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
}

export const Reducer = (state = initialState, action) => {
    return state;
}