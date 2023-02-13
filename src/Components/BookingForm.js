import React from "react";
import { useState } from "react";

const BookingForm = () => {

  const [form, setForm] = useState({
    date: "",
    resTime: "",
    guests: 0,
    occasion: "",
  });

  const handleChange = (e) => {
    setForm((form) => {
      return { ...form, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="BookingForm">
      <form style={{ display: "grid", maxWidth: 200, gap: 20 }}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={form.date}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="resTime"
          value={form.resTime}
          onChange={(e) => handleChange(e)}
        >
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          name="guests"
          value={form.guests}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={form.occasion}
          onChange={(e) => handleChange(e)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
};

export default BookingForm;
