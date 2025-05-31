export default function Contact({ contact }) {
    return (
      <section>
        <h3>Contact Me</h3>
        <ul>
          <li><strong>Email: </strong> {contact.email}</li>
          <li><strong>GitHub: </strong> {contact.github}</li>
        </ul>
      </section>
    );
  }
  