const Articles = () => {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">UFO Articles</h1>
      </header>
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">UFO Spotted Over New York City</h2>
          <p className="text-muted-foreground">Published on March 1, 2023</p>
          <p>A mysterious object was seen hovering over the city...</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Strange Lights in the Countryside</h2>
          <p className="text-muted-foreground">Published on February 25, 2023</p>
          <p>Residents report seeing strange lights in the sky...</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">UFO Near the Rocky Mountains</h2>
          <p className="text-muted-foreground">Published on February 20, 2023</p>
          <p>Hikers capture footage of a UFO near the mountains...</p>
        </div>
      </section>
    </div>
  );
};

export default Articles;