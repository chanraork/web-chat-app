import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

export default function Loading() {
  return (
    <div>
      <ClipLoader color="#3CBC28" size={60} />
    </div>
  )
}

const Container = styled.div`
  display: grid;
  align-content: center;
  height: 100vh;
  width: 100%;
`;
