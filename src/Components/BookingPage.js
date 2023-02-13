import React from "react";
import { useState } from "react";
import BookingForm from "./BookingForm";
import NavBar from "./NavBar";

const BookingPage = () => {
  const [availableTimes, setAvailableTimes] = useState([
    17, 18, 19, 20, 21, 22, 23,
  ]);
  return (
    <div className="BookingPage">
      <NavBar />
      <h4>Book a table now</h4>
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
      />
    </div>
  );
};

export default BookingPage;
