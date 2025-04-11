import React, { useReducer, createContext, useState } from 'react';
import BookingForm from './Components/BookingForm';



export const Context = createContext();
const initialTimes = {}

const reducer =(state, action) => {
    switch (action.type){
        case 'BOOK_TIME':
            const{date, time} = action.payload;
            return{
                ...state,
                [date]:(state[date] || ['17:00', '18:00', '19:00', '20:00']).filter(t => t !== time)
            };
            default:
                return state;
    }
}
const Main = () => {
    const [formData, setFormData] = useState({
        resdate:'',
        restime:'',
        guests:'',
        occasion:'',
    });
    const [availableTimes, dispatch] = useReducer(reducer,initialTimes);
    return (
        <Context.Provider value={{formData, setFormData, availableTimes, dispatch}}>
        <BookingForm/>
        </Context.Provider >

    );

        
    
};
export default Main;
