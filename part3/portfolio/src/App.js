import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header className="header">
        <h1>Disha Sharma</h1>
        <p>
          Software Engineer | Java & Spring Boot Developer |{' '}
          <a href="http://www.linkedin.com/in/disha-sharma-0479731a1">LinkedIn</a>
        </p>
      </header>

      <div className="summary">
        <h2>Professional Summary</h2>
        <p>
          Experienced engineer with a strong background in software development
          and project management. Skilled in Java, Spring Boot, and database
          management, with a proven ability to coordinate complex projects from
          inception to completion.
        </p>
      </div>

      <div className="qualifications">
        <h2>Summary of Qualifications</h2>
        <div className="skills">
          <div className="skill">
            <h3>Technical Skills</h3>
            <ul>
              <li>Project Management with successful project completions</li>
              <li>Proficiency in Java and Spring Boot</li>
              <li>Experience with HTML and CSS</li>
              <li>PostgreSQL and SQL Database Management</li>
              <li>Uses Spring Tool Suite and SVN</li>
              <li>Works on Windows and Linux</li>
            </ul>
          </div>
          <div className="skill">
            <h3>Soft Skills</h3>
            <ul>
              <li>Excellent communication and problem-solving</li>
              <li>Strong analytical and organisational skills</li>
              <li>Effective time and project management</li>
              <li>Team collaboration</li>
              <li>Ability to organise tasks with changing priorities</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="education">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>Ontario College Graduate Certificate</strong> in Computer
            Software and Database Development <span>Jan 24 - Present</span>
          </li>
          <li>
            <strong>Bachelor’s Degree in Computer Science Engineering</strong> -{' '}
            Chitkara University, Punjab, India <span>Jun 18 - May 22</span>
          </li>
        </ul>
      </div>

      <div className="experience">
        <h2>Work Experience</h2>
        <div className="job">
          <h3>Engineer | Tata Communications</h3>
          <p>
            <strong>Jun 22 to Nov 23</strong> | Pune, India
          </p>
          <ul>
            <li>Developed and supported software as a Java developer, troubleshooting complex issues.</li>
            <li>Deployed and debugged production server environments, handling multiple clients.</li>
            <li>Created detailed engineering documentation and provided technical support to colleagues.</li>
            <li>Collaborated with vendors to obtain materials within budget, and analyzed user requirements.</li>
          </ul>
        </div>
      </div>

      <div className="hobbies">
        <h2>Hobbies</h2>
        <div className="hobby-item">Reading</div>
        <div className="hobby-item">Travelling</div>
        <div className="hobby-item">Sports (Formula 1)</div>
      </div>
    </div>
  );
}

export default App;
