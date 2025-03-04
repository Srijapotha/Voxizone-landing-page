import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Voxizo Media",
};

export default async function PrivacyPage() {
  return (
    <article>
      <h1 id="privacy-policy">Privacy Policy</h1>
      <p>
        <strong>Last Updated On:</strong> 8th Dec 2024
      </p>
      <p>
        Voxizo Media (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
        operates the website{" "}
        <a href="https://www.voxizo.com">https://www.voxizo.com</a> (referred to
        as the &quot;Service&quot;). This Privacy Policy explains how we
        collect, use, and disclose your personal data when you use our Service,
        as well as the choices you have regarding your information. By using the
        Service, you consent to the collection and use of your data in
        accordance with this policy.
      </p>
      <hr />
      <h2 id="-definitions-">
        <strong>Definitions</strong>
      </h2>
      <ul>
        <li>
          <strong>Personal Data</strong>: Information that identifies an
          individual (e.g., name, email address).
        </li>
        <li>
          <strong>Usage Data</strong>: Information automatically collected
          during your interaction with the Service.
        </li>
        <li>
          <strong>Cookies</strong>: Files stored on your device to enhance user
          experience and track behavior.
        </li>
        <li>
          <strong>Data Controller</strong>: The entity responsible for
          determining how your data is processed.
        </li>
        <li>
          <strong>Service Providers</strong>: Third-party entities that help
          deliver our Service.
        </li>
        <li>
          <strong>Data Subject (or User)</strong>: Individuals using the
          Service.
        </li>
      </ul>
      <hr />
      <h2 id="-data-collection-and-use-">
        <strong>Data Collection and Use</strong>
      </h2>
      <p>
        We collect various types of data to improve and provide our Service:
      </p>
      <h3 id="-types-of-data-collected-">
        <strong>Types of Data Collected</strong>
      </h3>
      <ol>
        <li>
          <strong>Personal Data</strong>:
          <ul>
            <li>Email address</li>
            <li>First and last name</li>
            <li>Cookies and tracking data</li>
          </ul>
        </li>
        <li>
          <strong>Usage Data</strong>:<br />
          Automatically collected information like IP address, browser type,
          pages visited, and time spent on the site.
        </li>
      </ol>
      <hr />
      <h2 id="-how-we-use-your-data-">
        <strong>How We Use Your Data</strong>
      </h2>
      <p>Voxizo Media uses the information collected for purposes such as:</p>
      <ul>
        <li>Operating and maintaining the Service</li>
        <li>Notifying you about updates or changes</li>
        <li>Allowing participation in interactive features</li>
        <li>Providing customer support</li>
        <li>Monitoring service performance</li>
        <li>Detecting and resolving technical issues</li>
      </ul>
      <hr />
      <h2 id="-data-transfer-">
        <strong>Data Transfer</strong>
      </h2>
      <p>
        Your personal data may be stored and processed on systems located
        outside your state, province, or country. By using the Service, you
        agree to such transfers, even if the data protection laws differ from
        those in your jurisdiction.
      </p>
      <hr />
      <h2 id="-data-disclosure-">
        <strong>Data Disclosure</strong>
      </h2>
      <p>We may disclose your data in the following cases:</p>
      <ol>
        <li>
          <strong>Legal Requirements</strong>: When required by law or
          government authorities.
        </li>
        <li>
          <strong>Law Enforcement</strong>: To comply with legal obligations or
          enforce our terms of service.
        </li>
      </ol>
      <hr />
      <h2 id="-data-security-">
        <strong>Data Security</strong>
      </h2>
      <p>
        We prioritize the security of your information, but please note that no
        method of transmission over the internet or electronic storage is 100%
        secure.
      </p>
      <hr />
      <h2 id="-service-providers-">
        <strong>Service Providers</strong>
      </h2>
      <p>We work with third-party providers to enhance our Service by:</p>
      <ul>
        <li>Hosting and maintaining our platform</li>
        <li>Providing analytics and performance insights</li>
        <li>Assisting with customer support</li>
      </ul>
      <hr />
      <h2 id="-analytics-">
        <strong>Analytics</strong>
      </h2>
      <p>
        We use third-party analytics tools to monitor and understand how users
        interact with our Service.
      </p>
      <hr />
      <h2 id="-behavioral-remarketing-">
        <strong>Behavioral Remarketing</strong>
      </h2>
      <p>
        Voxizo Media may use remarketing services to show ads on third-party
        websites after you visit our Service.
      </p>
      <hr />
      <h2 id="-links-to-other-sites-">
        <strong>Links to Other Sites</strong>
      </h2>
      <p>
        Our Service may include links to external websites not operated by us.
        We are not responsible for the privacy practices or content of those
        sites.
      </p>
      <hr />
      <h2 id="-children-s-privacy-">
        <strong>Children&apos;s Privacy</strong>
      </h2>
      <p>
        Our Service is not intended for individuals under 18 years of age. We do
        not knowingly collect personal data from children.
      </p>
      <hr />
      <h2 id="-changes-to-this-privacy-policy-">
        <strong>Changes to This Privacy Policy</strong>
      </h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page, and you are encouraged to review it periodically.
      </p>
      <hr />
      <h2 id="-contact-us-">
        <strong>Contact Us</strong>
      </h2>
      <p>
        If you have any questions about this Privacy Policy, please reach out to
        us:
      </p>
      <ul>
        <li>
          <strong>Email</strong>: support@voxizo.com
        </li>
        <li>
          <strong>WhatsApp Support</strong>: +852 9168 5350
        </li>
      </ul>
    </article>
  );
}
