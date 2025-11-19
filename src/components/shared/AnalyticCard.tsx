import { IconType } from "react-icons";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const AnalyticCard = ({
  cardData: { icon, title, value, subtext },
}: {
  cardData: {
    icon: {
      Icon: IconType;
      color: string;
    };
    title: string;
    value: string;
    subtext?: string;
  };
}) => {
  return (
    <Card className="border-border/20 border">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div
          style={{
            background: icon.color + 20,
          }}
          className="flex aspect-square size-9 items-center justify-center rounded-full"
        >
          <icon.Icon
            style={{
              color: icon.color,
            }}
            className="text-muted-foreground h-4 w-4 opacity-95"
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-muted-foreground text-xs">{subtext}</p>
      </CardContent>
    </Card>
  );
};

export default AnalyticCard;
