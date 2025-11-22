"use client";
import AnalyticCard from "@/components/shared/AnalyticCard";
import CardsSkeleton from "@/components/shared/CardsSkeleton";
import { useDashboardAnalyticsQuery } from "@/redux/api/analyaticApi";
import { FaUser } from "react-icons/fa6";

const DashboardAnalytics = () => {
  const { data, isLoading } = useDashboardAnalyticsQuery({});

  const cards = [
    {
      icon: { Icon: FaUser, color: "#3B82F6" },
      title: "Total Products",
      value: (data?.analytics?.totalProducts ?? 0).toLocaleString(),
    },
    {
      icon: { Icon: FaUser, color: "#14CB74" },
      title: "Total Orders",
      value: (data?.analytics?.totalOrders ?? 0).toLocaleString(),
    },
    {
      icon: { Icon: FaUser, color: "#F06899" },
      title: "Total Categories",
      value: (data?.analytics?.totalCategories ?? 0).toLocaleString(),
    },
  ];

  if (isLoading) {
    return <CardsSkeleton />;
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <AnalyticCard key={card.title} cardData={card} />
      ))}
    </div>
  );
};

export default DashboardAnalytics;
