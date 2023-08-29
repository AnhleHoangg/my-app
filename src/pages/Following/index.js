import { apiListVideo } from "~/components/FetchApi/FetchApi";
import Playvideo from "~/Layout/components/Playvideo/Playvideo";

function Following() {
  return (
    <div style={{ height: "100%", overflowY: "scroll" }}>
      {apiListVideo.map((video, index) => {
        return <Playvideo key={index} video={video} />;
      })}
    </div>
  );
}

export default Following;
