export function Post() {
  return (
    <div className=" bg-gray-900 rounded-md h-screen">
      <div className="flex justify-between ">
        <div className=" flex flex-col">
          <img
            className="h-16 w-16"
            src="https://github.com/luissempre.png"
            alt=""
          />
          <span>Web Developer</span>
        </div>
        <div>
            <time dataTime="2022-05-11 08:13:00">Publicado 1h</time>
        </div>
        <div>
            Fala dev`s

            👉luis.lucas/ignite

            #javascript #nlw #rocketseat
        </div>
      </div>
    </div>
  );
}
