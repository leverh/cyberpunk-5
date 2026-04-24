import { useState } from "react";
import styles from "./ContactForm.module.css";

const PROJECT_TYPES = [
  "Web Design",
  "Front-End Development",
  "Branding",
  "Content Creation",
  "Landing Page",
  "E-Commerce",
  "Web App",
  "Other",
];

const ENDPOINT = "https://formspree.io/f/mzdyynyg";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={styles.successBox}>
        <div className={styles.successTag}>TRANSMISSION RECEIVED</div>
        <p className={styles.successMsg}>
          Message received. I'll get back to you within 24–48 hours.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>

      <div className={styles.row}>
        {/* Name */}
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">
            Name <span className={styles.required}>*</span>
          </label>
          <input
            className={styles.input}
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            Email <span className={styles.required}>*</span>
          </label>
          <input
            className={styles.input}
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className={styles.row}>
        {/* Project type */}
        <div className={styles.field}>
          <label className={styles.label} htmlFor="projectType">
            Project Type <span className={styles.required}>*</span>
          </label>
          <div className={styles.selectWrap}>
            <select
              className={styles.select}
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a service</option>
              {PROJECT_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <span className={styles.selectArrow}>▾</span>
          </div>
        </div>

        {/* Phone — optional */}
        <div className={styles.field}>
          <label className={styles.label} htmlFor="phone">
            Phone <span className={styles.optional}>(optional)</span>
          </label>
          <input
            className={styles.input}
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 234 567 8900"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Message */}
      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">
          Message <span className={styles.required}>*</span>
        </label>
        <textarea
          className={styles.textarea}
          id="message"
          name="message"
          placeholder="Tell me about your project..."
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      {status === "error" && (
        <p className={styles.errorMsg}>
          Something went wrong. Please try again or email me directly.
        </p>
      )}

      <button
        className={styles.submit}
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "TRANSMITTING..." : "SEND TRANSMISSION"}
      </button>

    </form>
  );
}