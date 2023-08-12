import React from "react";
import logo from "/public/image/raw-logo.png";
import Image from "next/image";

interface HomeProps {
  langMode: boolean;
}

const Purposes: React.FC<HomeProps> = ({ langMode }) => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 place-items-center p-12"
      id="purposes"
    >
      <div>
        <Image className="h-48 w-36 md:h-60 md:w-44" src={logo} alt="Logo" />
      </div>
      <div className="md:ml-20 mt-8">
        <div className="text-center font-bold">
          <h1>VISI</h1>
        </div>
        <div className="text-center">
          {`${
            langMode
              ? `“Optimisme Masa Depan Cerah Untuk Batik Nusantara Dalam Melestarikan Busana Ciri Khas Indonesia Hingga Dikenal di seluruh Dunia.”`
              : `"A Bright Future Optimism for Batik Nusantara in Preserving the Distinctive Indonesian Attire Until It's Known Worldwide."`
          }`}
        </div>
        <div className="text-center mt-8 font-bold">MISI</div>
        <div className="text-center">
          {`${
            langMode
              ? `Batik Nusantara Akan Terus Berkembang Mewujudkan Pelestarian Batik Sebagai Busana Tradisional Bangsa Indonesia Di Mata Dunia Melalui Sosial Media`
              : `Batik Nusantara Will Continue to Grow in Realizing the Preservation of Batik as Indonesia's Traditional Attire in the Eyes of the World Through Social Media.`
          }`}
        </div>
      </div>
    </div>
  );
};

export default Purposes;
