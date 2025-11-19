export const getCookie = async (name: string): Promise<string | undefined> => {
  const { cookies } = await import("next/headers");
  const cookieStore = await cookies();

  return cookieStore.get(name)?.value;
};
