"use client";

import { useState } from "react";

export default function DurationCard() {

  const [selected, setSelected] = useState("30 Days");

  const options = [
    "7 Days",
    "30 Days",
    "6 Months",
    "1 Year",
    "Forever",
  ];

  return (
    <section className="paymentCard">

      <h2>Link Duration</h2>

      <div className="durationGrid">

        {options.map((item) => {

          return (

            <button
              key={item}
              type="button"
              className={
                selected === item
                  ? "selectedDuration"
                  : ""
              }
              onClick={() => {

                setSelected(item);

              }}
            >

              {item}

            </button>

          );

        })}

      </div>

    </section>
  );

}