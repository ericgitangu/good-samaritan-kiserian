// app/components/live-stream/VimeoPlayer.tsx
import * as React from "react";

interface VimeoPlayerProps {
    videoId: string;
}

const VimeoPlayer: React.FC<VimeoPlayerProps> = ({ videoId }) => {
    return (
        <iframe
            src={`https://player.vimeo.com/video/${videoId}`}
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
            title="Live Stream"
        ></iframe>
    );
};

export default VimeoPlayer;