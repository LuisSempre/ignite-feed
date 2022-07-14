import { Header } from "./Components/Header"
import { Sidebar } from "./Components/Sidebar"
import { Post } from "./Components/Post"
function App() {
  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto p-4 grid grid-cols-3 gap-2 items-start">
        <Sidebar /> 
        <div className="bg-gray-900 col-span-2">
         <Post />
        </div>
      </div>
    </div>
  );
}

export default App;
