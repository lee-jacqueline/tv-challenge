/**
 * Card Component
 *
 * Test cases to cover for
 * 1. Displaying correct items
 */

import { cleanup, render, screen } from "@testing-library/react";
import Card from ".";

afterEach(cleanup);

describe("Card Tests", () => {
  test("Checking if card is displaying content correctly", async () => {
    const program = {
      id: 67298,
      title: "Dr. Death",
      description:
        "Dr. Death tells the terrifying true story of Dr. Christopher Duntsch (Joshua Jackson), a brilliant but sociopathic neurosurgeon whose patients leave his operating room either permanently maimed or dead, and the two doctors who set out to stop him.",
      type: "series",
      image:
        "https://streamcoimg-a.akamaihd.net/000/672/98/67298-PosterArt-2039396c9e27d6271c96776414d6a38c.jpg?resize=512px:*&quality=75&preferredFormat=image/jpeg",
      rating: "MA 15+",
      genre: "Drama",
      year: 2021,
      language: "English",
    };
    render(
      <Card
        programId={program.id}
        imageUrl={program.image}
        altText={`${program.title} Movie Poster`}
      />
    );

    // Check if card exists on the page
    expect(
      screen.getByTestId(`carousel-card-${program.id}`)
    ).toBeInTheDocument();

    // Check if values are correct
    expect(screen.getByAltText("Dr. Death Movie Poster")).toBeInTheDocument();
  });
});
