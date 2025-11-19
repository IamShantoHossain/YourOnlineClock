import AnalyticCard from "@/components/shared/AnalyticCard";
import { FaUser } from "react-icons/fa6";

const CategoryAnalytic = () => {
  const cards = [
    {
      icon: { Icon: FaUser, color: "#3B82F6" },
      title: "Total Products",
      value: "63,211",
    },
    {
      icon: { Icon: FaUser, color: "#14CB74" },
      title: "Total Orders",
      value: "0",
    },
    {
      icon: { Icon: FaUser, color: "#F06899" },
      title: "Total Value",
      value: "545",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <AnalyticCard key={card.title} cardData={card} />
      ))}
    </div>
  );
};

export default CategoryAnalytic;
