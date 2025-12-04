import { Clock, Construction, Wrench } from "lucide-react";

const UnderConstruction = () => {
  return (
    <div className="from-background via-background to-muted/20 flex h-full min-h-screen flex-1 items-center justify-center bg-linear-to-br">
      <div className="flex flex-col items-center gap-8 px-6 text-center">
        {/* Icon */}
        <div className="relative">
          <div className="from-primary/20 to-primary/5 relative flex size-32 items-center justify-center rounded-full bg-linear-to-br shadow-lg">
            <Construction className="text-primary size-16" strokeWidth={1.5} />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-3">
          <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            <span className="from-primary via-primary/80 to-primary/60 bg-linear-to-r bg-clip-text text-transparent">
              Under Construction
            </span>
          </h1>
          <p className="text-muted-foreground text-xl sm:text-2xl">
            We're building something amazing
          </p>
        </div>

        {/* Description */}
        <p className="text-muted-foreground/80 max-w-md text-base sm:text-lg">
          This page is currently under development. Check back soon for an
          awesome stopwatch experience!
        </p>

        {/* Feature Icons */}
        <div className="flex gap-6">
          <div className="group flex flex-col items-center gap-2 transition-transform hover:scale-105">
            <div className="bg-primary/10 group-hover:bg-primary/20 flex size-14 items-center justify-center rounded-full transition-colors">
              <Clock className="text-primary size-7" />
            </div>
            <span className="text-muted-foreground text-xs">Coming Soon</span>
          </div>
          <div className="group flex flex-col items-center gap-2 transition-transform hover:scale-105">
            <div className="bg-primary/10 group-hover:bg-primary/20 flex size-14 items-center justify-center rounded-full transition-colors">
              <Wrench className="text-primary size-7" />
            </div>
            <span className="text-muted-foreground text-xs">In Progress</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-xs">
          <div className="bg-muted h-2 overflow-hidden rounded-full">
            <div className="from-primary via-primary/80 to-primary/60 h-full w-2/3 rounded-full bg-linear-to-r shadow-lg" />
          </div>
          <p className="text-muted-foreground mt-2 text-xs">Progress: 66%</p>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
