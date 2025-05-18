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
    <div className="flex flex-col gap-4">
      <p className="text-neutral-100 text-2xl">
        Change your player
      </p>

      <div className="flex gap-4">

      <div className="flex justify-center gap-3">
        <Button
          disabled={authentication.isLoading}
          variant="outline"
          className="px-8 py-6 min-w-[180px]"
          onClick={() => setPublicId("1")}
        >
          Lara Croft
        </Button>
      </div>

      <div className="flex justify-center gap-3">

        <Button
            disabled={authentication.isLoading}
            variant="outline"
            className="px-8 py-6 min-w-[180px]"
            onClick={() => setPublicId("2")}
            >
            Sherlock Holmes
          </Button>
        </div>

      <div className="flex justify-center gap-3">
        <Button
          disabled={authentication.isLoading}
          variant="outline"
          className="px-8 py-6 min-w-[180px]"
          onClick={() => setPublicId("3")}
        >
          Walter White
        </Button>
      </div>

      <div className="flex justify-center gap-3">
        <Button
          disabled={authentication.isLoading}
          variant="outline"
          className="px-8 py-6 min-w-[180px]"
          onClick={() => setPublicId("4")}
        >
          Jesse Pinkman
        </Button>
      </div>
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
