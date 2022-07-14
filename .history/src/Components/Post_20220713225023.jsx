export function Post() {
  return (
    <div className="bg-gray-900 rounded-md h-screen">
      <div>
        <div className="bg-gray-900 flex flex-col">
          <img
            className="h-16 w-16"
            src="https://github.com/luissempre.png"
            alt=""
          />
          <span>Web Developer</span>
        </div>
        <div>
            <time>1h</time>
        </div>
      </div>
    </div>
  );
}
