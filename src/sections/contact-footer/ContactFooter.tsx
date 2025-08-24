const ContactFooter = () => {
  return (
    <div className="footer">
      <div>
        <h1>Contact us</h1>
      </div>
      <div>
        <p>Contact Details</p>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" />
          <button type="submit">Send</button>
        </form>
      </div>
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
