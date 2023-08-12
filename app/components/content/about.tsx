import React, { useEffect } from "react";
import logo from "/public/image/logo.png";
import Image from "next/image";

interface HomeProps {
  langMode: boolean;
}

const About: React.FC<HomeProps> = ({ langMode }) => {
  return (
    <div className="grid grid-cols-1 gap-14 place-items-center p-7" id="about">
      <div className="">
        <Image className="h-40 w-40 md:h-60 md:w-60" src={logo} alt="Logo" />
      </div>
      <div className="whitespace-break-spaces text-center md:ml-20 md:mr-20">
        {`${
          langMode
            ? `Batik Nusantara adalah usaha yang bergerak dalam bidang fashion terutama dalam penyediaan bahan batik, tenun dan butik, baik dalam skala kecil maupun dalam partai besar. Batik Nusantara telah ada sejak tahun 1986, semula hanya menerima pesanan seragam batik untuk kader UPGK di Posyandu di Klaten Jawa Tengah tahun 1986, hingga berkembang sampai dengan saat ini.`
            : `"Batik Nusantara" is a business engaged in the fashion industry, primarily focusing on providing batik and woven fabric materials as well as operating a boutique, catering to both small-scale and large-scale needs. "Batik Nusantara" has been established since 1986. It initially started by fulfilling orders for batik uniforms for UPGK cadres at Posyandu in Klaten, Central Java, in 1986. Over time, it has evolved and grown to its current state.`
        }`}
      </div>
    </div>
  );
};

export default About;
