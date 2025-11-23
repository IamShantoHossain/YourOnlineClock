import Container from "@/components/global/Container";
import assets from "@/lib/assets";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitcher";
import CurrentTime from "./CurrentTime";

const TimersHeader = () => {
  return (
    <div>
      <Container className="flex flex-row items-center justify-between py-2.5">
        <Link href={"/"}>
          <Image
            src={assets.logoUrl}
            height={500}
            width={500}
            alt="logo"
            className="h-4 w-fit md:h-6"
          />
        </Link>

        <div className="flex items-center gap-5">
          <CurrentTime />
          <ThemeSwitcher />
        </div>
      </Container>
    </div>
  );
};

export default TimersHeader;
