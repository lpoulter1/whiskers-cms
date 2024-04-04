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
  return (
    <Carousel className="w-full max-w-4xl flex	">
      <CarouselContent className="flex ">
        {reviews.map((review, index) => {
          // Get the next review in the array
          const nextReview = reviews[index + 1];
          {
            /* debugger; */
          }

          return (
            <CarouselItem key={index} className="flex ">
              <div className="flex  gap-10 flex-col md:flex-row">
                <div className="md:w-1/2 ">
                  <Card>
                    <CardContent className=" ">
                      <div class="flex flex-col gap-5 m-5 items-center h-3/6 ">
                        <p>{index}</p>
                        <p class="text-center ">"{review.text}"</p>
                        <div class="flex flex-col text-center items-center">
                          <img
                            src={review.image}
                            alt={review.imageAlt}
                            className="rounded-full h-20 w-20 object-cover"
                          />
                          <h4>{review.name}</h4>
                          <h5>{review.dogBreed}</h5>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                {nextReview && (
                  <div className="md:w-1/2">
                    <Card>
                      <CardContent className="">
                        <div class="flex flex-col gap-5 m-5 items-center h-3/6  ">
                          <p>{index}</p>
                          <p class="text-center">"{nextReview.text}"</p>
                          <div class="flex flex-col text-center items-center">
                            <img
                              src={nextReview.image}
                              alt={nextReview.imageAlt}
                              className="rounded-full h-20 w-20 object-cover"
                            />
                            <h4>{nextReview.name}</h4>
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
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
