import { FC } from "react";
import empty from "../../assets/empty.jpeg";

interface Props {
  text: string;
  size: number;
}
const EmptyState1: FC<Props> = ({ text, size }) => {
  return (
    <div className="py-10">
      <img
        src={empty}
        alt="empty-state"
        width={size}
        height={size}
        className="mx-auto"
      />
      <p className="mt-5 text-center text-gray-600">{text}</p>
    </div>
  );
};

export default EmptyState1;
