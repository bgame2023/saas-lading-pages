import React from "react";
import Top from "./Components/Top";
import Body1 from "./Components/Body1";
import Body2 from "./Components/Body2";
import Body3 from "./Components/Body3";
import Body4 from "./Components/Body4";
import Body5 from "./Components/Body5";
import Bottom from "./Components/Bottom";

const App: React.FC = () => {
  return (
    <div>
      <Top />
      <Body1 />
      <Body2 />
      <Body3 />
      <Body4 />
      <Body5 />
      <Bottom />
    </div>
  );
};

export default App;
