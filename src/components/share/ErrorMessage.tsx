import BackBtn from "./BackBtn";

type ErrorType = {
  error: string;
  isShowBackBtn?: boolean;
};

const ErrorMessage = ({ error, isShowBackBtn=true }: ErrorType) => {
  return (
    <>
      <div className="center">
        <p>{error}</p>
      </div>
      {isShowBackBtn && <BackBtn />}
    </>
  );
};

export default ErrorMessage;
