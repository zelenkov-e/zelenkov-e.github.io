import Layout from "../comps/MyLayout";
import Title from "../comps/Titles";

export default function Blog() {
  return (
    <Layout>
      <p>This is my blog</p>
      <Title />
      <style jsx global>
        {`
          p {
            color: red;
          }
        `}
      </style>
    </Layout>
  );
}
