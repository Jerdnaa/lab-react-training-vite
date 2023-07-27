import "./App.css";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";
import Greetings from "./components/Greetings";
import IdCard from "./components/IdCard";
import Random from "./components/Random";

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
        <Random min={1} max={6}/>
        <BoxColor r={255} g={0} b={0}/>
        <CreditCard 
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
        />
    </div>

  );
}

export default App;
