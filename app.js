import React from "react";
import ReactDOM from "react-dom/client";

// const Title = () => <h1 className="title">Namaste react JSX</h1>;

const title = <h1>Title</h1>;

const HeadingComponent = () => {
  return (
    <div className="container">
      {title}
      <h1 className="heading">Wellcome to namaste react.</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
