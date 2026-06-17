import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Refund & Returns Policy",
  description: "Rider Africa Refund and Returns Policy — N$-denominated refund rules and timelines.",
};

export default function RefundPage() {
  return (
    <PolicyLayout
      title="Refund & Returns Policy"
      subtitle="Our fair and transparent refund rules for all Rider Africa services."
      lastUpdated="June 2026"
    >
      <h2>1. Overview</h2>
      <p>
        Rider Africa is committed to fair and transparent refund practices. All
        amounts in this policy are denominated in Namibian Dollars (N$). This
        policy applies to all services provided through the Rider Africa
        Platform.
      </p>

      <h2>2. Eligible Refund Situations</h2>
      <p>You may be entitled to a full or partial refund in the following circumstances:</p>
      <ul>
        <li>
          <strong>Driver did not arrive:</strong> If a driver accepted your
          request but failed to arrive within a reasonable time and the booking
          was subsequently cancelled by the system, a full refund of any
          pre-payment will be issued within 3–5 business days.
        </li>
        <li>
          <strong>Service not completed:</strong> If a delivery or transport
          service was not completed due to a fault on the driver&apos;s side, a
          full refund of the service fee will be issued.
        </li>
        <li>
          <strong>Incorrect charges:</strong> If you were charged an amount
          that differs from the confirmed fare without a valid reason (e.g.,
          route deviation approved by you), a refund of the difference will be
          processed.
        </li>
        <li>
          <strong>Damaged or lost items:</strong> If a parcel or item was
          damaged or lost during a Rider Africa delivery, a refund of the
          declared value (subject to a maximum of N$ 500 unless additional
          insurance was purchased) will be assessed on a case-by-case basis.
        </li>
        <li>
          <strong>Duplicate payments:</strong> Duplicate charges will be
          refunded in full within 48 hours of verification.
        </li>
      </ul>

      <h2>3. Non-Refundable Situations</h2>
      <p>Refunds will <strong>not</strong> be issued in the following situations:</p>
      <ul>
        <li>Customer-initiated cancellations after the driver has departed to the pickup location (see Cancellation Policy)</li>
        <li>Completed services where no fault was found</li>
        <li>Delays caused by force majeure (traffic, weather, road conditions)</li>
        <li>Incorrect pickup or delivery information provided by the customer</li>
        <li>Items refused by the recipient</li>
      </ul>

      <h2>4. Refund Amounts</h2>
      <ul>
        <li>
          <strong>Full refund (100%)</strong> — driver no-show, service not
          started due to driver fault, duplicate charge
        </li>
        <li>
          <strong>Partial refund (50%)</strong> — service partially completed
          due to unforeseen circumstances
        </li>
        <li>
          <strong>Damage claims</strong> — assessed individually; maximum
          N$ 500 without declared insurance; up to N$ 5,000 with declared
          insurance (must be requested at time of booking)
        </li>
      </ul>

      <h2>5. How to Request a Refund</h2>
      <p>To request a refund:</p>
      <ul>
        <li>Contact us within <strong>48 hours</strong> of the service date</li>
        <li>Email <strong>admin@riderafrica.com</strong> or call <strong>+264 81 469 8594 / +264 81 732 7089</strong></li>
        <li>
          Include your booking reference number, description of the issue, and
          supporting evidence (photos if applicable)
        </li>
      </ul>

      <h2>6. Refund Processing Times</h2>
      <ul>
        <li><strong>Card payments:</strong> 3–7 business days</li>
        <li><strong>Mobile money:</strong> 1–3 business days</li>
        <li><strong>In-app wallet:</strong> Same day</li>
        <li><strong>Cash payments:</strong> Not refundable in cash; credit issued to in-app wallet</li>
      </ul>

      <h2>7. Disputes</h2>
      <p>
        If you are unsatisfied with our refund decision, you may escalate the
        matter in writing to <strong>admin@riderafrica.com</strong>. Rider
        Africa will review escalated disputes within 5 business days and
        provide a final written decision.
      </p>

      <h2>8. Contact</h2>
      <p>
        <strong>Email:</strong> admin@riderafrica.com<br />
        <strong>Phone / WhatsApp:</strong> +264 81 469 8594 / +264 81 732 7089<br />
        <strong>Address:</strong> Windhoek, Namibia
      </p>
    </PolicyLayout>
  );
}
