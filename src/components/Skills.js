export default function Skills({ skills }) {
    return (
      <section>
        <h3>Skills</h3>
        <ul className="skills-list">
          {skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
    );
  }
  