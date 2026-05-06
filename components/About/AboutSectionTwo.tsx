import Image from "next/image";

const foodImages = [
  { src: "/images/Food/Brisket.jpg", alt: "Smoque Signals BBQ brisket" },
  { src: "/images/Food/BrisketSlice.jpg", alt: "Sliced brisket" },
  { src: "/images/Food/Brots.jpeg", alt: "BBQ brats" },
  { src: "/images/Food/BurntEnds.jpeg", alt: "Burnt ends" },
  { src: "/images/Food/MacAndCheese.jpg", alt: "Mac and cheese" },
  { src: "/images/Food/PulledPork1.jpeg", alt: "Pulled pork" },
  { src: "/images/Food/PulledPork2.jpg", alt: "Pulled pork plate" },
  { src: "/images/Food/Sampler.jpg", alt: "BBQ sampler" },
  { src: "/images/Food/Wings.jpg", alt: "BBQ wings" },
];

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-[700px] text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
            Smoqued Low & Slow
          </h2>
          <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg">
            Take a look at some of our small batch BBQ favorites, smoked over
            real wood and served with bold flavor.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {foodImages.map((image) => (
            <div
              key={image.src}
              className="wow fadeInUp relative aspect-[4/3] overflow-hidden rounded-lg shadow-three"
              data-wow-delay=".15s"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
