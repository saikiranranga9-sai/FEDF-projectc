import NavBar from './../components/NavBar';

export default function About() {
  return (
    <>
      <NavBar />
      <div className="page">
        <div className="card">
          <h1>About LearnTrack</h1>
          <p>
            LearnTrack is a lightweight progress-tracking app designed to help educators and managers
            monitor learner activity, measure completion rates, and deliver timely interventions.
          </p>
          <h3>Core features</h3>
          <ul>
            <li>Module management and assignment</li>
            <li>Progress tracking per learner</li>
            <li>Role-based dashboards for Students, Admins, and Managers</li>
          </ul>
        </div>
      </div>
    </>
  );
}