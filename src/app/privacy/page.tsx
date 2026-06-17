import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Rider Africa Privacy Policy — how we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      subtitle="Your privacy matters to us. Here is how Rider Africa handles your personal information."
      lastUpdated="June 2026"
    >
      <h2>1. Introduction</h2>
      <p>
        Rider Africa (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your
        personal information. This Privacy Policy explains how we collect, use,
        store, and share your data when you use the Rider Africa Platform in
        accordance with applicable Namibian data protection laws and
        international best practices.
      </p>

      <h2>2. Information We Collect</h2>
      <h3>2.1 Information You Provide</h3>
      <ul>
        <li>Name, email address, and phone number (registration)</li>
        <li>Profile photo (optional)</li>
        <li>Pickup and delivery addresses</li>
        <li>Payment information (processed securely — we do not store card numbers)</li>
        <li>Messages sent via our contact form</li>
      </ul>
      <h3>2.2 Information Collected Automatically</h3>
      <ul>
        <li>GPS location data (when the app is in use)</li>
        <li>Device type, operating system, and app version</li>
        <li>Usage data, including trips and delivery history</li>
        <li>IP address and cookies</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use your personal information to:</p>
      <ul>
        <li>Create and manage your account</li>
        <li>Match you with available drivers</li>
        <li>Process payments and send receipts</li>
        <li>Provide customer support</li>
        <li>Improve our Platform and services</li>
        <li>Send service notifications and updates</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>4. Location Data</h2>
      <p>
        The Rider Africa app collects real-time GPS location data during active
        service sessions to facilitate matching with nearby drivers and to
        provide route tracking. Location data is not collected when the app is
        not in active use. You may disable location access in your device
        settings, but this will impact the functionality of the Platform.
      </p>

      <h2>5. Sharing Your Information</h2>
      <p>
        We do not sell your personal data. We may share it with:
      </p>
      <ul>
        <li>
          <strong>Driver-partners</strong> — only the information necessary to
          complete your service (name, pickup/dropoff location, phone number)
        </li>
        <li>
          <strong>Payment processors</strong> — to process transactions securely
        </li>
        <li>
          <strong>Service providers</strong> — such as cloud hosting and
          analytics platforms, bound by confidentiality agreements
        </li>
        <li>
          <strong>Authorities</strong> — when required by law, court order, or
          to protect the safety of users
        </li>
      </ul>

      <h2>6. Data Retention</h2>
      <p>
        We retain your personal data for as long as your account is active and
        for a reasonable period thereafter as required by law. You may request
        deletion of your account and associated data at any time by contacting
        us.
      </p>

      <h2>7. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Object to processing of your data for marketing purposes</li>
        <li>Lodge a complaint with a data protection authority</li>
      </ul>

      <h2>8. Cookies</h2>
      <p>
        Our website uses cookies to improve your browsing experience, remember
        your preferences, and analyse traffic. You may accept or decline cookies
        via the banner displayed on your first visit. See our cookie settings
        for more detail.
      </p>

      <h2>9. Security</h2>
      <p>
        We implement industry-standard security measures including HTTPS
        encryption, access controls, and regular security reviews to protect
        your personal information from unauthorised access, disclosure, or
        loss.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with a revised effective date. We encourage you to
        review this page periodically.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        For privacy-related enquiries, please contact:{" "}
        <strong>admin@riderafrica.com</strong> | <strong>+264 81 469 8594</strong> / <strong>+264 81 732 7089</strong>
      </p>
    </PolicyLayout>
  );
}
