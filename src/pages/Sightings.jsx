const Sightings = () => {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Recent UFO Sightings</h1>
      </header>
      <section className="space-y-4">
        <div>
          <p className="font-medium">March 15, 2023 - Los Angeles, CA</p>
          <p>Several witnesses reported seeing a bright object in the sky...</p>
        </div>
        <div>
          <p className="font-medium">March 10, 2023 - Austin, TX</p>
          <p>A strange light was seen moving rapidly across the sky...</p>
        </div>
        <div>
          <p className="font-medium">March 5, 2023 - Miami, FL</p>
          <p>Residents reported seeing a UFO hovering over the ocean...</p>
        </div>
      </section>
    </div>
  );
};

export default Sightings;