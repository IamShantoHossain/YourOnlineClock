import NewPasswordForm from "./components/NewPasswordForm";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;
  const token = params.token || "";

  return (
    <div className="flex min-h-screen items-center justify-center">
      <NewPasswordForm token={token as string} />
    </div>
  );
};

export default Page;
