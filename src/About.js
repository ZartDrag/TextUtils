import React from "react";

export default function About(props) {
  const [pageStyle, setPageStyle] = React.useState({
    color: "black",
    backgroundColor: "white",
  });

  const toggleDarkMode = () => {
    if (pageStyle.color === "white") {
      setPageStyle({
        color: "black",
        backgroundColor: "white",
      });
    } else {
      setPageStyle({
        color: "white",
        backgroundColor: "black",
      });
    }
  };

  return (
    <div className="container">
      <div
        className="accordion"
        id="accordionExample"
        data-bs-theme={props.mode}
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About This Website
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>TextUtils</strong> was made as a test project while
              follwing <code>Code With Harry's</code> React Playlist.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              About Me
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                Here are my socials: <br />
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/ZartDrag"
                >
                  GitHub
                </a>{" "}
                <br />
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/kartik-p-s-5782261b6/"
                >
                  LinkdIn
                </a>
                <br />
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://leetcode.com/zartzdrag321/"
                >
                  LeetCode..?
                </a>
                <br />
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://auth.geeksforgeeks.org/user/zartz/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"
                >
                  GeeksForGeeks...??
                </a>{" "}
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              More...
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              What more do you want mate? Leave me alone, I'm tired :'(
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
