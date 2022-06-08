import { Card, Col, Row, Text, Loading } from "@nextui-org/react";
import Color, { Palette } from "color-thief-react";
import Skeleton,  { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function CardTemplate(props) {
  return (
    <Card hoverable key={props.key} cover css={{ w: "100%" }}>
      {/* <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="red">
            New
          </Text>
        </Col>
      </Card.Header> */}
      <Card.Body>
      <SkeletonTheme baseColor="#fff" highlightColor="#a1c4ed">
        <Palette
          src={props.img}
          crossOrigin="anonymous"
          format="hex"
          colorCount={4}
        >
          {({ data, loading }) => {
            if (loading) {
              return (
                <Skeleton style={{height: 300, paddingTop: 4}} />
              )
            }
            return (
                <Card.Image
                  src={props.img}
                  height={300}
                  width="100%"
                  alt="Card background"
                  style={{ backgroundColor: `${data.at(0)}` }}
                />
            );
          }}
        </Palette>
        </SkeletonTheme>
      </Card.Body>
      <Card.Footer
        css={{
          position: "absolute",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col style={{ textAlign: "center" }} justify="center">
            <Text
              h1
              size={20}
              color="#0072f5"
              weight="bold"
              transform="uppercase"
            >
              {props.name}
            </Text>
            <Text
              css={{ color: "inherit" }}
              size={12}
              weight="bold"
              transform="uppercase"
            >
              {props.level}
            </Text>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}
