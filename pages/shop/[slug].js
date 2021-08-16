import React, { useEffect, useState } from "react";
import CardSkeleton from "../../components/cardskeleton";
import Layout from "../../components/layout";
import ProductCard from "../../components/productcard";

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(process.env.APIURL + "/categories");
  const data = await res.json();
  const resItems = await fetch(
    process.env.APIURL + `/items?category.slug=${slug}`
  );
  const dataItems = await resItems.json();

  return {
    props: {
      data,
      dataItems,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(process.env.APIURL + "/categories");
  const data = await res.json();

  const paths = data.map((cat) => ({
    params: { slug: cat.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

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
      {dataItems.length ? (
        dataItems.map(({ idx, ...otherProps }) => (
          <ProductCard key={idx} {...otherProps} />
        ))
      ) : (
        <p className="col-span-full mx-auto text-sm text-gray-400">
          No item found
        </p>
      )}
    </Layout>
  );
}

export default Category;
