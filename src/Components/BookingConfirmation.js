import React, { useReducer, createContext, useState } from 'react';

const Confirmation = ({formData}) => {
    return(
        <div>
            <h2>
                Thank you for choosing Little Lemon. Your Reservation is confirmed fo  {formData.resdate} at {formData.restime}. For questions please call 555-555-5555
            </h2>
        </div>
    )
}
export default Confirmation