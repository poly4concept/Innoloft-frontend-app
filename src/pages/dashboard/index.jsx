import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full items-center pt-20">
      <h2 className="text-2xl">Welcome to Innoloft 🙋‍♂️</h2>
      <p>
        Check out this{' '}
        <Link className="underline" to="/product/6781">
          product
        </Link>
      </p>
    </div>
  );
};

export default Dashboard;
