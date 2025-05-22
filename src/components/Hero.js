import Petani from "../components/Petani Kode.svg"; // Ganti dengan path ke gambarmu

const HeroSection = () => {
  return (
    <section className="px-20 py-10 md:py-20 bg-slate-900 text-white">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Konten teks */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-5 tracking-tighter">
            Petani Kode
          </h1>
          <p className="text-xl md:text-2xl font-light mb-6">
            Belajar budidaya kode <i>(coding)</i> dengan tutorial yang mudah dipahami. <i>Mostly</i> pakai Linux.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="/tutorial/"
              className="px-4 py-2 bg-teal-600 hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 rounded-lg active:bg-teal-500"
            >
              Mulai Belajar
            </a>
            <a
              href="#newsletter"
              className="px-4 py-2 bg-teal-400/10 border border-teal-400/50 hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 text-teal-100 rounded-lg active:bg-teal-500"
            >
              Join Newsletter
            </a>
          </div>
        </div>

        {/* Gambar */}
        <div className="ml-200 top-100 mx-w-[832] sm:max-w-[500px]  ">
          <img
            src={Petani}
            alt="Petani Kode"
            className="w-64 md:w-80 lg:w-96"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;