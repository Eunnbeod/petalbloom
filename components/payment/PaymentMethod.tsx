"use client";

import { useState } from "react";

export default function PaymentMethod() {

  const [selectedMethod, setSelectedMethod] = useState("QRIS");

  const methods = [
    "QRIS",
    "GoPay",
    "DANA",
    "ShopeePay",
    "Bank Transfer",
    "Paypal",
  ];

  return (

    <section className="paymentCard">

      <h2>Payment Method</h2>

      <div className="paymentGrid">

        {methods.map((method) => {

          return (

            <button
              key={method}
              type="button"
              className={
                selectedMethod === method
                  ? "selectedPayment"
                  : ""
              }
              onClick={() => {

                setSelectedMethod(method);

              }}
            >

              {method}

            </button>

          );

        })}

      </div>

    </section>

  );

}