
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router";

/////////////////////////////////////////////////////////////////
const Home = (props) => { 
  return (
    <h1>Welcome</h1>
  );
}
///////////////////////////////////////////////////////////////// 
const InputContext = (props) => {
  const { input, textColor, bgColor } = useParams();

  if ( isNaN(input)){
    return (
      <h1 style={{ color: (typeof textColor != 'undefined' )? textColor : null , backgroundColor: (typeof bgColor != 'undefined' )? bgColor : null }}>
        the word is: { input }
      </h1>
    );
  }
  else {
    return (
      <h1 style={{ color: (typeof textColor != 'undefined' )? textColor : null , backgroundColor: (typeof bgColor != 'undefined' )? bgColor : null }} >
        the number is: { input }
      </h1>
    );
  }

}


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/:input" element={<InputContext />} />
          <Route path="/:input/:textColor/:bgColor" element={<InputContext />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
