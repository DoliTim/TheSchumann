function Education() {
  const sections = [
    {
      title: "What is Schumann Resonance?",
      content: "The Schumann resonance is Earth's electromagnetic field frequency, which resonates at approximately 7.83 Hz. This natural phenomenon, discovered by physicist Winfried Otto Schumann, plays a crucial role in human well-being.",
    },
    {
      title: "Benefits of Schumann Frequency",
      content: "Research suggests that exposure to Schumann frequency can improve sleep quality, reduce stress, enhance meditation, and help maintain natural biological rhythms.",
    },
    {
      title: "How Our Device Works",
      content: "Our device generates the precise 7.83 Hz frequency, creating a harmonious environment that helps align your body with Earth's natural rhythm.",
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Understanding Schumann Resonance</h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <div key={section.title} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            <p className="text-gray-600">{section.content}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Scientific Research</h2>
        <p className="text-gray-600">
          Multiple studies have demonstrated the positive effects of Schumann resonance on human health. Research continues to uncover new benefits of this natural frequency.
        </p>
      </div>
    </div>
  );
}

export default Education; 