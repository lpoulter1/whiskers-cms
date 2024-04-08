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

  if (isMobile)
    return (
      <div className="flex flex-col">
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
                            <p className="text-center">{review.text}</p>
                            <div className="flex flex-col text-center items-center ">
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
    const carouselItems = [];

    for (let i = 0; i < reviews.length; i += 2) {
      const review = reviews[i];
      const nextReview = i + 1 < reviews.length ? reviews[i + 1] : null;

      carouselItems.push(
        <CarouselItem key={i} className="flex  items-center justify-evenly">
          <div className="flex  gap-10 flex-col md:flex-row">
            <div className="md:w-1/2 ">
              <Card className="h-96 w-96 content-center">
                <CardContent className=" ">
                  <div className="flex flex-col gap-5 m-5 items-center h-3/6 ">
                    <p className="text-center ">"{review.text}"</p>
                    <div className="flex flex-col text-center items-center">
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
                <Card className="h-96 w-96 content-center">
                  <CardContent className="">
                    <div className="flex flex-col gap-5 m-5 items-center h-3/6  ">
                      <p className="text-center">"{nextReview.text}"</p>
                      <div className="flex flex-col text-center items-center">
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
    }

    return (
      <Carousel className=" max-w-4xl flex ">
        <CarouselContent className="flex">{carouselItems}</CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  }
}
