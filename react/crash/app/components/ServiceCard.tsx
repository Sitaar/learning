import Image from "next/image";
export interface CardInfo {
  id: string;
  icon: any;
  title: string;
  desc: string;
  tools: Array<string>;
}
type Props = {
  cardsInfo: Array<CardInfo>;
};
export function ServiceCard(props: Props) {
  const cardsInfo: Array<CardInfo> = props.cardsInfo;
  const cards = cardsInfo.map((card: CardInfo) => (
    <div
      key={card.id}
      className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white"
    >
      <Image
        alt="design"
        src={card.icon}
        width={100}
        height={100}
        className="mx-auto"
      />
      <h3 className="text-lg font-medium pt-8 pb-2">{card.title}</h3>
      <p className="py-2">{card.desc}</p>
      <h4 className="text-teal-500 py-4">Design Tools I Use</h4>
      <>
        {card.tools.map((tool) => (
          <p key={tool} className="text-gray-800 py-1">{tool}</p>
        ))}
      </>
    </div>
  ));
  return <div className="gap-10 lg:flex">{cards}</div>;
}
