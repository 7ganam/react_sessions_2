import "./App.css";
import LifecycleA from "./components/LifeCyclesDemo/LifecycleA";
import ControlledFormDemo from "./components/ControlledFormDemo";
import Parent from "./components/PureComponentsDemo/Parent";
import RefsDemo from "./components/RefsDemo";
import HOCUser from "./components/HOCDemo/HOCUser";

import WithCalculate2 from "./components/RenderPropsDemo/WithCalculate2";
import RPUser from "./components/RenderPropsDemo/RPUser";

import DeeplyNestedTree from "./components/ContextDemo/DeeplyNestedTree";
import SimpleHttpExample from "./components/HTTPDemo/SimpleHttpExample";
import CompleteHttpExample from "./components/HTTPDemo/CompleteHttpExample";
function App() {
  return (
    <div className="App">
      <ControlledFormDemo></ControlledFormDemo>
      <LifecycleA></LifecycleA>
      <Parent></Parent>
      <RefsDemo></RefsDemo>
      <HOCUser></HOCUser>

      <WithCalculate2
        render={(calculate) => <RPUser calculate={calculate} />}
      ></WithCalculate2>

      <DeeplyNestedTree></DeeplyNestedTree>
      <SimpleHttpExample></SimpleHttpExample>
      <CompleteHttpExample></CompleteHttpExample>
    </div>
  );
}

export default App;
