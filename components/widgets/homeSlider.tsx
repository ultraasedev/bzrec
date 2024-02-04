"use client";
import { useState } from "react";
import { SliderItem } from "@/components/widgets/slider-item";
import { SliderArrows } from '@/components/widgets/sliderArrow';

export const HomeSlider = () => {
  const [itemActive, setItemActive] = useState<number>(1);
  const countItems = 5;

  const OnPrev= ()=> {
    setItemActive(itemActive - 1)
    if(itemActive === 1)
    setItemActive(countItems)
  } 

  const OnNext= ()=> {
    setItemActive(itemActive - 1)
    if(itemActive === 1)
    setItemActive(countItems)
  } 

    return ( 
      <>
         <div className="h-dvh relative">
      <ul>
        <SliderItem
          itemActive={itemActive}
          id={1}
          images="/slide_01.png"
          buttonTypeTitle="Nouveau Single"
          title="Lashka - Burn Out"
          desc="Apres la tournée des Zenith en 2023 , Lashka reviens avec son nouveau single , un titre engage ou il denonce le dure monde du travail..."
          buttonActionTitle="Ecouter Maintenant"
          buttonActionIcon="fa-solid fa-circle-play"
        />
        <SliderItem
          itemActive={itemActive}
          id={2}
          images="/slide_02.png"
          buttonTypeTitle="Nouvelle Date "
          title="Shakaoui - Olympia Nantes"
          desc="Apres la tournée des Zenith en 2023 , Shakaoui reviens avec de nouvelles dates partout en France dont au Zenith de Nantes le 15.03.26 ..."
          buttonActionTitle="Reserver Maintenant"
          buttonActionIcon="fa-solid fa-ticket"
        />
        <SliderItem
          itemActive={itemActive}
          id={3}
          images="/slide_03.png"
          buttonTypeTitle="Nouveau Single"
          title="Makadam - Fly Air"
          desc="Etoile Montante du rap US sur la scene Francaise , c'eest apres le succes de Maskaoff et Feu que Makadam ,debute l'annee 2024 avec le titre explosif Fly Air . . . "
          buttonActionTitle="Ecouter Maintenant"
          buttonActionIcon="fa-solid fa-circle-play"
        />
      </ul>
    <SliderArrows onClickPrev={() => OnPrev()} onClickNext={() => OnNext()} />
    </div>
      </>
     
     );
}