export function Post() {
  return (
    <div className=" bg-gray-900 rounded-md h-screen space-y-2 p-8 border border-green-500">
      <div className="flex justify-between ">
        <div className="flex gap-4">
          <img
            className="h-16 w-16 border border-green-500 rounded-md"
            src="https://github.com/luissempre.png"
            alt=""
          />
          <div className="flex flex-col">
            <strong>Luis Lucas </strong>
            <span>Web Developer</span>
          </div>
        </div>
        <div>
          <time dataTime="2022-05-11 08:13:00">Publicado 1h</time>
        </div>
      </div>
      <div className="space-y-2">
        <p>Fala dev</p>
        <p>luis.lucas/ignite</p>
        <p>#javascript #nlw #rocketseat</p>
      </div>

      <form className="flex flex-col justify-start items-start">
        <strong>Comente:</strong>
        <textarea className="w-full" placeholder="Comente aqui" />
        <button
        type="submit"
        className="border border-green-500"
        >Comentar</button>
      </form>
    </div>
  );
}
