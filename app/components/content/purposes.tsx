import React from "react";
import logo from "/public/image/logo.png";
import Image from "next/image";

const Purposes: React.FC = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center p-12"
      id="purposes"
    >
      <div className="">
        <Image className="h-41 w-41" src={logo} alt="Logo" />
      </div>
      <div className="whitespace-break-spaces text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro excepturi
        sapiente officiis voluptatibus quam rem, eos omnis consequatur harum, id
        voluptatum neque aliquid ea autem obcaecati ab doloribus assumenda
        tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Recusandae, nisi mollitia doloribus nesciunt consequuntur voluptate,
        corporis alias delectus in incidunt sapiente dolor ut rem excepturi
        sequi doloremque voluptatibus corrupti error! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Distinctio facilis reiciendis ipsum quidem
        facere? Quidem at quod blanditiis quasi, similique sint nihil ea,
        aspernatur quas a quo enim molestiae necessitatibus? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Delectus, laborum beatae?
        Laudantium laboriosam enim reprehenderit totam debitis porro dolorem
        error aut provident ea hic rem, fuga, architecto officia doloribus
        corporis.
      </div>
    </div>
  );
};

export default Purposes;
