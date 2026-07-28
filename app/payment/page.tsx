"use client";

import OrderSummary from "@/components/payment/OrderSummary";
import DurationCard from "@/components/payment/DurationCard";
import PaymentMethod from "@/components/payment/PaymentMethod";
import PaymentFooter from "@/components/payment/PaymentFooter";

import styles from "./payment.module.css"; 

export default function PaymentPage() {

  return (

    <main className={styles.paymentPage}>

      <div className={styles.paymentContainer}>

        <div className={styles.paymentHeader}>

          <p>Step 3 of 3</p>

          <h1>Complete Your Gift</h1>

          <span>
            Choose link duration and payment method.
          </span>

        </div>

        <OrderSummary /> 

        <DurationCard /> 

        <PaymentMethod />

        <PaymentFooter /> 

      </div>

    </main>

  );

}