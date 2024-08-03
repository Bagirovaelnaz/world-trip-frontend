import "./ai.css";
const Ai = () => {
  return (
    <div className="ai">
      <div className="container-ai">
        <div className="main-container">
          <header>
            <div className="greeting-section">
              <img src="ai2.png" alt="Logo" className="logo" />
              <h1>
                Plan your <span className="highlight">travel</span>.
              </h1>
              <p className="intro-text">
                Lets create a plan, but first, tell me what’s on your mind for
                your trip :
              </p>
            </div>
            <form className="planner-form">
              <div className="form-group">
                <label htmlFor="destination" className="form-label">
                  Destination
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  defaultValue="Istanbul, Turkiye"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="passenger" className="form-label">
                  Passenger
                </label>
                <select id="passenger" name="passenger" className="form-select">
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4} selected>
                    4
                  </option>
                  <option value={5}>5</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="start-date" className="form-label">
                  Select date
                </label>
                <input
                  type="date"
                  id="start-date"
                  name="start-date"
                  defaultValue="2024-07-03"
                  className="form-input"
                />
                <input
                  type="date"
                  id="end-date"
                  name="end-date"
                  defaultValue="2024-07-10"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="budget" className="form-label">
                  Budget
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  defaultValue="1000-1500 $"
                  className="form-input"
                />
              </div>
            </form>
            <button className="button-22" id="ai-submit">Submit</button>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Ai;
