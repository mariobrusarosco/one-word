import { restApi } from "@/api/rest";

const userDemoMutation = async (demoId: string) => {
  const result = await restApi.post(
    "/auth",
    { demoId },
    {
      headers: {
        "X-Auth-Demo": true,
      },
    }
  );

  return await result.data;
};

export { userDemoMutation };
