import { Player } from "@lottiefiles/react-lottie-player";

declare interface LoadingProps {
  active: boolean;
}

export default function Loading(props: LoadingProps) {
  const { active } = props;

  if (active) {
    return (
      <Player
        autoplay
        loop
        src="/crocodile-scooting-edited-colors.json"
        style={{ height: "300px", width: "300px" }}
        className="absolute"
      />
    );
  } else return null;
}
