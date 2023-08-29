import { Wrapper } from "~/Layout/components/Popper";
import UploadLayout from "~/Layout/components/UploadLayout/UploadLayout";

function Upload() {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Wrapper>
        <UploadLayout />
      </Wrapper>
    </div>
  );
}

export default Upload;
