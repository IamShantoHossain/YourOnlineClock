import { redirect } from "next/navigation";

const Page = async ({ params }: { params: Promise<{ url: string }> }) => {
  const { url } = await params;

  redirect(`/${url}`);
  return <div></div>;
};

export default Page;
