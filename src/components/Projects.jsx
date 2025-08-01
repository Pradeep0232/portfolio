import './Projects.css';

function Projects() {
  const projectList = [
    {
      title: 'Smart Data Dashboard',
      description: 'A full-stack dashboard that reads and processes user stats from a CSV using PySpark and FastAPI, and displays insights through a clean React.js interface.',
      link: 'https://github.com/Pradeep0232/smart-data-dashboard'
    },
    {
      title: 'Personal Finance Tracker',
      description: 'A responsive React.js app for tracking income and expenses, calculating real-time balance, and visualizing spending with charts. Data is stored in localStorage for persistence.',
      link: 'https://github.com/Pradeep0232/personal-finance-tracker'
    },
    {
      title: 'Task Manager',
      description: 'A minimal React app to manage daily tasks with ease. Add, complete, or delete tasks in a distraction-free interface styled with soft, modern colors.',
      link: '#'
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="view-btn">View Project</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
