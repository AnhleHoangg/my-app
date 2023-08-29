import LiveStream from "~/Layout/components/LiveStream/LiveStream";

import { mediaJSON } from "~/assets/Videos/gistfile1";

const listmedia = mediaJSON.categories;
const listvideo = listmedia[0].videos.map((media, index) => {
  return <LiveStream video={media} key={index} />;
});
function Live() {
  return (
    <div
      className="content"
      style={{
        height: "100%",
        overflowY: "scroll",
      }}
    >
      {listvideo}
    </div>
  );
}

export default Live;
