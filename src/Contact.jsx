import React from "react";
import styles from "./Contact.module.css";
import Input from "./Input";

const Contact = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
  }

  const contact = React.useRef();

  return (
    <section ref={contact} id="contact" className={`${styles.wrapper} wrapper`}>
      <div className={`${styles.main} container`}>
        <h2 className={styles.title}>Contact Us</h2>
        <p className={styles.subtitle}>
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis.
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            className={styles.input}
            type={"text"}
            id={"name"}
            placeholder={"Full Name"}
            value={form.name}
            change={handleChange}
            required
          />
          <Input
            className={styles.input}
            type={"email"}
            id={"email"}
            placeholder={"Email"}
            value={form.email}
            change={handleChange}
            required
          />
          <Input
            className={styles.input}
            type={"text"}
            id={"website"}
            placeholder={"Website"}
            value={form.website}
            change={handleChange}
          />
          <textarea
            className={styles.message}
            id="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            cols={"100"}
            rows={"8"}
          >
            Message
          </textarea>
          <button className={styles.button} type="submit">
            submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
