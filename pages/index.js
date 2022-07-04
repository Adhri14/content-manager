import { useEffect, useState } from "react";
import Footer from "components/Footer";
import NewsLater from "components/NewsLater";
import ResourceHighlight from "components/ResourceHighlight";
import ResourceList from "components/ResourceList";
import Layout from "components/Layout";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/resources")
      .then((res) => res.json())
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <Layout>
      <ResourceHighlight resources={data} />
      <NewsLater />
      <ResourceList resources={data} />
      <Footer />
    </Layout>
  );
}

// export async function getServerSideProps() {
//   const resData = await fetch("http://localhost:3000/api/resources");
//   const res = await resData.json();
//   const data = res.data.data;
//   console.log(data);
//   return {
//     props: {
//       data,
//     },
//   };
// }

// export async function getStaticProps() {
//   const res = await fetch("http://localhost:3000/api/resources");
//   const data = await res.json();
//   return {
//     props: {
//       data: data.data.data,
//     },
//   };
// }

export default Home;
