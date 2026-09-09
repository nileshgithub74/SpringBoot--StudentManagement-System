"use client";

import Loader from "@/components/common/Loader";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard");
  }, [router]);

  return (
    <div className="grid min-h-screen place-items-center">
      <Loader label="Opening Campsly" />
    </div>
  );
};

export default Home;
