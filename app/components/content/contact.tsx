import React from "react";
import logo from "/public/image/contact.png";
import instagram from "/public/image/instagram.png";
import whatsapp from "/public/image/whatsapp.png";
import shopee from "/public/image/shopee.png";
import tokopedia from "/public/image/tokopedia.png";
import Image from "next/image";
import Link from "next/link";

const Contact: React.FC = () => {
  return (
    <div
      className="grid grid-cols-1 gap-4 place-items-center p-12"
      id="contact"
    >
      <div className="font-bold text-4xl mb-5">
        <h1>KONTAK KAMI</h1>
      </div>
      <div className="">
        <Image className="h-40 w-40 md:h-60 md:w-60" src={logo} alt="Logo" />
      </div>
      <div className="grid grid-cols-2 gap-4 p-12" id="contact">
        <div className="text-center">
          <div className="font-bold">
            <h1>Alamat Showroom :</h1>
          </div>
          <div className="font-bold mt-5">
            <h1>Showroom Pusat</h1>
          </div>
          <div>
            Jl. Puri Jambangan Baru III No.36, Karah, Kec. Jambangan, Surabaya,
            Jawa Timur 60232
          </div>
          <div className="font-bold mt-5">
            <h1>Surabaya Kriya Galery (SKG) - Merr</h1>
          </div>
          <div>
            Jl. Dr. Ir. H. Soekarno No.11, Medokan Semampir, Kota Surabaya, Jawa
            Timur 60298
          </div>
          <div className="font-bold mt-5">
            <h1> Surabaya Kriya Gallery (SKG) - Siola</h1>
          </div>
          <div>
            Jl. Tunjungan No.1-3, Genteng, Kec. GentengKota Surabaya, Jawa Timur
            60275
          </div>
          <div className="font-bold mt-5">
            <h1> Hotel bisanta - Surabaya</h1>
          </div>
          <div>
            Jl. Tegalsari No.77-85, Tegalsari, Kec. TegKota Surabaya, Jawa Timur
            60262
          </div>
          <div className="font-bold mt-5">
            <h1> UMKM Centre BSI- Surabaya</h1>
          </div>
          <div>
            Jl. R.A Kartini No.107-109, DR. Soetomo, KeKota Surabaya, Jawa Timur
            60264
          </div>
          <div className="font-bold mt-5">
            <h1> HARRIS Hotel & Conventions Bundaran Satelit</h1>
          </div>
          <div>
            Jl. Mayjen HR. Muhammad No.2A, Putat Gede, Kec. Sukomanunggal,
            Surabaya, Jawa Timur 60189
          </div>
        </div>
        <div className="text-center">
          <div className="font-bold mb-4">
            <h1>Social Media :</h1>
          </div>
          <Link
            href="https://peken.surabaya.go.id/store/info/38"
            className="font-bold mb-5 flex ml-24 mr-24 place-items-center hover:underline"
            target="_blank"
          >
            Webstore : https://peken.surabaya.go.id/store/info/38
          </Link>
          <Link
            href="https://www.instagram.com/nadeenbybatiknusantara"
            className="font-bold mb-5 flex ml-32 mr-32 place-items-center hover:underline"
            target="_blank"
          >
            <Image className="h-10 w-10 mr-5" src={instagram} alt="Logo" />
            @nadeenbybatiknusantara
          </Link>
          <Link
            href="https://shopee.co.id/nadeenbybatiknusantara"
            className="font-bold mb-5 flex ml-32 mr-32 place-items-center hover:underline"
            target="_blank"
          >
            <Image className="h-10 w-10 mr-5" src={shopee} alt="Logo" />
            nadeenbybatiknusantara
          </Link>
          <Link
            href="https://www.tokopedia.com/nadeenbybatiknusantara"
            className="font-bold mb-5 flex ml-32 mr-32 place-items-center hover:underline"
            target="_blank"
          >
            <Image className="h-10 w-10 mr-5" src={tokopedia} alt="Logo" />
            nadeenbybatiknusantara
          </Link>
          <div className="font-bold mb-5 flex ml-32 mr-32 place-items-center">
            <Image className="h-10 w-10 mr-5" src={whatsapp} alt="Logo" />
            08156653189 / 081331066535
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
