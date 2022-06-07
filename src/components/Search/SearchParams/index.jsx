import { Input, Spacer, Loading } from "@nextui-org/react";
import * as LottiePlayer from "@lottiefiles/lottie-player";

import * as S from "./styles";

export default function SearchParams() {
  return (
    <S.container>
      <S.divOrder>
        <S.selectOrder>
          <option value="">Ascendente</option>
          <option value="">Decrescente</option>
        </S.selectOrder>
        <S.wrapper>
          <Input labelPlaceholder="From" status="gradient" />
          <span style={{ color: "white" }}>dd</span>
          <Input labelPlaceholder="To" status="gradient" />
        </S.wrapper>
      </S.divOrder>
      <Spacer y={2} />
      <S.divOptions>
        <S.selectOption defaultValue={'Level'}>
          <option disabled value="level" hidden>
            Level
          </option>
          <option >Decrescente</option>
        </S.selectOption>
        <S.selectOption>
          <option disabled  value="Type" hidden>
            Type
          </option>
          <option value="">Decrescente</option>
        </S.selectOption>
        <S.selectOption>
          <option disabled  value="Attribute" hidden>
            Attribute
          </option>
          <option value="">Decrescente</option>
        </S.selectOption>
        <lottie-player
          style={{ height: "100px", width: "auto" }}
          speed={1}
          loop
          autoSize
          resizeMode="cover"
          autoplay="true"
          direction={1}
          mode="normal"
          src="https://assets6.lottiefiles.com/packages/lf20_hoghix5q.json"
        ></lottie-player>
      </S.divOptions>
    </S.container>
  );
}
