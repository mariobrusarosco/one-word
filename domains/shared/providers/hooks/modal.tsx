import { useRouter, useSearchParams } from "next/navigation";

export type ModalProps = ReturnType<typeof useModal>;
export type WithModalProps<T> = T & Partial<ModalProps>;

export const useModal = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const router = useRouter();

  const ui = params.get("modal-ui");
  const id = params.get("modal-id") ?? undefined;
  const updateBrowserUrl = () => {
    router.replace(location.pathname + "?" + params.toString(), {
      scroll: false,
    });
  };

  return {
    open: ({ id = undefined, ui }: { id?: string; ui: string }) => {
      params.set("modal-ui", ui);
      id && params.set("modal-id", id);

      updateBrowserUrl();
    },
    close: () => {
      params.delete("modal-ui");
      params.delete("modal-id");

      updateBrowserUrl();
    },
    ui,
    id,
  };
};
