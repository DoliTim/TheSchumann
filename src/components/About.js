function About() {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Scientific Officer",
      bio: "PhD in Biophysics with 15 years of research in electromagnetic frequencies",
      image: "/team/sarah.jpg"
    },
    {
      name: "Michael Chen",
      role: "Product Development Lead",
      bio: "Engineering expert specializing in frequency-based wellness devices",
      image: "/team/michael.jpg"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Mission Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          At Schumann, we're dedicated to bringing the healing power of Earth's natural frequency 
          into your daily life. Our mission is to help people reconnect with nature's rhythm in 
          our modern world.
        </p>
      </div>

      {/* Story Section */}
      <div className="bg-blue-50 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
        <p className="text-gray-600">
          Our journey began with a simple idea: to harness the healing power of Earth's natural frequency 
          to improve the quality of life for people around the world. We're passionate about creating 
          products that are not only effective but also sustainable and eco-friendly.
        </p>
      </div>

      {/* Team Section */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {team.map(member => (
          <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About; 