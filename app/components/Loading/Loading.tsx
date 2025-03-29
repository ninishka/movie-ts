import React from "react";
import { LoaderContainer, Spinner } from "./styled";

const Loading: React.FC = () => {
  return (
    <LoaderContainer>
      <Spinner />
    </LoaderContainer>
  );
};

export default Loading;