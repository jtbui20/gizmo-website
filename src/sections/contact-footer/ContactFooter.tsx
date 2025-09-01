import "./ContactFooter.module.css";

const ContactFooter = () => {
  return (
    <footer>
      <form>
        <h2>Contact Details</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" />
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
