

export function Comment() {
  return (
    <div className="">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <img
            className="w-16 h-16 border border-green-500 rounded-md"
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
      <div className="space-y-4">
        <p>Fala dev</p>
        <p>luis.lucas/ignite</p>
        <p>#javascript #nlw #rocketseat</p>
      </div>
    </div>
  );
}
