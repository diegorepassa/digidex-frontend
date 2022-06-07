import SearchBar from "./SearchBar";
import SearchParams from "./SearchParams";
import SearchRender from "./SearchRender";
import { Spacer, Container } from "@nextui-org/react";

import * as S from "./styles";

export default function Search() {
  return (
    <S.div>
      <S.wrapper>
        <S.container>
          <SearchBar />
        </S.container>
        <SearchParams />
      </S.wrapper>
      <Spacer />
      <SearchRender />
    </S.div>
  );
}
