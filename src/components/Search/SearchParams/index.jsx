import * as S from "./styles";
import { useState, useEffect } from "react";
import { LottiePlayer } from "@lottiefiles/lottie-player";
import { Button } from "@nextui-org/react";
import Filter from './filter.svg';
import FilterClicked from './filter-clicked.svg';

export default function SearchParams() {

  return (
      <S.button  aria-label="lottie">
        <object style={{width: 44}}  data={Filter} />
      </S.button>
  );
}
