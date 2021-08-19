import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardSkeleton from "../../components/cardskeleton";
import Layout from "../../components/layout";
import ProductCard from "../../components/productcard";
import { recentCategory } from "../../slices/categorySlice";

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(process.env.NEXT_PUBLIC_APIURL + "/categories");
  const data = await res.json();
  const resTypes = await fetch(process.env.NEXT_PUBLIC_APIURL + "/types");
  const dataTypes = await resTypes.json();
  const resItems = await fetch(
    process.env.NEXT_PUBLIC_APIURL + `/items?category.slug=${slug}`
  );
  const dataItems = await resItems.json();

  if (!data.length) {
    return {
      redirect: {
        destination: "/shop",
        permanent: false,
      },
    };
  }
  if (!dataItems.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data,
      dataItems,
      dataTypes,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  const res = await fetch(process.env.NEXT_PUBLIC_APIURL + "/categories");
  const data = await res.json();

  const paths = data.map((cat) => ({
    params: { slug: cat.slug },
  }));

  return {
    paths,
    fallback: true,
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

  if (!data) {
    return <div>404</div>;
  }

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
      {data_items.length > 0 ? (
        data_items.map(({ slug, ...otherProps }) => (
          <ProductCard key={slug} slug={slug} {...otherProps} />
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
