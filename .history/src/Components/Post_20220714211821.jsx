import { Comment } from "./Comment"

export function Post() {
  return (
    <div className="h-screen p-8 space-y-4 bg-gray-900 border border-green-500 rounded-md ">
      <div className="flex justify-between ">
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

      <form className="flex flex-col items-start justify-start space-y-4">
        <strong>Comente:</strong>
        <textarea
          className="w-full p-4 placeholder-green-500 bg-black rounded-md resize-none focus:-green-500"
          placeholder="Comente aqui"
        />
          <button
            type="submit"
            className="px-4 py-2 text-green-500 border border-green-500 rounded-full"
          >
            Publicar
          </button>
      </form>
      <Comment />
    </div>
  );
}
