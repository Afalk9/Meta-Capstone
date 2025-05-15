import React, {useContext, useState} from "react";
import { Context } from "../Main";
import Confirmation from "./BookingConfirmation";
import { type } from "@testing-library/user-event/dist/type";


const BookingForm = () => {
    const{formData,setFormData, availableTimes,dispatch} = useContext(Context);
      const[submitted, setSubmitted] = useState(false) 
        const[error,setError] = useState("");

const handleChange =(e)=>{
    const{name, value} = e.target;
    setFormData((prev)=>
    ({...prev, [name]:value,}))
};
const handleSubmit = (e) => {
e.preventDefault();
const today = new Date();
const selectedDate =new Date(formData.resdate);
today.setHours(0,0,0,0);
selectedDate.setHours(0,0,0,0);

if(!formData.resdate || !formData.restime || !formData. guests || !formData.occasion){
    setError("Please fill out all fields");
    return;
}
if(parseInt(formData.guests ,10)<=1){
    setError("Reservation must befor more than 1 person");
    return;
}

if(selectedDate <=today){
    setError("Date must be in the future")
    return;
}
setError("");
dispatch({type:'BOOK_TIME',
    payload:{date: formData.resdate, time:formData.restime}});
setSubmitted(true)
alert(`Thank you for your submisson of a reservation on ${formData.resdate} at ${formData.restime} for ${formData.guests} guests for ${formData.occasion}` );
} ;
const timesForSelctedDate = availableTimes[formData.resdate] || ['17:00', '18:00', '19:00', '20:00'];


if(submitted) {
    return<Confirmation formData={formData}/>;
}
    return(
        <form className="bookingForm" onSubmit={handleSubmit}>
            <label htmlFor="resdate">Choose date</label>
            <input 
            type="date"
            id="resdate" 
            name="resdate" 
            value={formData.resdate} 
            onChange={handleChange}/>

            <label htmlFor="restime">Choose time</label>
            <select 
            id="restime" 
            name ="restime" 
            value={formData.restime}
            disabled={!formData.resdate}
            onChange={handleChange}>
                {timesForSelctedDate.map((time) => (
                    <option key={time} value={time}>{time}</option>
                ))}
               
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" 
            placeholder="1" 
            min="1" 
            max="100" 
            id="guests" 
            name="guests" 
            value={formData.guests}
            onChange={handleChange}/>

            <label htmlFor="occasion">Occasion</label>
            <select 
            id="occasion" 
            name="occasion" 
            value={formData.occasion}
            onChange={handleChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            {error&& <p style={{color:"red"}}>{error}</p>}
            <button type="submit"  className="submitButton">Make Your reservation</button>
        </form>

    )}

export default BookingForm
