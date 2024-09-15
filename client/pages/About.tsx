export default function About() {
  return (
    <div className="min-h-screen mx-auto text-center max-w-7xl py-32 sm:py-48 lg:py-24-200 flex justify-center items-center">
      <div className="max-w-screen-lg w-full bg-white shadow-lg rounded-lg p-8">
        <div className="text-center pb-8 mb-8">
          <h1 className="text-7xl font-bold text-gray-800">About</h1>
          <p className="text-2xl text-gray-600 mt-4">
            We are the pawpals team!
          </p>
        </div>

        <div className="space-y-12">
          <div className="bg-white opacity-80 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-gray-800">
              The Animals that made this
            </h2>
            <p className="text-xl text-gray-600">Who is Who in the ZOO!!</p>
            <p className="mt-4 text-base text-gray-700">
              Body text for your whole article or post. We’ll put in some lorem
              ipsum to show how a filled-out page might look...
            </p>
            <img
              className="mt-4 w-full rounded-lg"
              src="problemsolved.jpg"
              alt="coders at work"
            />
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-center text-2xl font-semibold text-gray-800">
              Our Team
            </h2>
            <p className="text-center text-xl text-gray-600">
              The crazy cats who made this
            </p>

            <div className="grid grid-cols-1  lg:grid-cols-5 gap-6 mt-10">
              {/* Team member profiles */}
              {[
                {
                  name: 'Anahera Foley-Paama',
                  role: 'Product Owner',
                  img: 'https://via.placeholder.com/120x120',
                },
                {
                  name: 'Amy Jackson',
                  role: 'Backend Lead',
                  img: 'https://via.placeholder.com/120x120',
                },
                {
                  name: 'Dean Tunbridge',
                  role: 'Frontend Lead',
                  img: 'https://via.placeholder.com/120x120',
                },
                {
                  name: 'Jack Gloyer',
                  role: 'Git Lead',
                  img: 'https://via.placeholder.com/120x120',
                },
                {
                  name: 'Sam Pedersen',
                  role: 'Vibes Lead',
                  img: 'https://via.placeholder.com/120x120',
                },
              ].map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col items-center bg-white p-8 rounded-lg shadow"
                >
                  <img
                    className="w-[60px] h-[60px] rounded-full mb-4"
                    src={member.img}
                    alt={`${member.name}'s profile`}
                  />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
