import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { reviews } from "src/data/testimonials.astro";

export default function TestimonialsCarousel() {
  const carouselItems = [];

  for (let i = 0; i < reviews.length; i += 2) {
    const review = reviews[i];
    const nextReview = i + 1 < reviews.length ? reviews[i + 1] : null;

    carouselItems.push(
      <CarouselItem key={i} className="items-center justify-evenly">
        <div className="flex  gap-10 flex-col md:flex-row">
          <div className="md:w-1/2 ">
            <Card className="h-96 w-96 content-center bg-neutral-50 ">
              <CardContent className=" ">
                <div className="flex flex-col gap-5 m-5 items-center h-3/6">
                  <p className="text-center text-neutral-900 font-medium text-sm">
                    "{review.text}"
                  </p>
                  <div className="flex flex-col text-center items-center">
                    <img
                      src={review.image}
                      alt={review.imageAlt}
                      className="rounded-full h-20 w-20 object-cover"
                      width="80" height="auto"
                    />
                    <h3 className="text-orange-600 font-medium">
                      {review.name}
                    </h3>
                    <h5>{review.dogBreed}</h5>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {nextReview && (
            <div className="md:w-1/2">
              <Card className="h-96 w-96 content-center  bg-neutral-50">
                <CardContent className="">
                  <div className="flex flex-col gap-5 m-5 items-center h-3/6">
                    <p className="text-center text-neutral-900 font-medium text-sm ">
                      "{nextReview.text}"
                    </p>
                    <div className="flex flex-col text-center items-center">
                      <img
                        src={nextReview.image}
                        alt={nextReview.imageAlt}
                        className="rounded-full h-20 w-20 object-cover"
                        width="80" height="auto"
                      />
                      <h3 class="text-orange-600 font-medium">
                        {nextReview.name}
                      </h3>
                      <h5>{nextReview.dogBreed}</h5>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </CarouselItem>
    );
  }

  return (
    <div
      className="flex flex-col size-11/12 p-3 justify-center
    "
    >
      <div className="flex flex-col md:hidden">
        <Carousel className="">
          <CarouselContent className=" ">
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="flex place-items-center">
                <div className="">
                  <Card className="bg-neutral-50">
                    <CardContent className="">
                      <div className=" flex flex-col gap-3">
                        <p className="text-center">{review.text}</p>
                        <div className="flex flex-col text-center items-center ">
                          <img
                            src={review.image}
                            alt={review.imageAlt}
                            className="rounded-full h-20 w-20 object-cover"
                            width="80" height="auto"
                          />
                          <h4 className="text-orange-600 font-medium">
                            {review.name}
                          </h4>
                          <h5>{review.dogBreed}</h5>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="hidden md:flex justify-center">
        <Carousel className=" max-w-4xl flex ">
          <CarouselContent className="flex">{carouselItems}</CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
