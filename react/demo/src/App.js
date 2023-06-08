import First from "./components/First";
function App() {

  const object = {
    roll: 1,
    mark: 90,
  }
  const arr=["fur", 5, { game: "new", bike: "bmw"}]
  return (
    <div className="App">
      <div className="pl-10 text-lime-700 ">
        checking tailwind css
      </div>
      <div className="text-emerald-500">
        Hello
      </div>
      <div className="bg-blue-200 ">
        Aqua bg
      </div>
      <First name="React" type="property" obj={object} ar={arr}> Hello, hi bye bye</First>

      
    </div>
  );
}

export default App;
