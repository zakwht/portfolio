import React, { useEffect } from "react";
import { useRouter } from "next/router";

export const Route404: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    //too complicated for its purpose
    // const path = router.asPath.split("/");
    // path.pop();
    // console.log(path, `${path.join("/")}/`)
    // router.replace(`${path.join("/")}/`);
    router.replace("/");
  }, [router]);

  return <></>;

};

export default Route404;
