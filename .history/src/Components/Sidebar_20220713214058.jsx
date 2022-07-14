export function Sidebar() {
  return (
    <div className="rounded-md bg-gray-900 justify-center items-center flex flex-col text-center  h-64 space-y-2">
      <img
        className="w-16 h-16 rounded-full overflow-hidden object-cover"
        src="https://avatars.githubusercontent.com/u/32404639?v=4"
        alt=""
      />
      <h1>Luis Lucas</h1>
      <span>Web Developer</span>
      <span className="border-separate border-gray-500"></span>
        <a href="" className="border border-green-500 px-4 py-2 rounded-full text-green-500">
            Editar perfil
        </a>
    </div>
  );
}
