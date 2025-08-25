const ContactFooter = () => {
  return (
    <div className="footer">
      <form>
        <h1>Contact Details</h1>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" />
        <button type="submit">Send</button>
      </form>
      <div>
        <ul>
          <li>Twitter / X</li>
          <li>BlueSky</li>
          <li>YouTube</li>
          <li>Instagram</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactFooter;
