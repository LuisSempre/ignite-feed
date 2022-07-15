export function Comment() {
  return (
    <div className="grid grid-cols-6">
      <div>
        <img
          className="w-16 h-16 border border-green-500 rounded-md"
          src="https://github.com/luissempre.png"
          alt=""
        />
      </div>
      <div className="col-span-5 p-4 bg-gray-700 rounded-md">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <strong>Luis Lucas(voce) </strong>
              <span>Cerca de 2h</span>
            </div>
          </div>
          <div>
            <time dataTime="2022-05-11 08:13:00">Publicado 1h</time>
          </div>
        </div>
      </div>
    </div>
  );
}
