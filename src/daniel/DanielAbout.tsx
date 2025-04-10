import DanielMenu from './DanielMenu';

const DanielAbout: React.FC = () => {
  return (
    <>
      <DanielMenu />
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-lg mb-8">This page will be about me!</p>
        <p className="text-lg">This page is still under construction..</p>
      </div>
    </>
  );
};

export default DanielAbout;
