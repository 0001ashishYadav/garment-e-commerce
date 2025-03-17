import CardSlider from "@/components/CardSlider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function HomePage() {
  const carouselContents = [
    {
      imgLink:
        "https://live.claimflights.eu/wp-content/uploads/Beautiful-place.jpg",
      title: "Beautyful See Place",
      prg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta commodi vel dolor, assumenda voluptas ullam eaque cupiditate dolorem laborum eius nisi. Incidunt recusandae provident saepe odio eum numquam sunt ipsa?",
    },
    {
      imgLink:
        "https://www.thediscoveriesof.com/wp-content/uploads/2023/01/Hallstatt-Austria-shutterstock_1315419290.jpg.webp",
      title: "Japan Tourism",
      prg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta commodi vel dolor, assumenda voluptas ullam eaque cupiditate dolorem laborum eius nisi. Incidunt recusandae provident saepe odio eum numquam sunt ipsa?",
    },
    {
      imgLink:
        "https://www.travelanddestinations.com/wp-content/uploads/2020/02/Europe-Travel-Destinations.jpg",
      title: "See Side Houses",
      prg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta commodi vel dolor, assumenda voluptas ullam eaque cupiditate dolorem laborum eius nisi. Incidunt recusandae provident saepe odio eum numquam sunt ipsa?",
    },
    {
      imgLink:
        "https://i.ytimg.com/vi/tl223Zu09CE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDk3L1b60DvNCG39N9wC2KWgASwWQ",
      title: "Australia",
      prg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta commodi vel dolor, assumenda voluptas ullam eaque cupiditate dolorem laborum eius nisi. Incidunt recusandae provident saepe odio eum numquam sunt ipsa?",
      class: "text-red-700",
    },
    {
      imgLink:
        "https://www.swedishnomad.com/wp-content/images/2018/09/places-to-visit-in-turkey.jpg",
      title: "Turkish Tourist Places",
      prg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta commodi vel dolor, assumenda voluptas ullam eaque cupiditate dolorem laborum eius nisi. Incidunt recusandae provident saepe odio eum numquam sunt ipsa?",
    },
    {
      imgLink:
        "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/10/16154037/cappadocia.jpeg",
      title: "Turkish Street View",
      prg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta commodi vel dolor, assumenda voluptas ullam eaque cupiditate dolorem laborum eius nisi. Incidunt recusandae provident saepe odio eum numquam sunt ipsa?",
    },
    {
      imgLink:
        "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/10/16154100/antalya.jpeg",
      title: "World Tourism",
      prg: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta commodi vel dolor, assumenda voluptas ullam eaque cupiditate dolorem laborum eius nisi. Incidunt recusandae provident saepe odio eum numquam sunt ipsa?",
    },
  ];

  return (
    <>
      <div className="pt-28">
        <Carousel
          className="w-[70%] mx-auto"
          style={{
            boxShadow: "0px 0px 20px gray",
          }}
        >
          <CarouselContent>
            {carouselContents.map((contents, ind) => (
              <CarouselItem key={ind}>
                <div
                  style={{
                    backgroundImage: `url( ${contents.imgLink})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "100% 100%",
                  }}
                  className="h-[50vh]  border mx-auto"
                >
                  <p
                    className={`text-lg md:text-3xl font-extrabold w-24 md:w-10 ml-2 md:ml-14 mt-20 ${
                      contents.class || "text-white"
                    }`}
                  >
                    {contents.title}
                  </p>

                  <p
                    style={{
                      textShadow: "2px 2px 4px red",
                    }}
                    className="text-white md:w-[40%] ml-2 text-sm md:text-lg md:ml-14 font-medium mt-3 md:mt-7"
                  >
                    {contents.prg}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div>
        <CardSlider />
      </div>
    </>
  );
}

export default HomePage;
