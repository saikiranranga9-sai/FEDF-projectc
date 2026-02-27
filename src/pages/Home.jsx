import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="page">
        <div className="card">
          <h1>Welcome to LearnTrack</h1>
          <p>LearnTrack helps learners and institutions measure progress, identify gaps, and improve outcomes through simple, actionable insights.</p>
          <ul>
            <li>Track individual learner progress</li>
            <li>Assign and manage learning modules</li>
            <li>Visualize performance with reports</li>
          </ul>
          <button className="btn">Get Started</button>
        </div>
        <div className="card">
          <h2>Why LearnTrack?</h2>
          <p>Built for clarity and ease — teachers, managers and admins can quickly spot who needs help and what content works best.</p>
        </div>
      </div>
    </>
  );
}