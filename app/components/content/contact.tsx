import React, { useEffect, useState } from "react";
import logo from "/public/image/contact.png";
import instagram from "/public/image/instagram.png";
import whatsapp from "/public/image/whatsapp.png";
import shopee from "/public/image/shopee.png";
import tokopedia from "/public/image/tokopedia.png";
import Image from "next/image";
import Link from "next/link";
import styles from "../RunningContent.module.css"; // Create a CSS file for styling

interface HomeProps {
  langMode: boolean;
}

const Contact: React.FC<HomeProps> = ({ langMode }) => {
  const runItems = [
    {
      id: 1,
      // title: "Run #1",
      content:
        "Seragam Batik Kader Posyandu dengan logo UPGK seluruh desa di Kecamatan Dealnggu Kab. Klaten Provinsi Jawa Tengah Tahun 1986",
    },
    {
      id: 2,
      // title: "Run #2",
      content:
        "Seragam resmi Batik Persagi ( Persatuan Ahli Gizi Indonesia seluruh Kab/kota di Provinsi Jawa Tengah )",
    },
    {
      id: 3,
      // title: "Run #3",
      content:
        "Seragam resmi Batik Persagi ( Persatuan Ahli Gizi Indonesia ) versi masing-masing DPC dan DPD dari Sabang – Merauke 20l4-20l8",
    },
    {
      id: 4,
      // title: "Run #4",
      content:
        "Seragam bawahan Batik dan Kebaya para Isteri Pejabat Bank Indonesia di Jawa Timur",
    },
    {
      id: 5,
      // title: "Run #5",
      content: "Seragam Tenun Para isteri Pejabat Bank Jatim di Jawa Timur",
    },
    {
      id: 6,
      // title: "Run #5",
      content: "Seragam Batik  Para Isteri Pegawai Bank Jatim di Lamongan",
    },
    {
      id: 7,
      // title: "Run #5",
      content:
        "Seragam Batik Ibu-Ibu Bhayangkari di Pengurus Cabang Gresik, Polres Gresik",
    },
    {
      id: 8,
      // title: "Run #5",
      content:
        "Seragam Batik Bhayangkari di Pengurus Cabang Pamekasan, Polres Pamekasan",
    },
    {
      id: 9,
      // title: "Run #5",
      content:
        "Seragam Batik Ibu-Ibu Bhayangkari di Pengurus Cabang Gianyar Bali",
    },
    {
      id: 10,
      // title: "Run #5",
      content:
        "Seragam Batik Ibu-Ibu Bhayangkari di Pengurus Cabang Denpasar Bali",
    },
    {
      id: 11,
      // title: "Run #5",
      content: "Seragam Batik para guru di SMA N l5 di Jakarta",
    },
    {
      id: 12,
      // title: "Run #5",
      content: "Seragam Batik Jemaat Gereja di Manado Sulawesi Utara ",
    },
    {
      id: 12,
      // title: "Run #5",
      content: "Seragam Batik Jemaat Gereja di Yogyakarta",
    },
    {
      id: 12,
      // title: "Run #5",
      content:
        "Seragam Batik pengajian ibu-ibu Isteri Pegawai Pupuk Bontang Kalimantan Timur",
    },
    {
      id: 12,
      // title: "Run #5",
      content:
        "Seragam Batik karyawan instalasi Gizi di RSUD Kab. Semarang di Ungaran Jawa Tengah",
    },
    {
      id: 12,
      // title: "Run #5",
      content:
        "Seragam Batik para dokter spesialis bedah plastik RS dr. Soetomo di Surabaya",
    },
    {
      id: 12,
      // title: "Run #5",
      content: "Seragam Batik dokter gigi di Surabaya",
    },
    {
      id: 12,
      // title: "Run #5",
      content:
        "Seragam Batik Pegawai Seksi di Labkesda Provinsi Jawa Tengah di Semarang",
    },
    {
      id: 12,
      // title: "Run #5",
      content: "Seragam Batik Pegawai Puskesmas di Bogor Jawa Barat",
    },
    {
      id: 12,
      // title: "Run #5",
      content: "Seragam Batik Pegawai Puskesmas di Sidoarjo Jawa Timur",
    },
    {
      id: 12,
      // title: "Run #5",
      content: "Seragam Batik pegawai di Puskesmas Dringu Kab. Probolinggo",
    },
    {
      id: 12,
      // title: "Run #5",
      content: "Seragam Baju Batik siswa SMK di Surabaya",
    },
    {
      id: 12,
      // title: "Run #5",
      content: "Seragam Baju Batik siswa SMA N 2 Fak-Fak Papua Barat",
    },
    {
      id: 12,
      // title: "Run #5",
      content: "Seragam Batik Pegawai Pengadilan Negeri di Kab. Probolinggo",
    },
    {
      id: 12,
      // title: "Run #5",
      content: "Seragam Batik Pegawai Pengadilan Negeri di kab di NTB",
    },
    {
      id: 12,
      // title: "Run #5",
      content:
        "Seragam Batik para struktural dan staf seksi Kestrad Kementerian Kesehatan RI.",
    },
    {
      id: 12,
      // title: "Run #5",
      content:
        "Seragam Batik seluruh struktural di lingkungan Dinas Kesehatan Provinsi Jawa Timur dan UPT",
    },
    {
      id: 12,
      // title: "Run #5",
      content:
        "Seragam Batik seluruh Kajur Gizi di seluruh Poltekes Kemenkes RI",
    },
    {
      id: 12,
      // title: "Run #5",
      content:
        "Seragam Batik pegawai seksi Gizi Dinas Kesehatan Provinsi Jawa Timur",
    },
    {
      id: 12,
      // title: "Run #5",
      content:
        "Seragam Batik pegawai seksi Promkes Dinas Kesehatan Provinsi Jawa Timur",
    },
    {
      id: 12,
      // title: "Run #5",
      content:
        "Seragam Batik pegawai seksi Kesehatan Lingkungan Dinas Kesehatan Provinsi Jawa Timur",
    },
    {
      id: 12,
      // title: "Run #5",
      content:
        "Seragam Batik seluruh Petugas Kesehatan Lingkungan dan Kesjaor di Kab/Kota di Provinsi Jawa Timur",
    },
    {
      id: 12,
      // title: "Run #5",
      content:
        "Seragam Batik pegawai seksi Kesehatan Lingkungan dan Kesjaor di Dinas Kesehatan Kota Surabaya",
    },
    {
      id: 12,
      // title: "Run #5",
      content:
        "Seragam Batik para pegawai seksi Kesehatan Lingkungan dan Kesjaor dan petugas kesehatan lingkungan di Puskesmas wilayah kerja Kab. Pasuruan",
    },
    {
      id: 12,
      // title: "Run #5",
      content:
        "Seragam Tenun kombinasi Batik para pegawai seksi Kesehatan Lingkungan dan Kesjaor Kab. Gresik",
    },
    {
      id: 12,
      // title: "Run #5",
      content:
        "Seragam Batik pegawai seksi Kesehatan Lingkungan dan Kesjaor Dinas Kesehatan Kota Kediri dan Puskesmas",
    },
    {
      id: 12,
      // title: "Run #5",
      content:
        "seragam batik seksi kesling kesjaor dinkes kota malang, seragam batik seksi kesling kesjaor dinkes kab. Bondowoso",
    },
    {
      id: 12,
      // title: "Run #5",
      content:
        "Seragam batik seksi gizi dan petugas gizi seluruh puskesmas di Dinas Kesehatan Kab. Pasuruan",
    },
    {
      id: 12,
      // title: "Run #5",
      content:
        "Souvenir batik ibu-ibu Bhayangkari di Brimobda Polda Sumatera Barat",
    },
    {
      id: 12,
      // title: "Run #5",
      content: "Souvenir batik ibu-ibu Bhayangkari di Polda Kalimantan Selatan",
    },
    {
      id: 12,
      // title: "Run #5",
      content: "Souvenir batik ibu-ibu Bhayangkari di Polda Jawa Timur",
    },
    {
      id: 12,
      // title: "Run #5",
      content: "Souvenir batik ibu-ibu Bhayangkari di Polda Jawa Tengah",
    },
    {
      id: 12,
      // title: "Run #5",
      content: "Souvenir batik ibu-ibu Bhayangkari di Polda Bali",
    },
    {
      id: 12,
      // title: "Run #5",
      content: "Souvenir batik ibu-ibu Bhayangkari di Polda Papua",
    },
    {
      id: 12,
      // title: "Run #5",
      content: "Souvenir batik ibu-ibu Bhayangkari di Polda Sulawesi Tenggara",
    },
    {
      id: 12,
      // title: "Run #5",
      content: "Souvenir batik ibu-ibu Bhayangkari di Polda Sulawesi Barat",
    },
    {
      id: 12,
      // title: "Run #5",
      content: "Souvenir batik ibu-ibu Bhayangkari di Polda Aceh",
    },
    {
      id: 12,
      // title: "Run #5",
      content: "Souvenir batik ibu-ibu Bhayangkari di Polda Banten",
    },
    {
      id: 12,
      // title: "Run #5",
      content: "Souvenir batik ibu-ibu Bhayangkari di Polda D.I.Yogyakarta",
    },
  ];

  return (
    <div
      className="grid grid-cols-1 gap-4 place-items-center p-12"
      id="contact"
    >
      <div className={styles.runningContent}>
        <div className="text-4xl mb-5 font-bold text-center">
          <h1>TESTIMONI</h1>
        </div>
        <div className={styles.runningText}>
          <div className="flex gap-6">
            {runItems.map((item, index) => (
              <div
                key={item.id}
                className={`p-4 border border-gray-300 rounded-md bg-blue-100`}
              >
                {/* <h3 className="text-xl font-semibold mb-2">{item.title}</h3> */}
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="font-bold text-4xl mb-5">
        <h1>{langMode ? `KONTAK KAMI` : `Contact Us`}</h1>
      </div>
      <div className="">
        <Image className="h-40 w-40 md:h-60 md:w-60" src={logo} alt="Logo" />
      </div>
      <div className="grid grid-cols-2 gap-4 p-12" id="contact">
        <div className="text-center">
          <div className="font-bold">
            <h1>{langMode ? `Alamat Showroom` : `Showroom Address`} :</h1>
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
            <h1>{langMode ? `Media Social` : `Social Media`} :</h1>
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
