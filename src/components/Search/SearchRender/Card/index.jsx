import { Card, Col, Row, Button, Text } from "@nextui-org/react";

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
        <Card.Image
          src={props.img}
          height={300}
          width="100%"
          alt="Card background"
        />
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
                color="#2E3057"
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
