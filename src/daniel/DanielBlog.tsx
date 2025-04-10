import DanielMenu from './DanielMenu';

const DanielBlog: React.FC = () => {
  return (
    <>
      <DanielMenu />
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-lg mb-8">Welcome to my blog!</p>
        <p className="text-lg">This page is still under construction..</p>
      </div>
    </>
  );
};

export default DanielBlog;
