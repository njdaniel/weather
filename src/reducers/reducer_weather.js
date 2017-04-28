/**
 * Created by nicholas on 4/21/17.
 */
import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // Add to end
            // return state.concat([action.payload.data]);
            // Add to beginning
            return [ action.payload.data, ...state]; // [city, city, city]
    }
    return state;
}