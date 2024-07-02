import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import article1 from "../../public/images/article1.jpg";
import article2 from "../../public/images/article2.jpg";
import article3 from "../../public/images/article3.jpg";

const Index = () => {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">UFO Sightings and News</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Your source for the latest UFO sightings and news articles.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Featured Articles</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <img src={article1} alt="UFO sighting in a city" />
            <CardHeader>
              <CardTitle>UFO Spotted Over New York City</CardTitle>
            </CardHeader>
            <CardContent>
              <p>A mysterious object was seen hovering over the city...</p>
            </CardContent>
          </Card>
          <Card>
            <img src={article2} alt="UFO sighting in a rural area" />
            <CardHeader>
              <CardTitle>Strange Lights in the Countryside</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Residents report seeing strange lights in the sky...</p>
            </CardContent>
          </Card>
          <Card>
            <img src={article3} alt="UFO sighting near a mountain" />
            <CardHeader>
              <CardTitle>UFO Near the Rocky Mountains</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Hikers capture footage of a UFO near the mountains...</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Recent Sightings</h2>
        <div className="space-y-2">
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
        </div>
      </section>
    </div>
  );
};

export default Index;