import Container from "@/components/global/Container";
import { SectionCards } from "@/components/section-cards";
import BlogsTable from "@/features/Blogs/BlogsTable";

const Page = () => {
  return (
    <Container className="space-y-10">
      <SectionCards />

      <BlogsTable />
    </Container>
  );
};

export default Page;
