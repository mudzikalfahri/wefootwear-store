import React from "react";
import Layout from "../../components/layout";
import ProductCard from "../../components/productcard";

function Category({ data }) {
  return (
    <Layout categories={data}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:1337/categories");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default Category;
