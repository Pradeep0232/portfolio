import './Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Let’s Connect</h2>
      <form 
        className="contact-form"
        action="https://formsubmit.co/prad.kumar.v@gmail.com"
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
