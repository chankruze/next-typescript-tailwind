import { ReactElement } from "react";
import Layout from "../components/Layout";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <div className="p-2 flex flex-col w-full max-w-7xl m-auto flex-1">
      <h1 className="text-center text-6xl font-mono">Welcome!</h1>
    </div>
  );
};

// next-auth server side auth
// export async function getServerSideProps(context: NextPageContext) {
//   return requireAuth(context, ({ session }: Session) => {
//     return {
//       props: {
//         session,
//       },
//     };
//   });
// }

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Home">{page}</Layout>;
};

export default Home;
