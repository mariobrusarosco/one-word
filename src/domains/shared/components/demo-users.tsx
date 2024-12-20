import { useAuthentication } from "@/domains/auth/hooks/use-authentication";
import { Button } from "@/domains/ui-system/components/ui/button";
import { Spinner } from "@/domains/ui-system/components/ui/spinner";
import { useQueryClient } from "@tanstack/react-query";
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
  const queryClient = useQueryClient();

  useEffect(() => {
    if (authentication.isSuccess) {
      handleUserSelection?.();
      window.location.replace("/tables");
    }
  }, [authentication.isSuccess, handleUserSelection, navigate, queryClient]);

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
        <div className="flex gap-x-2 justify-center items-center mt-10">
          <Spinner size="small" outer="secondary" inner="secondary" />
          <span className="p-2 text-xs font-semibold uppercase text-center text-rose-800 dark:text-neutral-100">
            working on it
          </span>
        </div>
      ) : null}
    </div>
  );
};
