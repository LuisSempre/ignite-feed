export function Post() {
  return (
    <div className=" bg-gray-900 rounded-md h-screen">
      <div className="flex justify-between ">
        <div className=" flex flex-col">
          <img
            className="h-16 w-16 border border-green-500"
            src="https://github.com/luissempre.png"
            alt=""
          />
          <span>Web Developer</span>
        </div>
        <div>
          <time dataTime="2022-05-11 08:13:00">Publicado 1h</time>
        </div>
      </div>
      <div className="space-y-2">
        <div>
          <p>Fala dev</p>
        </div>
        <p>
          👉luis.lucas/ignite
          <p>#javascript #nlw #rocketseat</p>
        </p>
      </div>
    </div>
  );
}
