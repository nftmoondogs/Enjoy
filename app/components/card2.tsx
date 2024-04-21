import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function Card2() {
  return (
    <CardContainer className="inter-var px-4">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-white dark:border-blue-800/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">

        <CardItem
          translateZ="100"
          rotateX={-20}
          rotateZ={20}
          className="w-full mt-4"
        >
          <img
            src="https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fmagic.decentralized-content.com%2Fipfs%2Fbafybeifs463zuw4bm2fpccl4iekg3yjoi47rr4uvwonufejfr3t26m3rw4&w=1080&q=75"
            height="1000"
            width="1000"
            className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-blue-600"
        >
          $Enjoy Token is made by a nerd who just want to spread happiness using his token
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >

        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
