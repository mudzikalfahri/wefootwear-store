import React, { useEffect, useState } from "react";
import CardSkeleton from "../../components/cardskeleton";
import Layout from "../../components/layout";
import ProductCard from "../../components/productcard";
import { useSelector } from "react-redux";
import { recentCategory } from "../../slices/categorySlice";

export async function getStaticProps() {
  const res = await fetch(process.env.NEXT_PUBLIC_APIURL + "/categories");
  const data = await res.json();
  const resTypes = await fetch(process.env.NEXT_PUBLIC_APIURL + "/types");
  const dataTypes = await resTypes.json();
  const resItems = await fetch(process.env.NEXT_PUBLIC_APIURL + `/items`);
  const dataItems = await resItems.json();

  return {
    props: {
      data,
      dataItems,
      dataTypes,
    },
    revalidate: 5,
  };
}

function Category({ data, dataItems, dataTypes }) {
  const recent_category = useSelector(recentCategory);
  const data_items = dataItems.filter((item) => {
    if (recent_category.length > 0) {
      return item.type.name == recent_category;
    } else {
      return true;
    }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading)
    return (
      <Layout categories={data} types={dataTypes}>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </Layout>
    );
  return (
    <Layout categories={data} types={dataTypes}>
      {data_items.length < 1 ? (
        <p className="col-span-full mx-auto text-sm text-gray-400">
          No item found
        </p>
      ) : (
        data_items.map(({ slug, ...otherProps }) => (
          <ProductCard key={slug} slug={slug} {...otherProps} />
        ))
      )}
    </Layout>
  );
}

export default Category;
