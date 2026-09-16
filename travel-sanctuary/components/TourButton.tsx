"use client";
import { useState } from "react";

const tourImages = [
  { src: "/house-exterior.png", alt: "Home exterior" },
  { src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80", alt: "Living room" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", alt: "Dining area" },
  { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80", alt: "Bedroom" },
  { src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80", alt: "Cozy living space" },
];

export default function TourButton({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  function next() {
    setIndex((i) => (i + 1) % tourImages.length);
  }
  function prev() {
    setIndex((i) => (i - 1 + tourImages.length) % tourImages.length);
  }

  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
          setIndex(0);
        }}
        className={className}
      >
        {label}
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition text-2xl leading-none"
            aria-label="Close tour"
          >
            ×
          </button>

          <button
            onClick={prev}
            className="absolute left-2 md:left-8 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition text-2xl"
            aria-label="Previous photo"
          >
            ‹
          </button>

          <div className="max-w-4xl w-full">
            <img
              src={tourImages[index].src}
              alt={tourImages[index].alt}
              className="w-full max-h-[80vh] object-contain rounded-md"
            />
            <p className="text-white text-center text-sm mt-4 font-sans">
              {tourImages[index].alt} · {index + 1} / {tourImages.length}
            </p>
          </div>

          <button
            onClick={next}
            className="absolute right-2 md:right-8 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition text-2xl"
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
