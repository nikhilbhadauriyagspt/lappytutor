import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-44 pb-24 font-sans text-zinc-600">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Heading */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1.5px] bg-blue-600 rounded-full" />
            <span className="text-[11px] font-black text-blue-600 tracking-[0.3em] uppercase">
              Privacy Center
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 uppercase leading-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest">Last updated: April 28, 2026</p>
        </div>

        <div className="space-y-12 leading-relaxed text-[15px]">
          <section className="space-y-6">
            <p>
              This Privacy Notice for <strong>Get Your Driver</strong> ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li>Visit our website at <a href="http://getyourdriver.shop/" className="text-blue-600 font-bold hover:underline">http://getyourdriver.shop/</a> or any website of ours that links to this Privacy Notice</li>
              <li>Use Get Your Driver. At Get Your Driver, we focus on technical accuracy and timely service. Our business is built on providing diagnostic clarity and performing repairs that aim to extend the lifecycle of your hardware components. We serve our clients with a commitment to maintaining standard operating procedures.</li>
              <li>Engage with us in other related ways, including any marketing or events</li>
            </ul>
            <p>
              Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:info@getyourdriver.shop" className="text-blue-600 font-bold hover:underline">info@getyourdriver.shop</a>.
            </p>
          </section>

          <section className="bg-zinc-50 p-8 md:p-12 rounded-[2.5rem] border border-zinc-100 shadow-sm">
            <h2 className="text-xl font-black text-zinc-900 uppercase mb-8">SUMMARY OF KEY POINTS</h2>
            <div className="space-y-6 text-sm">
              <p><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</p>
              <p><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</p>
              <p><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</p>
              <p><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.</p>
              <p><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties.</p>
              <p><strong>How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.</p>
              <p><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</p>
              <p><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-xl font-black text-zinc-900 uppercase">TABLE OF CONTENTS</h2>
            <nav className="flex flex-col gap-3 text-sm font-bold text-blue-600 uppercase tracking-widest">
              <a href="#1" className="hover:underline">1. WHAT INFORMATION DO WE COLLECT?</a>
              <a href="#2" className="hover:underline">2. HOW DO WE PROCESS YOUR INFORMATION?</a>
              <a href="#3" className="hover:underline">3. WHAT LEGAL BASES DO WE RELY ON?</a>
              <a href="#4" className="hover:underline">4. WHEN AND WITH WHOM DO WE SHARE?</a>
              <a href="#5" className="hover:underline">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a>
              <a href="#6" className="hover:underline">6. HOW LONG DO WE KEEP YOUR INFORMATION?</a>
              <a href="#7" className="hover:underline">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</a>
              <a href="#8" className="hover:underline">8. DO WE COLLECT INFORMATION FROM MINORS?</a>
              <a href="#9" className="hover:underline">9. WHAT ARE YOUR PRIVACY RIGHTS?</a>
              <a href="#10" className="hover:underline">10. CONTROLS FOR DO-NOT-TRACK FEATURES</a>
              <a href="#11" className="hover:underline">11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a>
              <a href="#12" className="hover:underline">12. DO WE MAKE UPDATES TO THIS NOTICE?</a>
              <a href="#13" className="hover:underline">13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>
              <a href="#14" className="hover:underline">14. HOW CAN YOU REVIEW, UPDATE, OR DELETE DATA?</a>
            </nav>
          </section>

          <div className="space-y-16">
            {/* Section 1 */}
            <section id="1" className="space-y-6">
              <h3 className="text-xl font-black text-zinc-900 uppercase border-b border-zinc-100 pb-4">1. WHAT INFORMATION DO WE COLLECT?</h3>
              <p className="font-bold text-zinc-900 uppercase text-sm tracking-widest">Personal information you disclose to us</p>
              <p><em>In Short: We collect personal information that you provide to us.</em></p>
              <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
              <p><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following: names, phone numbers, email addresses.</p>
              <p><strong>Sensitive Information.</strong> We do not process sensitive information.</p>
              
              <p className="font-bold text-zinc-900 uppercase text-sm tracking-widest mt-8">Information automatically collected</p>
              <p><em>In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</em></p>
              <p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
              <p><strong>Location Data.</strong> We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.</p>
            </section>

            {/* Section 2 */}
            <section id="2" className="space-y-6">
              <h3 className="text-xl font-black text-zinc-900 uppercase border-b border-zinc-100 pb-4">2. HOW DO WE PROCESS YOUR INFORMATION?</h3>
              <p><em>In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We process the personal information for the following purposes listed below. We may also process your information for other purposes only with your prior explicit consent.</em></p>
              <p>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="3" className="space-y-6">
              <h3 className="text-xl font-black text-zinc-900 uppercase border-b border-zinc-100 pb-4">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</h3>
              <p><em>In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.</em></p>
              <p><strong>If you are located in Canada, this section applies to you.</strong></p>
              <p>We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.</p>
              <p>In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
                <li>For investigations and fraud detection and prevention</li>
                <li>For business transactions provided certain conditions are met</li>
                <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
                <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
                <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
                <li>If collection and use with consent would compromise the availability or accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of laws</li>
                <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court</li>
                <li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which it was produced</li>
                <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
                <li>If the information is publicly available and is specified by regulations</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="4" className="space-y-6">
              <h3 className="text-xl font-black text-zinc-900 uppercase border-b border-zinc-100 pb-4">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h3>
              <p><em>In Short: We may share information in specific situations described in this section and/or with the following third parties.</em></p>
              <p>We may need to share your personal information in the following situations:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="5" className="space-y-6">
              <h3 className="text-xl font-black text-zinc-900 uppercase border-b border-zinc-100 pb-4">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h3>
              <p><em>In Short: We may use cookies and other tracking technologies to collect and store your information.</em></p>
              <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.</p>
              <p>We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements. To the extent these online tracking technologies are deemed to be a "sale"/"sharing" under applicable US state laws, you can opt out by submitting a request as described below.</p>
              <p><strong>Google Analytics:</strong> We may share your information with Google Analytics to track and analyze the use of the Services. To opt out, visit <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline">https://tools.google.com/dlpage/gaoptout</a>.</p>
            </section>

            {/* Section 6 */}
            <section id="6" className="space-y-6">
              <h3 className="text-xl font-black text-zinc-900 uppercase border-b border-zinc-100 pb-4">6. HOW LONG DO WE KEEP YOUR INFORMATION?</h3>
              <p><em>In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</em></p>
              <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).</p>
            </section>

            {/* Section 7 */}
            <section id="7" className="space-y-6">
              <h3 className="text-xl font-black text-zinc-900 uppercase border-b border-zinc-100 pb-4">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h3>
              <p><em>In Short: We aim to protect your personal information through a system of organizational and technical security measures.</em></p>
              <p>We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.</p>
            </section>

            {/* Section 8 */}
            <section id="8" className="space-y-6">
              <h3 className="text-xl font-black text-zinc-900 uppercase border-b border-zinc-100 pb-4">8. DO WE COLLECT INFORMATION FROM MINORS?</h3>
              <p><em>In Short: We do not knowingly collect data from or market to children under 18 years of age.</em></p>
              <p>We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or the equivalent age as specified by law in your jurisdiction.</p>
            </section>

            {/* Section 9 */}
            <section id="9" className="space-y-6">
              <h3 className="text-xl font-black text-zinc-900 uppercase border-b border-zinc-100 pb-4">9. WHAT ARE YOUR PRIVACY RIGHTS?</h3>
              <p><em>In Short: Depending on your state of residence in the US or in some regions, such as Canada, you have rights that allow you greater access to and control over your personal information.</em></p>
              <p>In some regions (like Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. You can make such a request by contacting us at <a href="mailto:info@getyourdriver.shop" className="text-blue-600 font-bold hover:underline">info@getyourdriver.shop</a>.</p>
            </section>

            {/* Section 10 */}
            <section id="10" className="space-y-6">
              <h3 className="text-xl font-black text-zinc-900 uppercase border-b border-zinc-100 pb-4">10. CONTROLS FOR DO-NOT-TRACK FEATURES</h3>
              <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.</p>
            </section>

            {/* Section 11 */}
            <section id="11" className="space-y-6">
              <h3 className="text-xl font-black text-zinc-900 uppercase border-b border-zinc-100 pb-4">11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h3>
              <p><em>In Short: If you are a resident of Ohio, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have specific rights regarding your personal information.</em></p>
              
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left border-collapse border border-zinc-200">
                  <thead>
                    <tr className="bg-zinc-100">
                      <th className="p-3 border border-zinc-200 font-black uppercase text-xs">Category</th>
                      <th className="p-3 border border-zinc-200 font-black uppercase text-xs">Examples</th>
                      <th className="p-3 border border-zinc-200 font-black uppercase text-xs">Collected</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    <tr>
                      <td className="p-3 border border-zinc-200 font-bold">A. Identifiers</td>
                      <td className="p-3 border border-zinc-200">Real name, alias, address, telephone, IP address, email, account name</td>
                      <td className="p-3 border border-zinc-200">NO</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-zinc-200 font-bold">B. Customer Records</td>
                      <td className="p-3 border border-zinc-200">Name, contact info, education, employment, financial info</td>
                      <td className="p-3 border border-zinc-200">NO</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-zinc-200 font-bold">C. Protected Classifications</td>
                      <td className="p-3 border border-zinc-200">Gender, age, race, ethnicity, demographic data</td>
                      <td className="p-3 border border-zinc-200">NO</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-zinc-200 font-bold">D. Commercial Info</td>
                      <td className="p-3 border border-zinc-200">Transaction info, purchase history, financial details</td>
                      <td className="p-3 border border-zinc-200">NO</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-zinc-200 font-bold">L. Sensitive Personal Info</td>
                      <td className="p-3 border border-zinc-200">Social security numbers, driver's license, passport numbers</td>
                      <td className="p-3 border border-zinc-200">NO</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p><strong>Your Rights:</strong> You have rights under certain US state data protection laws including the right to know, access, correct, delete, and obtain a copy of your personal data. To exercise these rights, contact us at <a href="mailto:info@getyourdriver.shop" className="text-blue-600 font-bold hover:underline">info@getyourdriver.shop</a>.</p>
            </section>

            {/* Section 12 */}
            <section id="12" className="space-y-6">
              <h3 className="text-xl font-black text-zinc-900 uppercase border-b border-zinc-100 pb-4">12. DO WE MAKE UPDATES TO THIS NOTICE?</h3>
              <p><em>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></p>
              <p>We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. We encourage you to review this Privacy Notice frequently.</p>
            </section>

            {/* Section 13 */}
            <section id="13" className="p-10 bg-zinc-900 rounded-[2.5rem] text-white">
              <h3 className="text-xl font-black uppercase mb-6">13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h3>
              <p className="text-zinc-400 mb-4 text-sm uppercase tracking-widest leading-loose">
                If you have questions or comments about this notice, you may email us at:
              </p>
              <p className="text-2xl font-black mb-8">
                <a href="mailto:info@getyourdriver.shop" className="text-white hover:text-blue-400 transition-colors underline">info@getyourdriver.shop</a>
              </p>
              <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em]">
                Get Your Driver &bull; Support Intelligence Center
              </p>
            </section>

            {/* Section 14 */}
            <section id="14" className="space-y-6">
              <h3 className="text-xl font-black text-zinc-900 uppercase border-b border-zinc-100 pb-4">14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h3>
              <p>Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. To request to review, update, or delete your personal information, please contact us via email.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
