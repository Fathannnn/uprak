// src/components/Footer.jsx
import Petani from '../components/svgexport-30.svg'

export default function Footer() {
  return (
    <footer className="bg-[#1e293b] text-white py-10 px-6 md:px-20">
      <div className="grid md:grid-cols-5 gap-8 mb-10">
        {/* Logo & Description */}
        <div className="md:col-span-1">
         <img src= {Petani} alt="" />
          <p className="mt-4 text-sm text-gray-300">
            Tempat belajar budidaya kode (coding) <br />
            dengan tutorial yang gampang dipahami.
          </p>
        </div>

        {/* Belajar */}
        <div>
          <h3 className="font-bold mb-3">Belajar</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Artikel</a></li>
            <li><a href="#">Tutorial</a></li>
            <li><a href="#">Buku</a></li>
          </ul>
        </div>

        {/* Popular Tutorial */}
        <div>
          <h3 className="font-bold mb-3">Popular Tutorial</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Tutorial Bahasa C</a></li>
            <li><a href="#">Tutorial Javascript</a></li>
            <li><a href="#">Tutorial Java</a></li>
            <li><a href="#">Tutorial PHP</a></li>
            <li><a href="#">Tutorial Python</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-bold mb-3">Social Media</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Facebook Page</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Youtube Channel</a></li>
            <li><a href="#">Telegram Channel</a></li>
          </ul>
        </div>

        {/* Petani Kode */}
        <div>
          <h3 className="font-bold mb-3">Petani Kode</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">About</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-center items-center text-sm text-gray-400">
        <p>© 2025 <span className="font-semibold text-white">Petani Kode</span> · Made with <span className="text-red-500">❤️</span> using Hugo 0.134.0</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-white"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-white"><i className="fab fa-telegram-plane"></i></a>
          <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-white"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
}