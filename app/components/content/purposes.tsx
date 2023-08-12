import React from "react";
import logo from "/public/image/raw-logo.png";
import Image from "next/image";

const Purposes: React.FC = () => {
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
          “Optimisme Masa Depan Cerah Untuk Batik Nusantara Dalam Melestarikan
          Busana Ciri Khas Indonesia Hingga Dikenal di seluruh Dunia.”
        </div>
        <div className="text-center mt-8 font-bold">MISI</div>
        <div className="text-center">
          Batik Nusantara Akan Terus Berkembang Mewujudkan Pelestarian Batik
          Sebagai Busana Tradisional Bangsa Indonesia Di Mata Dunia Melalui
          Sosial Media
        </div>
      </div>
    </div>
  );
};

export default Purposes;
