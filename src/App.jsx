import "./App.css";
import Greetings from "./components/Greetings";
import IdCard from "./components/IdCard";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard 
        lastName="Jorge"
        firstName="Ronaldo"
        gender="male"
        height={180}
        birth={new Date("1990-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <Greetings lang="fr">Ludwig</Greetings>
    </div>

  );
}

export default App;
