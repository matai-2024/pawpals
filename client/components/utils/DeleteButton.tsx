export default function DeleteButton() {
  return (
    <div>
      <button className="flex justify-center items-center gap-2 w-10 h-10 cursor-pointer rounded-3xl shadow-md text-gray-900 font-semibold bg-gradient-to-r from-gray-50 via-gray-50 to-gray-100 hover:shadow-md hover:shadow-yellow-500 hover:scale-105 duration-500 hover:from-yellow-200 hover:to-yellow-400 hover:opacity-90">
        <svg viewBox="0 0 15 15" className="w-5 fill-white">
          <svg
            className="w-6 h-6"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </svg>
      </button>
    </div>
  )
}
