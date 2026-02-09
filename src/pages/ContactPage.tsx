import ContactForm from "../components/ContactForm";

function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-section">
        <h1>Nous contacter</h1>
        <p>Une question ? Un besoin d'information ? Laissez-nous un message.</p>
        <ContactForm />
      </section>
    </main>
  );
}

export default ContactPage;
