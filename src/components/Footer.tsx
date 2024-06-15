import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">Leuci Centar</div>
          </Link>
          <p>
            Jablanička 3b, Beograd, Srbija
          </p>
          <span className="font-semibold">leucibeograd@gmail.com</span>
          <span className="font-semibold">+381 69 3 212212</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">INFORMACIJE</h1>
            <div className="flex flex-col gap-6">
              <Link href="">O nama</Link>

              <Link href="">Poslovi</Link>
              <Link href="">Povrat</Link>
              <Link href="">Blog</Link>
              <Link href="">Kontaktiraj Nas</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">PRODAJA</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Novi Proizvodi</Link>
              <Link href="">Kategorije</Link>
              <Link href="">Šinski Sistemi</Link>
              <Link href="">Lux</Link>
              <Link href="">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">POMOĆ</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Korisnička Podrška</Link>
              <Link href="">Moj Nalogt</Link>
              <Link href="">Pronađi prodavnicu</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift kartice</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">Pretplati se</h1>
          <p>
          Budite prvi koji će dobiti najnovije vesti o trendovima, promocijama i
            mnogo više!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-lama text-white">učlani se</button>
          </div>
          <span className="font-semibold">Platite Odmah(uskoro)</span>
          <div className="flex justify-normal gap-4">
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© 2024 Rab Commerce doo</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Jezik</span>
            <span className="font-medium">Srpski</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Valuta</span>
            <span className="font-medium"> Dinar</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;