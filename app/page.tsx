import { Button } from "@/domains/shared/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 sha">
      <Button variant="secondary" fullRounded className="shadow-main">
        Hellao!
      </Button>
    </main>
  );
}
