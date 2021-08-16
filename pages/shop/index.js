import React, { useEffect, useState } from "react";
import CardSkeleton from "../../components/cardskeleton";
import Layout from "../../components/layout";
import ProductCard from "../../components/productcard";

function Category({ data, dataItems }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading)
    return (
      <Layout categories={data}>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </Layout>
    );
  return (
    <Layout categories={data}>
      {dataItems.map(({ idx, ...otherProps }) => (
        <ProductCard key={idx} {...otherProps} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(process.env.APIURL + "/categories");
  const data = await res.json();
  const resItems = await fetch(process.env.APIURL + `/items`);
  const dataItems = await resItems.json();

  return {
    props: {
      data,
      dataItems,
    },
  };
}

export default Category;
