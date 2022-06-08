import * as S from "./styles";
import { FiSearch } from "react-icons/fi";
import { Loading } from "@nextui-org/react";

export default function SearchBar() {
  return (
    <S.input
      shadow
      clearable
      fullWidth
      size="lg"
      placeholder="Name or ID"
      contentLeft={<FiSearch />}
    />
  );
}
