import PersonCard from "./components/PersonCard.js"
import './App.css';

function App() {
	return (

		<div className="App">
			<PersonCard fname="Hello" lname="Hi" age={98} haircolor="pink"/>
			<PersonCard fname="gffda" lname="asdfa" age={34} haircolor="asdfasdf"/>
			<PersonCard fname="asdfasdf" lname="asdfasd" age={21} haircolor="asdfasdf"/>
			<PersonCard fname="zxcvcxz" lname="vcxzvxc" age={23} haircolor="zxcvzxcv"/>
		</div>
	);
}

export default App;
