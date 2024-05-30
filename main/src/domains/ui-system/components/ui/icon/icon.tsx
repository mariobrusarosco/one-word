import { cn } from "../../../utils";
import { iconMapper, iconSizes, sizeMapper } from "./mapper";

export const Icon = (props: IconProps) => {
  const { name, size = "small", ...rest } = props;

  const IconComponent = iconMapper[name];
  const className = cn(sizeMapper[size], props.className);

  return <IconComponent {...rest} className={className} />;
};

export type IconProps = {
  // Get all the possible keys from iconMapper
  name: keyof typeof iconMapper;
  size?: iconSizes;
  className?: string;
};
