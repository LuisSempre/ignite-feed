import { Header } from "./Components/Header"
function App() {
  return (
    <div>
      <Header />
      <div className="max-w-xl mx-auto p-4 grid grid-cols gap-2 items-start">
        <aside>
          sidebar
        </aside>
        <main>

        </main>
      </div>
    </div>
  );
}

export default App;
