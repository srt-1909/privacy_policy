export default function PrivacyPolicy() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-10 text-gray-800">
            <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
            <p className="text-center text-gray-600 mb-8"><strong>Effective Date:</strong> 17/February/2024</p>

            <p className="mb-6">
                At <strong>Narrate</strong>, we respect your privacy and are committed to protecting your personal and store data. This Privacy Policy outlines the information we collect, how we use it, and your rights regarding your data.
            </p>

            <div className="space-y-8">
                <section>
                    <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Store Information:</strong> Store name, store URL, and store ID, retrieved via Shopify API.</li>
                        <li><strong>Product Data:</strong> Product names, descriptions, images, and pricing information to enable our description generation feature.</li>
                        <li><strong>User Information:</strong> Shopify account details such as name and email for authentication and communication.</li>
                        <li><strong>Generated Descriptions:</strong> Descriptions created using our AI system based on the store owner’s preferences.</li>
                    </ul>
                    <p className="mt-2"><strong>Note:</strong> We do <strong>not</strong> collect or store sensitive payment or financial information.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Retrieve product details from your Shopify store.</li>
                        <li>Generate product descriptions based on user-provided inputs (e.g., description length, keywords).</li>
                        <li>Display generated descriptions for review and allow store owners to save or regenerate them.</li>
                        <li>Improve our AI model for better accuracy and relevance.</li>
                        <li>Provide customer support and communicate about service updates.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">3. Sharing Your Information</h2>
                    <p>We do not sell, rent, or share your personal data with third parties, except in the following cases:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Shopify Integration:</strong> We share necessary store-related data with Shopify to enable app functionality.</li>
                        <li><strong>Legal Compliance:</strong> We may disclose information if required by law or to protect our legal rights.</li>
                        <li><strong>Service Providers:</strong> We may share anonymized data with third-party AI providers to improve text generation quality.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">4. Data Retention</h2>
                    <p>We retain your data only as long as necessary to provide our services. If you uninstall the app, we will delete all associated store data within <strong>two</strong> days, except where retention is required for legal or security reasons.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
                    <p>We implement industry-standard security measures to protect your data, including encryption and secure storage practices. However, no method of data transmission or storage is 100% secure.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
                    <p>As a Shopify store owner, you have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Access:</strong> Request details of the data we store about you.</li>
                        <li><strong>Correction:</strong> Update or correct inaccuracies in your data.</li>
                        <li><strong>Deletion:</strong> Request data deletion upon uninstalling the app.</li>
                    </ul>
                    <p>To exercise these rights, contact us at <strong>info@zenithive.com</strong>.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">7. Changes to This Privacy Policy</h2>
                    <p>We may update this Privacy Policy periodically. Any significant changes will be communicated via email or in-app notifications. The latest version will always be available at <strong>[Your Privacy Policy URL]</strong>.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
                    <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
                    <p><strong>Email:</strong> info@zenithive.com</p>
                    <p><strong>Website:</strong> zenithive.com</p>
                </section>
            </div>

            <p className="mt-8 text-center font-semibold">By installing and using our Shopify app, you agree to the terms of this Privacy Policy.</p>
        </div>
    );
}
