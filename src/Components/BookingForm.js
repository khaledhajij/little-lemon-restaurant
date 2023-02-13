import { Formik } from "formik";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

const BookingForm = (props) => {
  const validationSchema = Yup.object({
    date: Yup.date().required(),
    guests: Yup.number().min(1).max(10).required(),
    resTime: Yup.string().required(),
    occasion: Yup.string().required(),
  });
  const options = props.availableTimes.map((opt) => (
    <option>{`${opt}:00`}</option>
  ));

  return (
    <div className="BookingForm">
      <Formik
        initialValues={{
          date: "",
          resTime: "",
          guests: 0,
          occasion: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form style={{ display: "grid", maxWidth: 200, gap: 20 }}>
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              name="date"
              onChange={handleChange}
            />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" name="resTime" onChange={handleChange}>
              {options}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              name="guests"
              onChange={handleChange}
            />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" onChange={handleChange}>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
            <input
              type="submit"
              value="Make Your reservation"
              onSubmit={handleSubmit}
            />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
