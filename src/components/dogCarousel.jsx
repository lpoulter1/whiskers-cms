import { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenWidth();

    const handleResize = () => {
      checkScreenWidth();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // write and if else statement to check if media is phone or tablet
  // if it is return null
  // else return the carousel

  // if (
  //   window.matchMedia("(max-width: 640px)").matches ||
  //   window.matchMedia("(max-width: 768px)").matches
  // ) return (<p>
  //   Sorry, this carousel is not available on mobile devices.
  // </p>)

  if (isMobile)
    return (
      <div class="flex flex-col">
        {/* <p className="text-red-500 ">this is the mobile device carousel.</p> */}
        <Carousel className="">
          <CarouselContent className=" ">
            {reviews.map((review, index) => {
              return (
                <CarouselItem key={index} className=" ">
                  <CarouselItem className=" flex ">
                    <div className="">
                      <Card>
                        <CardContent className=" ">
                          <div className=" flex  flex-col gap-3">
                            <p class="text-center ">"{review.text}"</p>
                            <div class="flex flex-col text-center items-center ">
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
                  </CarouselItem>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    );
  else {
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
}
