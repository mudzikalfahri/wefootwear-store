import React from "react";
import { useRouter } from "next/dist/client/router";

function Product() {
  const { asPath } = useRouter();
  return <div>{asPath}</div>;
}

export default Product;
