"use client"

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";


const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-colorOne">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[300px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url('${card.url}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-end">
        {/* <div className="bg-gradient-to-br from-white/10 to-white/0 font-black text-white backdrop-blur-sm"> */}
          <p className="px-4 py-1 mr-2 mb-2 text-1xl bg-colorTwo rounded-full text-white">
            {card.title}
          </p>
          
        {/* </div> */}
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "https://ik.imagekit.io/23umzxu6uw/img/1.jpg?updatedAt=1708913006893",
    title: "Fortinet",
    id: 1,
  },
  {
    url: "https://ik.imagekit.io/23umzxu6uw/img/2.jpg?updatedAt=1708913006166",
    title: "Fortinet",
    id: 2,
  },
  {
    url: "https://ik.imagekit.io/23umzxu6uw/img/3.jpg?updatedAt=1708913008471",
    title: "Seminar",
    id: 3,
  },
  {
    url: "https://ik.imagekit.io/23umzxu6uw/img/4.jpg?updatedAt=1708913007716",
    title: "Fortinet NSE 1",
    id: 4,
  },
  {
    url: "https://ik.imagekit.io/23umzxu6uw/img/5.jpg?updatedAt=1708913007855",
    title: "Fortinet NSE 2",
    id: 5,
  },
  {
    url: "https://ik.imagekit.io/23umzxu6uw/img/6.jpg?updatedAt=1708913007182",
    title: "TrendMicro",
    id: 6,
  },
  {
    url: "https://ik.imagekit.io/23umzxu6uw/img/7.jpg?updatedAt=1708913007443",
    title: "TrendMicro",
    id: 7,
  },
  {
    url: "https://ik.imagekit.io/23umzxu6uw/img/8.jpg?updatedAt=1708913008018",
    title: "TrendMicro",
    id: 8,
  },
  {
    url: "https://ik.imagekit.io/23umzxu6uw/img/9.jpg?updatedAt=1708913010141",
    title: "TrendMicro",
    id: 9,
  },
  {
    url: "https://ik.imagekit.io/23umzxu6uw/img/10.jpg?updatedAt=1708913007233",
    title: "TrendMicro",
    id: 10,
  },
  {
    url: "https://ik.imagekit.io/23umzxu6uw/img/11.jpg?updatedAt=1708913003975",
    title: "Seminar",
    id: 11,
  },
];