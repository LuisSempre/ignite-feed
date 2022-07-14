export function Sidebar() {
  return (
    <div className="bg-gray-900 justify-center items-center flex flex-col text-center overflow-hidden object-cover h-screen">
      <img
        className="w-16 h-16 rounded-full"
        src="https://avatars.githubusercontent.com/u/32404639?v=4"
        alt=""
      />
      <h1>Luis Lucas</h1>
      <span>Web Developer</span>
      <div>
        <a href="" className="border border-green-500 px-4 py-2 rounded-full text-green-500">
            Editar perfil
        </a>
      </div>
    </div>
  );
}
