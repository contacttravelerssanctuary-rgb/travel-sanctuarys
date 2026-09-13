import AvailabilityGrid from "@/components/AvailabilityGrid";
import InquiryButton from "@/components/InquiryButton";
import ContactButton from "@/components/ContactButton";

export default function Home() {
  return (
    <main>
      {/* NAV */}
      <header id="top" className="flex items-center justify-between px-8 py-4 bg-white border-b border-line font-sans scroll-mt-20">
        <div className="flex items-center gap-2.5 font-bold text-[15px] tracking-wide">
          <div className="w-[30px] h-[30px] rounded-md bg-dark flex items-center justify-center text-white text-sm">T</div>
          TRAVELER'S SANCTUARY LLC
        </div>
        <nav className="hidden md:flex gap-7 text-sm text-ink-soft">
          <a href="#top" className="hover:text-ink hover:font-semibold">Home</a>
          <a href="#intro" className="hover:text-ink hover:font-semibold">About Us</a>
          <a href="#nearby" className="hover:text-ink hover:font-semibold">Location</a>
          <a href="#amenities" className="hover:text-ink hover:font-semibold">Amenities</a>
          <a href="#rules" className="hover:text-ink hover:font-semibold">Rules</a>
          <a href="#availability" className="hover:text-ink hover:font-semibold">Availability</a>
          <a href="#inquire" className="hover:text-ink hover:font-semibold">Contact</a>
        </nav>
        <InquiryButton label="Inquire Now" className="bg-dark text-white px-5 py-2.5 rounded text-[13px] font-semibold tracking-wide" />
      </header>

      {/* HERO */}
      <section className="relative h-[560px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80"
          alt="Home exterior at dusk"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.55]"
        />
        <div className="absolute left-0 bottom-0 p-14 text-white max-w-[560px]">
          <h1 className="text-[34px] md:text-[46px] leading-[1.15] font-normal mb-4">Your Home Between Assignments</h1>
          <p className="text-base text-[#e9e7e0] mb-6 max-w-[420px]">
            Comfortable living for the traveling professional.
          </p>
          <a href="#availability" className="inline-block bg-white text-dark px-7 py-3.5 text-[13px] font-bold tracking-wide uppercase rounded font-sans">
            Check Availability
          </a>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <div className="flex justify-around flex-wrap gap-4 bg-white px-5 py-6 border-b border-line font-sans">
        {[
          ['🛏️', 'Fully Furnished'],
          ['💡', 'Utilities Included'],
          ['📶', 'High-Speed Wi-Fi'],
          ['💻', 'Dedicated Workspace'],
        ].map(([icon, label]) => (
          <div key={label} className="flex flex-col items-center gap-2 text-xs text-ink-soft text-center w-[130px]">
            <div className="text-xl">{icon}</div>
            {label}
          </div>
        ))}
      </div>

      {/* INTRO */}
      <section id="intro" className="bg-cream text-center py-16 px-8 scroll-mt-20">
        <h2 className="text-3xl font-normal mb-3.5">Designed for the Traveling Professional</h2>
        <p className="text-ink-soft text-[15px] max-w-[560px] mx-auto mb-8">
          A quiet, comfortable home in a safe suburban neighborhood, ideal for travel nurses, consultants, agency contractors, and anyone working an assignment away from home.
        </p>
        <a href="#gallery" className="inline-block bg-dark text-white px-7 py-3.5 text-[13px] font-bold tracking-wide uppercase rounded font-sans">
          Take a Tour
        </a>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-white text-center py-16 px-8 scroll-mt-20">
        <h2 className="text-3xl font-normal mb-3.5">Inside the Home</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-[900px] mx-auto mb-8">
          {[
            ['https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80', 'Living room'],
            ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80', 'Dining area'],
            ['https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80', 'Bedroom'],
          ].map(([src, alt]) => (
            <div key={alt} className="aspect-[4/3] rounded-md overflow-hidden">
              <img src={src} alt={alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <a href="#" className="inline-block bg-dark text-white px-7 py-3.5 text-[13px] font-bold tracking-wide uppercase rounded font-sans">
          View Photo Gallery
        </a>
      </section>

      {/* NEARBY */}
      <section id="nearby" className="bg-cream-2 text-center py-16 px-8 scroll-mt-20">
        <h2 className="text-3xl font-normal mb-3.5">What's Nearby</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 max-w-[820px] mx-auto mb-8 font-sans">
          {[
            ['🚑', 'Wylie ER', '6 min drive'],
            ['🏥', 'Medical City Sachse', '9 min drive'],
            ['🛒', 'Kroger Marketplace', '3 min drive'],
            ['☕', 'Armor Coffee Co', '2 min drive'],
            ['🌳', 'Founders Park', '4 min drive'],
          ].map(([icon, place, time]) => (
            <div key={place} className="text-center text-[13px]">
              <div className="text-2xl mb-2.5">{icon}</div>
              <div className="font-bold mb-0.5">{place}</div>
              <div className="text-ink-soft text-xs">{time}</div>
            </div>
          ))}
        </div>
        <div className="max-w-[820px] mx-auto rounded-lg overflow-hidden aspect-[16/9] border border-line">
          <iframe
            src="https://www.google.com/maps?q=211+Waterwood+Dr,+Wylie,+TX+75098&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map showing the property location in Wylie, Texas"
          />
        </div>
      </section>

      {/* AMENITIES */}
      <section id="amenities" className="bg-white text-center py-16 px-8 scroll-mt-20">
        <h2 className="text-3xl font-normal mb-3.5">Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 max-w-[760px] mx-auto font-sans">
          {[
            'Fully Furnished', 'Utilities Included', 'Full Kitchen', 'Keyless Entry',
            'Smart TV', 'Washer & Dryer', 'Dishwasher', 'Central A/C',
            'Garage Parking', 'Weekly Lawn Care',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2.5 text-sm">
              <span className="text-accent font-bold">✓</span>{item}
            </div>
          ))}
        </div>
      </section>

      {/* HOUSE RULES */}
      <section id="rules" className="bg-cream py-16 px-8 scroll-mt-20">
        <div className="grid md:grid-cols-2 gap-10 max-w-[900px] mx-auto items-center">
          <div>
            <h2 className="text-[28px] font-normal mb-5">House Rules</h2>
            <ul className="list-none font-sans">
              {[
                'No pets',
                'No smoking or vaping',
                'No parties or large gatherings',
                'No interior modifications (painting, mounting, etc.)',
                'Quiet hours 10PM – 7AM',
                'Respect neighbors and HOA guidelines',
              ].map((rule) => (
                <li key={rule} className="py-2 text-sm text-ink-soft border-b border-line before:content-['✓_'] before:text-accent before:font-bold">
                  {rule}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-md overflow-hidden aspect-[4/3.4]">
            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80"
              alt="Cozy living space"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* AVAILABILITY */}
      <section id="availability" className="bg-white text-center py-16 px-8 scroll-mt-20">
        <h2 className="text-3xl font-normal mb-3.5">Availability</h2>
        <AvailabilityGrid />
        <InquiryButton label="Select Your Dates" className="inline-block bg-dark text-white px-7 py-3.5 text-[13px] font-bold tracking-wide uppercase rounded font-sans" />
      </section>

      {/* CTA */}
      <section id="inquire" className="bg-cream-2 text-center py-16 px-8 scroll-mt-20">
        <h2 className="text-[28px] font-normal mb-2.5">Ready to Make It Home?</h2>
        <p className="text-ink-soft mb-6 font-sans">Have questions or want to book your stay? We'd love to hear from you.</p>
        <ContactButton label="Get in Touch" className="inline-block bg-dark text-white px-7 py-3.5 text-[13px] font-bold tracking-wide uppercase rounded font-sans" />
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-[#cfd3ce] px-8 pt-12 pb-6 font-sans">
        <div className="grid grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-8 max-w-[1024px] mx-auto mb-8 text-sm">
          <div>
            <div className="flex items-center gap-2.5 font-bold text-white mb-3">
              <div className="w-[30px] h-[30px] rounded-md bg-white text-dark flex items-center justify-center text-sm">T</div>
              TRAVELER'S SANCTUARY LLC
            </div>
            <p className="text-[#9aa39a] text-[13px] leading-relaxed">Comfortable living for the traveling professional.</p>
          </div>
          <div>
            <h4 className="text-white text-[13px] mb-3.5 tracking-wide uppercase">Quick Links</h4>
            {['Home', 'About Us', 'Location', 'Availability', 'FAQs'].map((l) => (
              <a key={l} href="#" className="block text-[#b7bdb5] mb-2 text-[13px]">{l}</a>
            ))}
          </div>
          <div>
            <h4 className="text-white text-[13px] mb-3.5 tracking-wide uppercase">Information</h4>
            <a href="#" className="block text-[#b7bdb5] mb-2 text-[13px]">House Rules</a>
            <a href="#" className="block text-[#b7bdb5] mb-2 text-[13px]">Amenities</a>
          </div>
          <div>
            <h4 className="text-white text-[13px] mb-3.5 tracking-wide uppercase">Contact</h4>
            <p className="text-[#9aa39a] text-[13px] leading-relaxed">(555) 123-4567</p>
            <p className="text-[#9aa39a] text-[13px] leading-relaxed">hello@travelsanctuary.com</p>
            <p className="text-[#9aa39a] text-[13px] leading-relaxed">Wylie, Texas</p>
          </div>
        </div>
        <div className="max-w-[1024px] mx-auto pt-5 border-t border-[#333c35] flex justify-between text-xs text-[#8b938a]">
          <span>© 2026 Traveler's Sanctuary LLC. All rights reserved.</span>
        </div>
      </footer>
    </main>
  );
}
