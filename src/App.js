import Header from "./components/Header";
import Title from "./components/Title";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  const resumeData = {
    name: "Jane Doe",
    title: "Full Stack Developer",
    summary: "I build modern, scalable web apps using React, Spring Boot, and AWS.",
    skills: ["React", "Node.js", "Spring Boot", "SQL", "AWS"],
    experience: [
      {
        company: "TechCorp",
        role: "Backend Developer",
        period: "2021–Present",
        description: "Built and maintained REST APIs with Spring Boot and deployed on AWS."
      },
    ],
    education: [
      {
        name: "National University of Singapore",
        description: "Bachelor of Computing (Honours) in Computer Science"
      },
    ],
    contact: {
      email: "jane@example.com",
      github: "janedoe",
    },
  };

  return (
    <div>
      <Header name={resumeData.name} title={resumeData.title} />
      <Title name={resumeData.name} title={resumeData.title} />
      <About summary={resumeData.summary} />
      <Skills skills={resumeData.skills} />
      <Education items={resumeData.education} />
      <Experience items={resumeData.experience} />
      <Contact contact={resumeData.contact} />
    </div>
  );
}

export default App;
