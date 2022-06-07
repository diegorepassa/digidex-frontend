import SearchBar from "./SearchBar"
import SearchParams from "./SearchParams"
import SearchRender from "./SearchRender"
import { Spacer } from '@nextui-org/react';

import * as S from "./styles"

export default function Search() {
    return(
        <S.div>
            <Spacer y={2} />
            <SearchBar />
            <Spacer y={2} />
            <SearchParams />
            <Spacer y={2} />
            <SearchRender />
        </S.div>
    )
}