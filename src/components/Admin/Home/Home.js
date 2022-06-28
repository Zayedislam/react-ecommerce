import { Alert } from "react-bootstrap";
import Layout from "../../Layouts/Layout";
const Home = () => {
  return (
    <>
      <Layout>
        <Alert variant="success">
          <h1 className="text text-center">WelCome to Admin Dashboard</h1>
        </Alert>
      </Layout>
    </>
  );
};

export default Home;
