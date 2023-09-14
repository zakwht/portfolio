import React, { useEffect } from "react";
import { useRouter } from "next/router";

export const Route404: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return <></>;

};

export default Route404;