import Image from "next/image";
import React from "react";

function HomePage() {
  return (
    <div>
      {/* Hero section */}
      <div className="relative h-screen w-full">
        <Image
          src={"/pictures/hero-background.jpg"}
          alt="baked goods"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute bottom-10 left-10 bg-pink rounded-full w-80 h-80"></div>
      </div>
      {/* Carrousel */}
      <div className="w-full h-80 bg-pink"></div>
      {/* Section */}
      <div className="container mx-auto bg-white grid grid-cols-1 gap-8 pt-16 px-8 md:grid-cols-2">
        <div className="text-darkGreen">
          <h1 className="text-3xl">Ovenvers Geluk</h1>
          <p>
            ex eosam aut aut apid qui occum eaquibus eostianim labo. Nessusa
            picaeri scimin rem fugitinum, cusam quidunt. t il imendam
            reribusanis re erit magniam sim abo. Ur am lab illorio ilitas eate
            senit assint volorum quis dolorest, qui ius. Da di dolo ex eosam aut
            aut apid qui occum eaquibus eostianim labo. Nessusa picaeri scimin
            rem fugitinum, cusam quidunt. Beris ut il imendam reribusanis re
            erit
          </p>
        </div>
        <div className="relative h-[900px] w-full rounded-xl">
          <Image
            className="rounded-t-3xl md:rounded-t-full"
            src={"/pictures/hero-background.jpg"}
            alt="baked goods"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      {/* Graphic */}
      <div className="bg-darkGreen h-[250px]"></div>
      {/* Section */}
      <div className="bg-white grid grid-cols-1 gap-8 py-16 px-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative h-[500px] w-full rounded-xl lg:col-span-2">
          <Image
            className="rounded-3xl"
            src={"/pictures/hero-background.jpg"}
            alt="baked goods"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="text-darkGreen">
          <h1 className="text-3xl">Geluk Uit De Oven</h1>
          <p>
            ex eosam aut aut apid qui occum eaquibus eostianim labo. Nessusa
            picaeri scimin rem fugitinum, cusam quidunt. t il imendam
            reribusanis re erit magniam sim abo. Ur am lab illorio ilitas eate
            senit assint volorum quis dolorest, qui ius. Da di dolo ex eosam aut
            aut apid qui occum eaquibus eostianim labo. Nessusa picaeri scimin
            rem fugitinum, cusam quidunt. Beris ut il imendam reribusanis re
            erit
          </p>
        </div>
      </div>
      {/* Graphic */}
      <div className="bg-darkGreen h-[250px]"></div>
      {/* Section */}
      <div className="bg-white grid grid-cols-1 gap-8 py-16 px-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="text-darkGreen">
          <h1 className="text-3xl">Geluk Uit De Oven</h1>
          <p>
            ex eosam aut aut apid qui occum eaquibus eostianim labo. Nessusa
            picaeri scimin rem fugitinum, cusam quidunt. t il imendam
            reribusanis re erit magniam sim abo. Ur am lab illorio ilitas eate
            senit assint volorum quis dolorest, qui ius. Da di dolo ex eosam aut
            aut apid qui occum eaquibus eostianim labo. Nessusa picaeri scimin
            rem fugitinum, cusam quidunt. Beris ut il imendam reribusanis re
            erit
          </p>
        </div>
        <div className="relative h-[500px] w-full rounded-xl lg:col-span-2">
          <Image
            className="rounded-3xl"
            src={"/pictures/hero-background.jpg"}
            alt="baked goods"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      {/* Graphic */}
      <div className="bg-darkGreen h-[250px]"></div>
    </div>
  );
}

export default HomePage;
