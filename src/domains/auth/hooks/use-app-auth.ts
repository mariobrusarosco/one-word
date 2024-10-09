import { useMember } from "@/domains/member/hooks/use-member";

const useAppAuth = () => {
  const member = useMember();

  return { member };
};

export { useAppAuth };
