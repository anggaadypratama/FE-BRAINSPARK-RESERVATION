import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useScreenSize = ({ isMax = false, isFixed = false, size }) => {
  const theme = useTheme();
  const media = isFixed
    ? theme.breakpoints.up(size)
    : isMax
    ? `(max-width:${size}px)`
    : `(min-width:${size}px)`;
  return useMediaQuery(media);
};

export default useScreenSize;
