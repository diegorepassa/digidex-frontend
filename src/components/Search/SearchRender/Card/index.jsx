import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export default function CardTemplate(props) {

  return (
    <Card hoverable key={props.key} cover css={{ w: "100%" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="red">
            New
          </Text>
          <Text h3 color="black">
            {props.name}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body>
        <Card.Image
          src={props.img}
          height={400}
          width="100%"
          alt="Card example background"
        />
      </Card.Body>
      <Card.Footer
        blur
        css={{
          position: "absolute",
          bgBlur: "#ffffff",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Row justify="flex-end">
              <Button auto rounded color="gradient">
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  {props.level}
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}
