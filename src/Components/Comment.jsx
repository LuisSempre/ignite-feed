export function Comment() {
  return (
    <div className="grid grid-cols-6 gap-0">
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
              <strong>Luis Lucas (you) </strong>
              <span>Cerca de 2h</span>
              <div className="py-4">
                <p>Muito bom!</p>
              </div>
            </div>
          </div>
          <div>
            <time dataTime="2022-05-11 08:13:00">Apagar</time>
          </div>
        </div>
      </div>
    </div>
  );
}
