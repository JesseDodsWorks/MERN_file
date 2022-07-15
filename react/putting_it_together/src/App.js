
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">

      < PersonCard lastName={"Dods"} firstName={"Jesse"} age={24} hairColor={"brown"} />
      < PersonCard lastName={"Jeffy"} firstName={"Jef"} age={43} hairColor={"pink"} />
      < PersonCard lastName={"Vue"} firstName={"Kenny"} age={71} hairColor={"blue"} />
      < PersonCard lastName={"Dunes"} firstName={"Sand"} age={23} hairColor={"blond"} />

    </div>
  );
}

export default App;
