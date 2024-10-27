import { useAuth } from "@/domains/auth/context";
import { authenticateByPassedMember } from "@/domains/auth/context/bypass";
import { useAuthentication } from "@/domains/auth/hooks/use-authentication";
import { Button } from "@/domains/ui-system/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const DemoUsers = ({
  handleUserSelection,
}: {
  handleUserSelection?: () => void;
}) => {
  const [publicId, setPublicId] = useState<string | undefined>(undefined);
  const navigate = useNavigate();
  const authentication = useAuthentication(publicId);

  useEffect(() => {
    if (authentication.isSuccess) {
      navigate("/tables");
      handleUserSelection?.();
    }
  }, [authentication.isSuccess, handleUserSelection, navigate]);

  return (
    <div>
      <div className="flex justify-center gap-3">
        <Button
          disabled={authentication.isLoading}
          variant="outline"
          className="px-8 py-6 min-w-[180px]"
          onClick={() => setPublicId("dcb3e0ee-753d-4a8d-98fe-6db4ed01d3ac")}
        >
          Lara Croft
        </Button>

        <Button
          disabled={authentication.isLoading}
          variant="outline"
          className="px-8 py-6 min-w-[180px]"
          onClick={() => setPublicId("013373bc-9e88-4f17-83bf-9f7bf59d908f")}
        >
          Sherlock Holmes
        </Button>
      </div>

      {authentication.isLoading ? (
        <p className="p-2 mt-6 text-xs font-semibold uppercase text-center text-rose-800 dark:text-neutral-100">
          Please wait!
        </p>
      ) : null}
    </div>
  );
};
