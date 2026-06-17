import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Delivery & Fulfilment Policy",
  description: "Rider Africa Delivery and Fulfilment Policy — service timeframes and delivery terms.",
};

export default function DeliveryPolicyPage() {
  return (
    <PolicyLayout
      title="Delivery & Fulfilment Policy"
      subtitle="Our commitment to timely, safe, and reliable delivery of all orders."
      lastUpdated="June 2026"
    >
      <h2>1. Overview</h2>
      <p>
        This policy outlines the timeframes, conditions, and obligations that
        apply to all delivery and fulfilment services provided through the
        Rider Africa Platform.
      </p>

      <h2>2. Service Types and Delivery Timeframes</h2>

      <h3>2.1 Package & Parcel Delivery</h3>
      <ul>
        <li>
          <strong>Within the same city (e.g., Windhoek):</strong> 1–4 hours
          from driver pickup
        </li>
        <li>
          <strong>Between cities or towns:</strong> Same-day to next-day,
          depending on distance and driver availability
        </li>
        <li>
          <strong>Remote or rural areas:</strong> 1–3 business days (subject
          to route availability)
        </li>
      </ul>

      <h3>2.2 Passenger Transport</h3>
      <ul>
        <li>
          <strong>City rides:</strong> Driver arrives within 5–15 minutes of
          booking (subject to availability)
        </li>
        <li>
          <strong>Scheduled rides:</strong> Driver confirmed at least 30
          minutes before the requested time
        </li>
        <li>
          <strong>Long-distance trips:</strong> Journey durations vary; advance
          booking of at least 2 hours recommended
        </li>
      </ul>

      <h3>2.3 Grocery Delivery</h3>
      <ul>
        <li>
          <strong>Standard grocery delivery:</strong> 1–3 hours, depending on
          store distance and order complexity
        </li>
        <li>
          <strong>Large orders:</strong> Up to 4 hours
        </li>
      </ul>

      <h3>2.4 Valuables & Pawn Item Transport</h3>
      <ul>
        <li>
          <strong>Within city:</strong> 2–6 hours (senior driver assignment
          takes additional time)
        </li>
        <li>
          <strong>Between cities:</strong> Next business day
        </li>
      </ul>

      <h2>3. Proof of Delivery</h2>
      <p>
        All deliveries include a digital proof of delivery, which may include:
      </p>
      <ul>
        <li>Delivery confirmation timestamp</li>
        <li>GPS coordinates of delivery location</li>
        <li>Recipient signature (for valuables and high-value items)</li>
        <li>Delivery photo (optional, with recipient consent)</li>
      </ul>

      <h2>4. Failed Delivery Attempts</h2>
      <p>
        If a delivery cannot be completed because the recipient is unavailable
        or the address is incorrect:
      </p>
      <ul>
        <li>
          The driver will attempt to contact the sender and recipient via the
          platform
        </li>
        <li>
          If no contact is made within 15 minutes, the driver will return the
          item to the sender
        </li>
        <li>
          A re-delivery fee equal to the original delivery fee will apply for
          a second attempt
        </li>
      </ul>

      <h2>5. Prohibited Items</h2>
      <p>The following items may not be transported via Rider Africa:</p>
      <ul>
        <li>Illegal substances or contraband</li>
        <li>Firearms or ammunition (without prior written approval)</li>
        <li>Hazardous materials, flammable liquids, or explosives</li>
        <li>Live animals (without prior arrangement and appropriate packaging)</li>
        <li>Items that violate any Namibian law or regulation</li>
      </ul>

      <h2>6. Liability for Delays</h2>
      <p>
        Rider Africa is not liable for delays caused by:
      </p>
      <ul>
        <li>Traffic congestion or road closures</li>
        <li>Extreme weather conditions</li>
        <li>Incorrect or incomplete address information</li>
        <li>Recipient unavailability</li>
        <li>Force majeure events</li>
      </ul>
      <p>
        For eligible delays caused by driver fault, customers may request a
        partial refund per our Refund Policy.
      </p>

      <h2>7. Tracking</h2>
      <p>
        All active deliveries and rides can be tracked in real time through the
        Rider Africa app. Customers receive push notifications at key stages:
        driver assigned, driver en route, pickup confirmed, and delivery
        completed.
      </p>

      <h2>8. Contact for Delivery Issues</h2>
      <p>
        <strong>Email:</strong> admin@riderafrica.com<br />
        <strong>Phone / WhatsApp:</strong> +264 81 469 8594 / +264 81 732 7089<br />
        <strong>In-app support:</strong> Available 24/7 via the Help section
      </p>
    </PolicyLayout>
  );
}
