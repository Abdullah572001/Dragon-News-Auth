import { ClimbingBoxLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <ClimbingBoxLoader
        color="#009188"
        loading
        size={26}
        speedMultiplier={1}
      />
    </div>
  );
};

export default Loading;
