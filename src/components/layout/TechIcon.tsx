import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  className: string;
};

export function TechIcon({ icon: Icon, className }: Props) {
  return (
    <div
      className={`absolute z-30 flex h-14 w-14 items-center justify-center rounded-full border bg-card shadow-lg animate-bounce ${className}`}
    >
      <Icon className="text-2xl text-primary" />
    </div>
  );
}