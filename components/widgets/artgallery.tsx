"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface  ArtisteGallery {
    id: number;
    nom: string;
    genreMusical: string;
    ville: string;
    image: string;
    categories: string; 
    reseauxSociaux: reseauSociaux[],
  }
  interface reseauSociaux{
        nom: string;
        url: string;

  }
  const artistes: ArtisteProps[] = [
    {
      id: 1,
      nom: "Toska",
      genreMusical: "Rap / Trap",
      ville: "Nantes",
      imageSrc: "/artsec/1.png",
      categories: ["tous", "360"],
      reseauxSociaux: [
        { nom: "spotify", url: "https://spotify.com/artiste1" },
        // Autres réseaux sociaux
      ],
    },
    {
        id: 2,
        nom: "Shino",
        genreMusical: "Jersey",
        ville: "Lyon",
        imageSrc: "/artsec/2.png",
        categories: ["management"],
        reseauxSociaux: [
            { nom: "spotify", url: "https://spotify.com/artiste1" },
            // Autres réseaux sociaux
          ],
      },
      {
        id: 3,
        nom: "Bokira",
        genreMusical: "Pop Urbaines",
        ville: "Marseille",
        imageSrc: "/artsec/3.png",
        categories: ["distribution"],
        reseauxSociaux: [
            { nom: "spotify", url: "https://spotify.com/artiste1" },
            // Autres réseaux sociaux
          ],
      },
      {
        id: 4,
        nom: "Akimbo",
        genreMusical: "Rap",
        ville: "Bordeaux",
        imageSrc: "/artsec/4.png",
        categories: ["licence"],
        reseauxSociaux: [
            { nom: "spotify", url: "https://spotify.com/artiste1" },
            // Autres réseaux sociaux
          ],
      },
      {
        id: 5,
        nom: "Floria",
        genreMusical: "Pop Urbaines",
        ville: "Nantes",
        imageSrc: "/artsec/5.png",
        categories: ["booking"],
        reseauxSociaux: [
            { nom: "spotify", url: "https://spotify.com/artiste1" },
            // Autres réseaux sociaux
          ],
      },
      {
        id: 6,
        nom: "Chacko",
        genreMusical: "Shatta",
        ville: "Strasbourg",
        imageSrc: "/artsec/6.png",
        categories: ["360", "management"],
        reseauxSociaux: [
            { nom: "spotify", url: "https://spotify.com/artiste1" },
            // Autres réseaux sociaux
          ],
      },
    // Ajoutez d'autres artistes ici
  ];

  const categories = ["all", "360", "management", "distribution", "licence", "booking"];

  const ArtGallery: React.FC = () => {

    const [categorieActive, setCategorieActive] = useState<string>("all");

  const artistesFiltres = categorieActive === "all"
    ? artistes
    : artistes.filter(artiste => artiste.categories.includes(categorieActive));


    return ( 
    <section className="relative h-[1200px] w-full bg-black text-white">
  <div className="bg-black text-white">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold">NOS ARTISTES</h1>
        <div className="flex justify-center my-4">
          {categories.map((categorie) => (
            <button
              key={categorie}
              onClick={() => setCategorieActive(categorie)}
              className={`mx-2 text-sm font-semibold ${categorieActive === categorie ? 'text-red-500' : 'text-gray-400'}`}
            >
              {categorie.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-[175px] p-6 justify-items-center">
        {artistesFiltres.map((artiste) => (
          <div key={artiste.id} className="relative h-[300px] w-[250px] rounded-lg ">
             <div className="flex flex-col justify-center mr-4">
              {artiste.reseauSociaux.map(( reseauxSociaux) => (
                <Link key={ reseauxSociaux.nom} href={ reseauxSociaux.url}>
                  <a target="_blank" rel="noopener noreferrer" className="hover:text-red-500 mb-2">
                    <i className={`bx bxl-${ reseauxSociaux.nom}`}></i>
                  </a>
                </Link>
              ))}
            </div>
            <div className="w-full h-full relative">
            <Image src={artiste.imageSrc} alt={artiste.nom}  layout="fill"
          objectFit="cover"   className="rounded-lg"/>
          </div>
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold">{artiste.nom}</h3>
              <p className="text-xs text-[#8f1e1e] font-semibold">{`${artiste.genreMusical.toUpperCase()}`}</p>
              <p className="text-xs  font-medium">{artiste.ville}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    </section> );
}
 
export default ArtGallery;