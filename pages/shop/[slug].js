import React from "react";
import Layout from "../../components/layout";
import ProductCard from "../../components/productcard";

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/categories");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:1337/categories");
  const data = await res.json();

  const paths = data.map((cat) => ({
    params: { slug: cat.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

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

export default Category;
