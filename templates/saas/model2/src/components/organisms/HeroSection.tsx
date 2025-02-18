import revisionImg from "@/assets/icons/actions/revision.png";
import designImg from "@/assets/icons/actions/designs.png";
import startImg from "@/assets/icons/actions/start.png";
import { Separator } from "../atom/separator";
import { ArrowRightCircleIcon, ArrowRightIcon, StarsIcon } from "lucide-react";
import MotionButton from "../molecule/buttons/MotionButton";
import BrandsCarousel from "../molecule/carousel/BrandsCarousel";
import MotionIconButton from "../molecule/buttons/MotionIconButton";
import Reveal from "../molecule/animations/Reveal";

const Actions: { title: string; description: string; icon: string }[] = [
  {
    title: "Subscribe & get started",
    description:
      "Submit as many design tasks as you need without worrying about individual project fees.",
    icon: startImg,
  },
  {
    title: "Polished designs - on time",
    description:
      "Our designers get to work to deliver your request. Receive your design within a few days.",
    icon: designImg,
  },
  {
    title: "Revisions made simple",
    description: "Custom designs, prompt replies and as many revisions as you need.",
    icon: revisionImg,
  },
];

const HeroSection = () => {
  return (
    <div className="relative group/hero bg-[#111204] pb-24 md:pb-44 pt-36 md:pt-52">
      <h1 className="reflection px-2 z-30 capitalize relative font-bold text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-[463px] sm:max-w-[563px] md:max-w-[763px] lg:max-w-[863px] mx-auto text-white mb-1">
        <StarsIcon className="absolute hidden sm:inline right-0 md:right-24 lg:right-0 md:bottom-0 lg:top-0 size-20 lg:size-28 fill-[#111204OE] text-[#B9FD500F]" />
        <span className="[text-shadow:0px_0px_5px_#B9FD50,0px_0px_10px_#B9FD50] sm:[text-shadow:0px_0px_10px_#B9FD50,0px_0px_20px_#B9FD50]">
          Bringing your dream into
        </span>{" "}
        <span className="text-[#B9FD50] z-10 font-extrabold font-plusJakartaSans italic">
          reality
        </span>
      </h1>

      <p className="text-center px-6 max-w-[322px] sm:max-w-[422px] md:max-w-[522px] text-sm sm:text-base md:text-lg text-white/80 mx-auto mb-6 sm:mb-10">
        We increase revenue and ensure sustainable long-term growth for your business
        through powerful Webflow websites.
      </p>

      <div className="flex justify-center mb-16">
        <MotionButton>Book A Meeting</MotionButton>
      </div>

      <Reveal
        delay={0.1}
        className="lg:max-w-[calc(100vw-204px)] space-y-9 mx-auto mb-8 px-6"
      >
        <div className="text-center text-sm text-white flex justify-center items-center font-bold mb-10 gap-7">
          <Separator className="bg-[#B9FD50] w-12" />
          <p className="w-max">TRUSTED BY AMAZING BRANDS</p>
          <Separator className="bg-[#B9FD50] w-12" />
        </div>
      </Reveal>

      <div className="mb-16 md:mb-32">
        <BrandsCarousel variant={"neutral"} />
      </div>

      <section
        className="flex flex-col px-6 sm:flex-row gap-4 md:gap-12 md:max-w-[calc(100vw-104px)] lg:max-w-[calc(100vw-304px)] xl:max-w-[calc(100vw-404px)] mx-auto mb-32"
        id="process"
      >
        <Reveal variant="to-left" className="w-full sm:w-1/2 md:w-[60%] space-y-4">
          <h3 className="text-[#B9FD50] uppercase">How We Work</h3>
          <p className="font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white">
            Get a dedicated design team at fraction of the cost.
          </p>
        </Reveal>
        <Reveal
          variant="to-right"
          className="space-y-9 w-full sm:w-1/2 md:w-[40%] sm:pt-12"
        >
          <p className="text-white/80 text-lg lg:text-2xl">
            Grow your brand with high-quality design for a flat monthly fee. Work
            with senior designers. Subscribe and make as many requests as you need -
            no limits.
          </p>

          <MotionIconButton
            icon={
              <ArrowRightCircleIcon className="size-5 fill-[#111204] text-[#B9FD50]" />
            }
          >
            See pricing
          </MotionIconButton>
        </Reveal>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 md:gap-12 md:max-w-[calc(100vw-104px)] lg:max-w-[calc(100vw-304px)] xl:max-w-[calc(100vw-404px)] mx-auto px-6">
        {Actions.map((action, index) => (
          <Reveal
            delay={index * 0.2}
            variant="to-left"
            key={index + 4}
            className="space-y-4"
          >
            <div className="relative flex items-center h-16 md:h-20 mb-6 md:mb-10">
              <div className="size-16 md:size-20 rounded-full bg-[#B9FD50] flex items-center">
                <img
                  src={action.icon}
                  alt={action.title}
                  loading="lazy"
                  className="aspect-auto object-contain w-32 md:w-40 h-8 md:h-12"
                />
              </div>
              {index + 1 !== Actions.length ? (
                <>
                  <Separator className="flex-1 h-[4px] bg-[#B9FD50] hidden sm:inline" />
                  <ArrowRightIcon className="size-8 text-[#B9FD50] absolute hidden sm:block -right-2 -translate-y-1/2 top-1/2" />
                </>
              ) : null}
            </div>
            <p className="text-white text-xl md:text-2xl mb-5">{action.title}</p>
            <p className="text-white/80 font-light md:text-lg">
              {action.description}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
