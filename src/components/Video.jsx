import React from "react";

export const Video = () => {
  return (
    <>
      <section className="p-10 text-center">
        <div>
          <h2 className="text-2xl font-bold mb-2 md:text-4xl">
            Aqui va un video de presentacion de servicios
          </h2>
          <p className="md:mb-10 lg:mb-10 lg:w-1/2 lg:mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
            rerum, saepe quidem optio
          </p>
        </div>

        <div className="aspect-w-16 aspect-h-9 sm:aspect-w-16 md:aspect-h-9 md:aspect-w-16 sm:aspect-h-9 lg:aspect-w-10 lg:aspect-h-4">
          <iframe
            // width="560"
            // height="400"
            src="https://www.youtube.com/embed/uKinxWjiWfE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            //className="block mx-auto md:w-1/2"
          ></iframe>
        </div>
      </section>
    </>
  );
};
