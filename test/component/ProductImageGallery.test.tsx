import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("Should have an empty DOM if imageURL is not provided", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    // to assert that container has no child nodes
    // #1
    // expect(container.firstChild).toBeNull();
    // #2
    expect(container).toBeEmptyDOMElement(); // a bit clearer, what I am trying to do.
  });

  it("Should show a list iof images with the right src when array if image urls are passed", () => {
    // these image urls are actually valid.
    const imageUrls: string[] = [
      "https://picsum.photos/400/300",
      "https://picsum.photos/400/301",
      "https://picsum.photos/400/302",
    ];
    render(<ProductImageGallery imageUrls={imageUrls} />);
    imageUrls.forEach((imageUrl) => {
      const image = screen.getByRole("img", { name: imageUrl });
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", imageUrl);
    });
  });
});
