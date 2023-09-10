"use client";
import { TableRoutes } from "@/domains/tables/typing/enums-and-interfaces";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  // TODO define the approach for the / path
  const router = useRouter();

  useEffect(() => {
    router.push(TableRoutes.HOME);
  }, []);
};

export default Home;
