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
            <time dataTime="">1h</time>
        </div>
      </div>
    </div>
  );
}
