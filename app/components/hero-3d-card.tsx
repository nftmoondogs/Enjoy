import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function Hero3DCard() {
  return (
    <CardContainer className="inter-var px-4">
     

        <CardItem
          translateZ="100"
          rotateX={-20}
          rotateZ={90}
          className="w-full mt-4"
        >
          <img
            src="https://i.ibb.co/RYJs1Zn/0x45e4558a79e9e2a464529fadb9b066e3b2c94b17.gif"
            height="1000"
            width="1000"
            className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />

        </CardItem>

    </CardContainer>
  );
}
