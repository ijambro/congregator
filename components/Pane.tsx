import { ReactNode } from "react";

export declare interface PaneProps {
  children: ReactNode;
  title: string;
  bigVerticalMargin?: boolean;
}

export default function Pane(props: PaneProps) {
  const { children, title, bigVerticalMargin = false } = props;

  const mVert = bigVerticalMargin ? "my-24" : "my-4";

  return (
    <div
      className={`w-1/2 min-w-min border-l-8 border-l-orange-500 rounded-br-3xl overflow-hidden ${mVert}`}
    >
      <div className="w-full bg-orange-500 text-white font-bold px-12 py-4 flex flex-row justify-middle">
        <span>{title}</span>
      </div>
      {children}
    </div>
  );
}
