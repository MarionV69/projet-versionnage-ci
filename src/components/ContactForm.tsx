import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Merci de remplir les champs obligatoires.");
      return;
    }
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  if (isSubmitted) {
    return (
      <p className="contact-success">
        Merci pour votre message. Nous vous répondrons rapidement.
      </p>
    );
  }

  return (
    <>
      {error && <p className="contact-error">{error}</p>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Sujet</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="contact-button">
          Envoyer
        </button>
      </form>
    </>
  );
}

export default ContactForm;
