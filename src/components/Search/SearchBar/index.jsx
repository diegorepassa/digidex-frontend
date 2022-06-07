import * as S from "./styles"
import { FiSearch } from "react-icons/fi"
import { Loading } from '@nextui-org/react';

export default function SearchBar() {
    return (
      <S.input
        size="lg"
        shadow={true}
        labelPlaceholder="Name or ID"
        status="gradient"
        helperText="Search for a Digimon by name or using ID"
        contentRight={<FiSearch />}
        // contentRight={<Loading size="sm" type="points" style={{margin: -12}} />}
      />
    )
}