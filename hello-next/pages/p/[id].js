import Layout from '../../comps/MyLayout';
import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
}
