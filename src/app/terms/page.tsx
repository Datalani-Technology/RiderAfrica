import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Rider Africa Terms and Conditions governing use of the platform.",
};

export default function TermsPage() {
  return (
    <PolicyLayout
      title="Terms & Conditions"
      subtitle="Please read these terms carefully before using the Rider Africa platform."
      lastUpdated="June 2026"
    >
      <h2>1. Introduction</h2>
      <p>
        These Terms and Conditions (&quot;Terms&quot;) govern your use of the Rider Africa
        mobile application and website (&quot;Platform&quot;), operated by Rider Africa
        (&quot;we&quot;, &quot;us&quot;, or &quot;the Company&quot;), registered and operating in Namibia. By
        downloading, accessing, or using our Platform, you agree to be bound
        by these Terms.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 18 years of age to create an account and use the
        Rider Africa Platform. By using the Platform, you confirm that you meet
        this requirement and that you have the legal capacity to enter into a
        binding agreement under Namibian law.
      </p>

      <h2>3. Services Provided</h2>
      <p>
        Rider Africa provides an on-demand platform connecting customers with
        independent driver-partners for the following services:
      </p>
      <ul>
        <li>Package and parcel delivery</li>
        <li>Passenger transport</li>
        <li>Grocery and essentials delivery</li>
        <li>Valuables and pawn item transport</li>
      </ul>
      <p>
        Rider Africa acts as a technology intermediary and does not itself
        provide transport or courier services. The drivers are independent
        contractors and not employees of Rider Africa.
      </p>

      <h2>4. User Accounts</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account
        credentials. You agree to notify Rider Africa immediately of any
        unauthorised use of your account. Rider Africa will not be liable for
        any loss arising from unauthorised use of your account.
      </p>

      <h2>5. Bookings and Orders</h2>
      <p>
        All service requests made through the Platform constitute a binding
        order once a driver accepts the request. Customers agree to be present
        at the stated pickup location within a reasonable time of the driver
        arriving. Failure to comply may result in a cancellation fee as
        described in our Cancellation Policy.
      </p>

      <h2>6. Pricing and Payment</h2>
      <p>
        Fare estimates are provided prior to booking. Final fares may vary
        based on actual distance, wait time, and service type. Prices are
        displayed in Namibian Dollars (N$). Payment may be made by cash, card,
        mobile money, or in-app wallet, as available. Rider Africa reserves
        the right to amend pricing at any time with reasonable notice.
      </p>

      <h2>7. Prohibited Conduct</h2>
      <p>Users must not:</p>
      <ul>
        <li>Use the Platform for any unlawful purpose</li>
        <li>Transport prohibited or illegal items</li>
        <li>
          Harass, abuse, or threaten drivers or other users
        </li>
        <li>
          Provide false information during registration or booking
        </li>
        <li>
          Attempt to manipulate pricing or the matching algorithm
        </li>
      </ul>
      <p>
        Violation of these prohibitions may result in immediate suspension or
        permanent termination of your account.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by Namibian law, Rider Africa shall not
        be liable for any indirect, incidental, or consequential damages
        arising from your use of the Platform or services. Our total liability
        to you in any circumstances shall not exceed the amount paid by you for
        the specific service giving rise to the claim.
      </p>

      <h2>9. Intellectual Property</h2>
      <p>
        All content, trademarks, and intellectual property on the Rider Africa
        Platform are owned by or licensed to Rider Africa. You may not
        reproduce, distribute, or create derivative works without prior written
        consent.
      </p>

      <h2>10. Amendments</h2>
      <p>
        Rider Africa reserves the right to amend these Terms at any time.
        Updated Terms will be posted on this page with a revised effective
        date. Continued use of the Platform after changes constitutes
        acceptance of the revised Terms.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the Republic of Namibia. Any
        disputes shall be resolved in the courts of Namibia.
      </p>

      <h2>12. Contact</h2>
      <p>
        For any questions regarding these Terms, please contact us at{" "}
        <strong>admin@riderafrica.com</strong> or call{" "}
        <strong>+264 81 469 8594</strong> / <strong>+264 81 732 7089</strong>.
      </p>
    </PolicyLayout>
  );
}
