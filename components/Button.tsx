export declare interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const { label, onClick } = props;

  return (
    <button
      className="bg-pink-600 text-white p-4 rounded-br-3xl overflow-hidden hover:bg-pink-200 hover:text-pink-600"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
