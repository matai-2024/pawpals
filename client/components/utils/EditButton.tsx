export default function EditButton() {
  return (
    <div>
      <button className="flex justify-center items-center gap-2 w-10 h-10 cursor-pointer rounded-3xl shadow-md shadow-xl text-gray-900 font-semibold bg-gradient-to-r from-gray-50 via-gray-50 to-gray-100 hover:shadow-md hover:shadow-yellow-500 hover:scale-105 duration-500 hover:from-yellow-200 hover:to-yellow-400 hover:opacity-90">
        <svg
          className="w-5 stroke-gray-900"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
        </svg>
      </button>
    </div>
  )
}
