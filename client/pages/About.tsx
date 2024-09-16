export default function About() {
  return (
    <div className="min-h-screen mx-auto max-w-full py-32 sm:py-48 lg:py-24 px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          About
        </h1>
        <p className="text-2xl text-gray-600 mt-4">We are the pawpals team!</p>
      </div>

      <div className="space-y-12 mt-12">
        {/* About Section */}
        <div className="bg-white opacity-90 p-8 rounded-lg shadow hover:bg-opacity-100 transition duration-200 ease-in-out max-w-full">
          <h2 className="text-center text-2xl font-semibold text-gray-800">
            The Animals that made this
          </h2>
          <p className="text-xl text-center text-gray-600 mt-2">
            Who is Who in the ZOO!!
          </p>
          <p className="mt-4 text-center text-base text-gray-700">
            Pawpals is a community-driven website designed to connect pet
            lovers, whether they have pets or not. Users can browse adorable
            pets, explore pet-friendly events, or even create their own. The
            platform allows users to create personalized profiles for their pets
            and join events hosted by other members.
          </p>
          <p className="mt-4 text-center text-base text-gray-700">
            This project was conceptualized by Anahera and developed in
            collaboration with Jack, Dean, Sam, and Amy as part of the pawpals
            team!
          </p>
          <img
            className="mt-4 w-full rounded-lg object-cover"
            src="problemsolved.jpg"
            alt="coders at work"
          />
        </div>

        {/* Team Section */}
        <div className="bg-white p-8 rounded-lg shadow max-w-full">
          <h2 className="text-center text-2xl font-semibold text-gray-800">
            Our Team
          </h2>
          <p className="text-center text-xl text-gray-600 mt-2">
            The crazy cats who made this
          </p>

          {/* Horizontal Flexbox for Team Members */}
          <div className="flex gap-6 mt-10 overflow-x-auto">
            {[
              // Team member profiles
              {
                name: 'Anahera Foley-Paama',
                role: 'Product Owner',
                img: 'public/anahera.jpeg',
              },
              {
                name: 'Amy Jackson',
                role: 'Backend Lead',
                img: 'public/amy.jpg',
              },
              {
                name: 'Dean Tunbridge',
                role: 'Frontend Lead',
                img: 'public/dean.jpg',
              },
              {
                name: 'Jack Gloyer',
                role: 'Git Lead',
                img: 'https://via.placeholder.com/120x120',
              },
              {
                name: 'Sam Pedersen',
                role: 'Vibes Lead',
                img: 'public/sam.jpg',
              },
            ].map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center bg-white p-6 rounded-lg shadow hover:bg-gray-100 min-w-[100px]"
              >
                {/* Image */}
                <img
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mb-4"
                  src={member.img}
                  alt={`${member.name}'s profile`}
                />

                {/* Text */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                  <i className="text-2xl fa-brands fa-linkedin mt-2"></i>
                  <i className="text-2xl fa-solid fa-envelope"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
