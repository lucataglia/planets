import React from "react";
import { useHistory } from "react-router-dom";

let count = 0;
function Planets() {
  count = count + 1;

  // eslint-disable-next-line no-console
  console.debug("*** Re-render <App /> component");

  const history = useHistory();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <strong>Intro</strong>
        The window.history.pushState method is useful when the URL must be
        updated to store the
        <br />
        the app state into the URL. That will allow the user to share the URL to
        someone else that
        <br />
        will see exactly what the first user was seeing.
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <strong>Demo</strong>

        <div>
          Execute the following line of code{" "}
          <strong>from the console of the Browser dev tools.</strong>
          <br />
          The App component will be re-rendered. The same will happen if you
          click the button
          <br />
          (please check the console.debug)
        </div>

        <pre>
          {`window.history.pushState({}, \'\',  window.location.origin + window.location.pathname + \'?fakeParam=${
            count + 1
          }\')`}
        </pre>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <button
          onClick={() => history.push({ search: `fakeParam=${count + 1}` })}
          style={{
            maxWidth: "350px",
            background: "white",
            color: "black",
            borderRadius: "1rem",
          }}
        >
          Click here to invoke react-router-dom navigate
        </button>
        App component re-render <strong>{count}</strong>
      </div>
    </div>
  );
}

export default Planets;
