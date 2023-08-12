import React from "react";
import Image from "next/image";

interface HomeProps {
  langMode: boolean;
}

const Services: React.FC<HomeProps> = ({ langMode }) => {
  function eng() {
    return (
      <>
        <div className="grid grid-cols-1 text-center pt-12">
          <div className="font-bold text-4xl">
            <h1>Services</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 text-justify pt-16 lg:pl-16 lg:pr-16">
          <div className="">
            <div className="text-center font-bold mb-3">
              <h1>Production of Batik Uniform Fabric</h1>
            </div>
            <div>
              Cap, handprinting, and written batik techniques are utilized to
              serve large-scale production needs for office uniforms, school
              uniforms, communities, and more.
            </div>
          </div>
          <div className="">
            <div className="text-center font-bold mb-3">
              <h1>Batik Uniforms</h1>
            </div>
            <div>
              We also offer tailoring services for batik uniforms for both men
              and women. With the best quality, there's no need to search for
              tailors elsewhere.
            </div>
          </div>
          <div className="">
            <div className="text-center font-bold mb-3">
              <h1>Logo-Emblazoned Batik Uniforms</h1>
            </div>
            <div>
              Batik uniforms can also serve as branding tools. We manufacture
              batik uniforms with company or community logos as well.
            </div>
          </div>
          <div className="">
            <div className="text-center font-bold mb-3">
              <h1>Custom Pattern Batik Uniforms</h1>
            </div>
            <div>
              Want something custom? We also provide custom pattern services
              tailored to your preferences, along with tailoring services for
              custom pattern batik uniforms.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 text-center pt-12">
          <div className="font-bold text-4xl">
            <h1>Basic Materials</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-justify pt-16 pl-16 pr-16">
          <div className="">
            <div className=" font-bold">
              <h1>Poplin Fabric</h1>
            </div>
            <div>
              <ul>
                <li>- Good Quality</li>
                <li>- Fabric Density 133/72</li>
                <li>- Combed Cotton 40s</li>
                <li>- Moderate Shrinkage Level</li>
                <li>- Fine Fabric Texture</li>
              </ul>
            </div>
          </div>
          <div className="">
            <div className=" font-bold">
              <h1>Prima Fabric</h1>
            </div>
            <div>
              <ul>
                <li>- Regular Quality</li>
                <li>- Fabric Density 90/74</li>
                <li>- Combed Cotton 40s</li>
                <li>- Moderate Shrinkage Level</li>
                <li>- Fairly Fine Fabric Texture</li>
              </ul>
            </div>
          </div>
          <div className="">
            <div className=" font-bold">
              <h1>Primis Fabric</h1>
            </div>
            <div>
              <ul>
                <li>- Better Quality</li>
                <li>- Fabric Density 133/72</li>
                <li>- Combed Cotton 50s</li>
                <li>- Lower Shrinkage Level</li>
                <li>- Finer Fabric Texture</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }

  function idn() {
    return (
      <>
        <div className="grid grid-cols-1 text-center pt-12">
          <div className="font-bold text-4xl">
            <h1>Layanan</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-justify pt-16 md:pl-16 md:pr-16">
          <div className="">
            <div className="text-center font-bold mb-3">
              <h1>Produksi Kain Seragam Batik</h1>
            </div>
            <div>
              Teknik Batik Cap, Handprinting dan tulis yang digunakan untuk
              melayani produksi skala besar untuk keperluan seragam kantor,
              sekolah,komunitas dan lainnya.
            </div>
          </div>
          <div className="">
            <div className="text-center font-bold mb-3">
              <h1>Baju Seragam Batik</h1>
            </div>
            <div>
              Kami juga menerima Jasa Jahit seragam batik untuk pria dan wanita.
              kualitas terbaik tidak perlu bingung cari penjahit di tempat lain
            </div>
          </div>
          <div className="">
            <div className="text-center font-bold mb-3">
              <h1>Bikin Seragam Batik Berlogo</h1>
            </div>
            <div>
              Seragam batik juga bisa digunakan sebagai media Branding. kami
              juga memproduksi seragam batik dengan logo perusahaan ataupun
              komunitas.
            </div>
          </div>
          <div className="">
            <div className="text-center font-bold mb-3">
              <h1>Seragam Batik Motif Custom</h1>
            </div>
            <div>
              Pengen yang Custom? Kami juga melayani motif custom sesuai dengan
              keinginan anda dan jasa jahit untuk pembuatan seragam batik dengan
              motif custom.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 text-center pt-12">
          <div className="font-bold text-4xl">
            <h1>Bahan Dasar</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-justify pt-16 pl-16 pr-16">
          <div className="">
            <div className=" font-bold">
              <h1>Bahan Poplin</h1>
            </div>
            <div>
              <ul>
                <li>- Kualitas Bagus</li>
                <li>- Kerapatan Kain 133/72</li>
                <li>- Katun Combed 40s</li>
                <li>- Tingkat Penyusutan Sedang</li>
                <li>- Tekstur Kain Halus</li>
              </ul>
            </div>
          </div>
          <div className="">
            <div className=" font-bold">
              <h1>Bahan Prima</h1>
            </div>
            <div>
              <ul>
                <li>- Kualitas Biasa</li>
                <li>- KerapatanKain 90/74</li>
                <li>- Katun Combed 40s</li>
                <li>- Tingkat Penyusutan Sedang</li>
                <li>- Tekstur Kain Cukup Halus</li>
              </ul>
            </div>
          </div>
          <div className="">
            <div className=" font-bold">
              <h1>Bahan Primis</h1>
            </div>
            <div>
              <ul>
                <li>- Kualitas Lebih Bagus</li>
                <li>- Kerapatan Kain 133/72</li>
                <li>- Katun Combed 50s</li>
                <li>- Penyusutan Lebih Rendah</li>
                <li>- Tekstur Kain Lebih Halus</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <div id="services">{langMode ? idn() : eng()}</div>;
};

export default Services;
