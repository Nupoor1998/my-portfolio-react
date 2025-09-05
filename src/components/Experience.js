import { Container } from "react-bootstrap";

const items = [
  {
    title: "Frontend Web Developer",
    place: "Rebecca Everlene Trust Company, Chicago, US",
    time: "Sep 2024 – Jun 2025",
    body: "Focused on building intuitive healthcare app interfaces and improving website performance through responsive design and WordPress customization."
  },
  {
    title: "Frontend Developer Intern",
    place: "SDI Presence, Chicago, US",
    time: "Feb 2023 – Aug 2023",
    body: "Developed interactive web pages from design prototypes, integrated APIs for dynamic functionality, and enhanced overall site responsiveness."
  },
  {
    title: "Master of Science in Information Systems",
    place: "Northeastern University, Boston, MA, US",
    time: "Sep 2022 – Apr 2024",
    body: "Graduated with GPA: 3.54/4, with the strong foundation in Information Systems focusing on web technologies, data engineering, and system design."
  },
  {
    title: "Application Development Associate (Frontend)",
    place: "Accenture Solutions Pvt. Ltd, Pune, India",
    time: "Feb 2021 – Aug 2022",
    body: "Collaborated in an Agile environment to create user-friendly dashboards and refine front-end components, ensuring smoother performance and faster workflows."
  },
  {
    title: "Frontend Web Developer Associate",
    place: "Cyient Ltd., Pune, India",
    time: "May 2020 – Jan 2021",
    body: "Built clean, responsive web pages and translated design mockups into functional UIs while contributing to collaborative development practices."
  },
  {
    title: "Bachelor of Engineering in Electronics and Telecommunication",
    place: "Sinhgad Institute of Technology and Science, Pune, India",
    time: "Jul 2016 – Apr 2020",
    body: "Graduated with GPA: 7/10, foundation in Electronics and Telecommunication."
  },
];

export const Experience = () => (
  <section id="experience" className="experience">
    <Container>
      <h2 className="exp-title">Experience & Education</h2>
      <div className="timeline">
        {items.map((it, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{it.title}</h3>
                <span className="time">{it.time}</span>
              </div>
              <div className="place">{it.place}</div>
              <p>{it.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);
