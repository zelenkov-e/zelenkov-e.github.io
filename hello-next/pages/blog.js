import Layout from "../comps/MyLayout";

export default function Blog() {
  return (
    <Layout>
      <p>This is my blog</p>
      <style jsx>
        {`
          p {
            color: red;
          }
        `}
      </style>
    </Layout>
  );
}
