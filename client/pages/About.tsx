export default function About() {
  const teamMembers = [
    {
      name: 'Anahera Foley-Paama',
      role: 'Product Owner',
      img: 'devs/anahera.jpeg',
      linkedin: 'https://www.linkedin.com/in/afoleypaama/',
      email: 'anahera.work@gmail.com',
      github: 'https://github.com/anaherawashere?tab=repositories',
    },
    {
      name: 'Amy Jackson',
      role: 'Backend Lead',
      img: 'devs/amy.jpg',
      linkedin: 'https://www.linkedin.com/in/amy-jackson',
      email: 'amyj.etana@gmail.com',
      github: 'https://github.com/achoo-o',
    },
    {
      name: 'Dean Tunbridge',
      role: 'Frontend Lead',
      img: 'devs/dean.jpg',
      linkedin: 'https://www.linkedin.com/in/dean-tunbridge',
      email: 'Deantunbridgedev@gmail.com',
      github: 'https://github.com/dean-tunbridge',
    },
    {
      name: 'Jack Gloyer',
      role: 'Git Lead',
      img: 'devs/jack.png',
      linkedin: 'https://www.linkedin.com/in/jack-gloyer',
      email: 'jackgloyer8@gmail.com',
      github: 'https://github.com/jack-gloyer',
    },
    {
      name: 'Sam Pedersen',
      role: 'Vibes Lead',
      img: 'devs/sam.webp',
      linkedin: 'https://www.linkedin.com/in/sam-pedersen-2060b0241/',
      email: 'sjcfpedersen@gmail.com',
      github: 'https://github.com/sam-pedersen',
    },
  ]

  return (
    <div className="min-h-screen mx-auto max-w-7xl py-32 sm:py-48 lg:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          About
        </h1>
        <p className="block my-6 text-lg leading-8 text-gray-600">
          We are the pawpals team!
        </p>
      </div>

      <div className="flex flex-row items-center">
        <div className="w-1/2 p-6">
          <h2 className="text-4xl font-semibold text-gray-800">
            The Animals that made this
          </h2>
          <p className="text-xl font-semibold text-gray-600 mt-2">
            Who is Who in the ZOO!!
          </p>
          <p className="mt-4 text-base text-gray-700">
            Pawpals is a community-driven website designed to connect pet
            lovers, whether they have pets or not. Users can browse adorable
            pets, explore pet-friendly events, or even create their own. The
            platform allows users to create personalized profiles for their pets
            and join events hosted by other members.
          </p>
          <p className="mt-4 text-base text-gray-700">
            This project was conceptualized by Anahera and developed in
            collaboration with Jack, Dean, Sam, and Amy as part of the pawpals
            team!
          </p>
        </div>
        <div className="w-1/2 p-6">
          <img
            className="mt-4 w-full rounded-lg object-cover"
            src="team.webp"
            alt="coders at work"
          />
        </div>
      </div>
      <div>
        {/* Team Section */}
        <div className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-center text-2xl font-semibold text-gray-800">
            Our Team
          </h2>
          <p className="text-center text-xl text-gray-600 mt-2">
            The crazy cats who made this
          </p>

          <div className="flex gap-6 mt-10 overflow-x-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center bg-white p-6 rounded-lg shadow hover:bg-gray-100 min-w-[150px]"
              >
                <img
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mb-4"
                  src={member.img}
                  alt={`${member.name}'s profile`}
                />

                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>

                  <div className="flex justify-center space-x-4 mt-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <i className="text-2xl fa-brands fa-linkedin"></i>
                    </a>

                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`${member.name}'s email`}
                    >
                      <i className="text-2xl fa-solid fa-envelope"></i>
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s github`}
                    >
                      <i className="text-2xl fa-brands fa-square-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
