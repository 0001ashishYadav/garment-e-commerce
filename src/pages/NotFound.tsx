import { Link } from "react-router";

function NotFoundPage() {
  return (
    <div className="h-screen w-full pt-16 flex justify-center items-center">
      <div className="h-[20vh] max-w-[600px] w-[95%] bg-red-400/35 grid items-center justify-center p-8 rounded-2xl">
        <p className="text-3xl font-semibold">Not Found This Page</p>

        <div className="flex justify-center items-center mt-5">
          <Link to="/">
            <button className="px-5 py-1.5 rounded bg-gray-500 text-white">
              Go To Home Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
