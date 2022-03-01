import { Construction } from "@/components/Construction";

function Error({ statusCode }) {
  return <Construction />;
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
