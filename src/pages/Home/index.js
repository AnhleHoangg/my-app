// import Playvideo from "~/Layout/components/Playvideo/Playvideo";

import { apiListVideo } from "~/components/FetchApi/FetchApi";
import Playvideo from "~/Layout/components/Playvideo/Playvideo";

function Home() {
  const play = apiListVideo.map((video, index) => {
    return <Playvideo video={video} key={index} />;
  });
  return <div style={{ height: "100%", overflowY: "scroll" }}>{play}</div>;
}

export default Home;
