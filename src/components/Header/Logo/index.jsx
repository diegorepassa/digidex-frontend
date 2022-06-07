import Svg from "../../../assets/logo.svg";
import { Text, Spacer } from "@nextui-org/react";

import * as S from "./styles";

export default function Logo() {
  return (
    <div>
      <Text
        style={{ textAlign: "left", marginLeft: "1.5rem", color: "#2E3057" }}
        h1
        weight="bold"
      >
        Digidex
      </Text>
      <Text
        style={{ textAlign: "left", marginLeft: "1.5rem", color: "#2E3057" }}
        p
        weight="normal"
      >
        Search for a Digimon by name or using ID
      </Text>
    </div>
  );
}
