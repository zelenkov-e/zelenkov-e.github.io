import Layout from "../comps/MyLayout";

const Title = () => (
  <div>
    <h1>This is child component</h1>
    <style jsx>
      {`
        h1 {
          color: red;
        }
      `}
    </style>
  </div>
);

export default function Blog() {
  return (
    <Layout>
      <p>This is my blog</p>
      <Title />
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
