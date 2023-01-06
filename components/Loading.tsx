import { Player } from "@lottiefiles/react-lottie-player";

declare interface LoadingProps {
  active: boolean;
}

export default function Loading(props: LoadingProps) {
  const { active } = props;

  // Default renderer ('svg') works fine locally, but doesn't render most layers when served by Cloudflare Pages.
  // It gives error: SVG <path> attribute d: Expected moveto path command 'M' or 'm'
  // Rendering as 'canvas' seems to solve this!

  if (active) {
    return (
      <Player
        autoplay
        loop
        renderer={"canvas"}
        src="/crocodile-scooting-edited-colors.json"
        style={{ height: "300px", width: "300px" }}
        className="absolute"
      />
    );
  } else return null;
}
