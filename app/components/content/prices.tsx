import React from "react";
import Image from "next/image";
import { priceTText, priceText, priceImageUrl } from "../constant";
import Prices from "../parts/Prices";

const Services: React.FC = () => {
  return (
    <div id="prices">
      <div className="grid grid-cols-1 text-center pt-12">
        <div className="font-bold text-4xl">
          <h1>Harga Pesan Batik Motif Sendiri</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 pt-16 pl-16 pr-16">
        <div className="">
          <h1>
            Biaya pembuatan seragam batik dipengaruhi oleh beberapa hal sebagai
            berikut :
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-justify pt-16 pl-16 pr-16 place-items-center">
        <div className="">
          <div className="text-center font-bold mb-3">
            <h1>Jenis Bahan Yang Digunakan</h1>
          </div>
          <div>
            Ada beragam jenis bahan kain yang bisa digunakan untuk membuat
            seragam batik. Setiap jenisnya memiliki kualitas yang berbeda
            sehingga mempengaruhi harga seragam batik per pcs nya.
          </div>
        </div>
        <div className="w-60 h-60">
          <Image
            src={priceImageUrl[0].imageUrl}
            alt={`Image ${priceImageUrl[0].id}`}
            layout="responsive" // Use responsive layout
            width={400} // Set a default width
            height={400} // Set a default height
            className="rounded-md"
          />
        </div>
        <div className="">
          <div className="text-center font-bold mb-3">
            <h1>Jumlah Warna Yang Dipakai</h1>
          </div>
          <div>
            Banyaknya warna yang dipakai dalam motif juga mempengaruhi besarnya
            biaya yang digunakan untuk membuat seragam batik. Semakin banyak
            warna yang digunakan maka semakin tinggi biayanya.
          </div>
        </div>
        <div className="w-60 h-60">
          <Image
            src={priceImageUrl[1].imageUrl}
            alt={`Image ${priceImageUrl[1].id}`}
            layout="responsive" // Use responsive layout
            width={400} // Set a default width
            height={400} // Set a default height
            className="rounded-md"
          />
        </div>
        <div className="">
          <div className="text-center font-bold mb-3">
            <h1>Banyaknya Jumlah Pesanan</h1>
          </div>
          <div>
            Jumlah pesanan juga mempengaruhi harga seragam batik. Semakin banyak
            jumlah pesanan maka harga akan semakin murah.
          </div>
        </div>
        <div className="w-60 h-60">
          <Image
            src={priceImageUrl[2].imageUrl}
            alt={`Image ${priceImageUrl[2].id}`}
            layout="responsive" // Use responsive layout
            width={400} // Set a default width
            height={400} // Set a default height
            className="rounded-md"
          />
        </div>
        <div className="">
          <div className="text-center font-bold mb-3">
            <h1>Model Dan Ukuran Baju Seragam</h1>
          </div>
          <div>
            Selain model, ukuran baju juga dapat mempengaruhi harga seragam
            batik. Satu kain batik memiliki ukuran panjang 2 meter dan cukup
            untuk kemeja/blus lengan pendek ukuran XL.
          </div>
        </div>
        <div className="w-60 h-60">
          <Image
            src={priceImageUrl[3].imageUrl}
            alt={`Image ${priceImageUrl[3].id}`}
            layout="responsive" // Use responsive layout
            width={400} // Set a default width
            height={400} // Set a default height
            className="rounded-md"
          />
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className="font-bold text-2xl text-center">
          <h1>HARGA PEMESANAN BATIK</h1>
        </div>
        <Prices items={priceText} opt=""/>
        <div className="font-bold text-2xl text-center">
          <h1>JENIS TEKNIK</h1>
        </div>
        <Prices items={priceTText} opt="place-items-center"/>
      </div>
      {/* <div className="grid grid-cols-1 pt-16 pl-16 pr-16 place-items-center">
        <div className="font-bold text-lg">
          <h1>KAIN PRINT BIASA BERMOTIF BATIK</h1>
        </div>
        <div className="text-lg">
          <h2>Harga per meter dari mulai Rp. 45.000,- - Rp. 70.000,-</h2>
          <h2>Jenis Kain katun dari Prima – Primis</h2>
          <h2>Waktu pembuatannya : 3 – 5 minggu</h2>
        </div>
      </div> */}
    </div>
  );
};

export default Services;
