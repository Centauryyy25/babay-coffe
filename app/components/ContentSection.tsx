import React from "react";

type Card = {
  title: string;
  description: string;
  image: string;
  button: {
    label: string;
    style?: string;
  };
};

export default function ContentSection() {
  const title = "Why Choose Us?";
  const subtitle =
    "Kami menghadirkan cita rasa terbaik dengan bahan berkualitas dan sentuhan cinta pada setiap sajian Babay Caffe.";

  const cards: Card[] = [
    {
      title: "Artisan Breads",
      description:
        "Roti buatan tangan dengan tekstur lembut dan aroma autentik, dibuat setiap hari untuk menjaga kesegaran.",
      image: "https://i.pinimg.com/1200x/13/9f/f5/139ff5da79bf62fa6743b9044ea9c6af.jpg",
      button: {
        label: "View Bakery",
        style: "rounded-full bg-[#8B5E3C] text-white hover:bg-[#6E462D]",
      },
    },
    {
      title: "Babay Signature Coffe",
      description:
        "Kue kering dan pastry renyah dengan sentuhan rasa manis yang pas, cocok untuk teman kopi sore Anda.",
      image: "https://i.pinimg.com/1200x/64/b4/de/64b4de23e2ae6ea9e9b85168ff5d9051.jpg",
      button: {
        label: "View Pastry",
        style: "rounded-full bg-[#8B5E3C] text-white hover:bg-[#6E462D]",
      },
    },
    {
      title: "Coffe Indocaffe",
      description:
        "Pesan kue sesuai keinginan Anda untuk momen spesial, dibuat dengan bahan premium dan desain elegan.",
      image: "https://i.pinimg.com/736x/e4/5f/bc/e45fbcae1656fb49272d472dbb834596.jpg",
      button: {
        label: "View Cakes",
        style: "rounded-full bg-[#8B5E3C] text-white hover:bg-[#6E462D]",
      },
    },
  ];

  return (
    <section
      className="w-full"
      style={{
        background: "#F8F1E7",
        color: "#3E2A1D",
        fontFamily: "Playfair Display, Poppins, sans-serif",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 md:px-16 lg:px-28 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-[#3E2A1D]/80">
            {subtitle}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group bg-[#FFF8F3] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-in fade-in-50 slide-in-from-bottom-2"
            >
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-44 sm:h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm md:text-base text-[#3E2A1D]/80">
                  {card.description}
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className={`inline-flex items-center justify-center px-5 py-2 ${
                      card.button.style || ""
                    } transition-colors`}
                  >
                    {card.button.label}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export { ContentSection as Section };

