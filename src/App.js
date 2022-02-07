import logo from './logo.svg';
import './App.css';
import ReactFullpage from '@fullpage/react-fullpage';
import { Nav } from './comps/nav';
import AnimatedEntry from './comps/AnimatedEntry';
import Background from './comps/Background';


function App() {
  return (
    <div className="App">
      <Nav />
      <Background />
      <ReactFullpage
        licenseKey={'GPLv3'}
        scrollingSpeed={1000}
        render={({ state, fullpageApi }) => {
          try{
          console.log(fullpageApi.getActiveSlide())
          }catch{}
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                {/* <AnimatedEntry></AnimatedEntry> */}
                <p>Section 1 (welcome to fullpage.js)</p>
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  Click me to move down
                </button>
              </div>
              <div className="section">
                <p>Section 2</p>
              </div>
              <div className="section">
                <p>Section 3</p>
              </div>

            </ReactFullpage.Wrapper>
          );
        }}

      />
    </div>
  );
}

export default App;
