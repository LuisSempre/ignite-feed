import { Header } from "./Components/Header"
function App() {
  return (
    <div>
      <Header />
      <div className="max-w-sm mx-auto p-4 grid grid-cols-3 gap-2 items-start">
        <div className="bg-gray-900">
          sidebar
        </div>
        <div className="bg-gray-900 col-span-2">
          Luis Lucas
        </div>
      </div>
    </div>
  );
}

export default App;
