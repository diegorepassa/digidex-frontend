import * as S from "./styles";
import { FiSearch } from "react-icons/fi";
import { Loading } from "@nextui-org/react";

export default function SearchBar() {
  return (
    <S.input
      clearable
      flat
      fullWidth
      style={{ backgroundColor: "#EBF3F5" }}
      size="lg"
      placeholder="Name or ID"
      contentLeft={<FiSearch />}
    />
  );
}
