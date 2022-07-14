import { Header } from "./Components/Header"
function App() {
  return (
    <div>
      <Header />
      <div className="max-w-xl mx-auto p-4 grid grid-cols-2 gap-2 items-start">
        <div>
          sidebar
        </div>
        <div>
          Luis Lucas
        </div>
      </div>
    </div>
  );
}

export default App;
