import { restApi } from "@/api/rest";
import { User } from "@auth0/auth0-react";

export const createSocialUser = async (user: User) => {
  const result = await restApi.post("/member/social", user);

  return await result.data;
};

export const signInSocialUser = async (userPublicId: User["user"]["sub"]) => {
  const result = await restApi.post("/auth/social", userPublicId);

  return await result.data;
};
