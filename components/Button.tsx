export declare interface ButtonProps {
  label: string;
}

export default function (props: ButtonProps) {
  const { label } = props;

  return (
    <button className="bg-pink-600 text-white p-4 rounded-br-3xl overflow-hidden hover:bg-pink-200 hover:text-pink-600">
      {label}
    </button>
  );
}
