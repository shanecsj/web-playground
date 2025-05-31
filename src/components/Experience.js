export default function Experience({ items }) {
    return (
      <section>
        <h3>Experience</h3>
        {items.map((job, index) => (
          <div key={index}>
            <strong>{job.role}</strong> at {job.company} ({job.period})
            <p>{job.description}</p>
          </div>
        ))}
      </section>
    );
  }
  