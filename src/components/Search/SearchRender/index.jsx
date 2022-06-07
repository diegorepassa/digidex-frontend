import { Grid, Loading, Pagination } from "@nextui-org/react";
import { useState } from "react";
import CardTemplate from "./Card";
import { useQuery, gql } from "@apollo/client";

import * as S from "./styles";

const getDigimons = gql`
  {
    digimons {
      name
      img
      level
    }
  }
`;

export default function SearchRender() {
  const { data, loading, error } = useQuery(getDigimons);

  if (loading) return (
    <S.loading>
      <Loading type="points" loadingCss={{ $$loadingSize: "15px" }} />
    </S.loading>
  );

  if (error) return <pre>{error.message}</pre>; 

  return (
      <Grid.Container key={data.digimons.id} gap={2} justify="center">
        {data.digimons.map((digimon) => (
          <Grid key={digimon.id} xs={12} sm={3}>
            <CardTemplate key={digimon.id} name={digimon.name} img={digimon.img} level={digimon.level} />
          </Grid>
        ))}
      </Grid.Container>
  );
}
