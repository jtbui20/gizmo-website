import "./ContactFooter.module.css";

const ContactFooter = () => {
  return (
    <footer>
      <form>
        <h2>Contact Details</h2>
        <p>
          You can contact us at our address{" "}
          <a href="mailto:support@gizmo-game.com">support@gizmo-game.com</a> or
          use the form below
        </p>
        <input
          name="contact-name"
          id="contact-name"
          type="text"
          placeholder="Name"
        />
        <input
          name="contact-email"
          id="contact-email"
          type="email"
          placeholder="Email"
        />
        <textarea
          name="contact-message"
          id="contact-message"
          placeholder="Message"
        />
        <button type="submit">Send</button>
      </form>
      <br />
      <div id="social-media">
        <ul>
          <li>Twitter / X</li>
          <li>BlueSky</li>
          <li>YouTube</li>
          <li>Instagram</li>
        </ul>
      </div>
      <br />
      <div>
        <p>Disclaimers</p>
        <p>© 2024 Gizmo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default ContactFooter;
