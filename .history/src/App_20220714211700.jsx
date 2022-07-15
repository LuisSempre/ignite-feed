import { Header } from "./Components/Header"
import { Sidebar } from "./Components/Sidebar"
import { Post } from "./Components/Post"
import { Comment } from "./Components/Comment"
function App() {
  return (
    <div>
      <Header />
      <div className="grid items-start max-w-6xl grid-cols-3 gap-2 p-4 mx-auto">
        <Sidebar /> 
        <div className="col-span-2">
         <Post />
         <Comment />
        </div>
      </div>
    </div>
  );
}

export default App;
