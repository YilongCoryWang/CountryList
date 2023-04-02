import BackBtn from "./BackBtn";

type ErrorType = {
  error: string;
};

const ErrorMessage = ({ error }: ErrorType) => {
  return (
    <>
      <div className="center">
        <p>{error}</p>
      </div>
      <BackBtn />
    </>
  );
};

export default ErrorMessage;
