import { useEffect, useState } from "react"
import {
  ResizableBox,
  ResizableBoxProps,
} from "react-resizable";

interface ResizableProps {
  direction: "horizontal" | "vertical";
}

export const Resizable: React.FC<ResizableProps> = ({
  direction,
  children,
}) => {
  let resizableProps: ResizableBoxProps;
  const [innerHeight, setInnerHeight] = useState(window.innerHeight)
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  useEffect(() => {
      const listener = () => {
        setInnerWidth(window.innerWidth)
        setInnerHeight(window.innerHeight)
      }

      window.addEventListener("resize", listener)

      return () => window.removeEventListener("resize", listener)
      }, [])

  if (direction === "horizontal") {
    resizableProps = {
      className: "resize-horizontal",
      width: window.innerWidth * 0.75,
      height: Infinity,
      resizeHandles: ["e"],
      maxConstraints: [innerWidth * 0.75, Infinity],
      minConstraints: [innerWidth * 0.2, Infinity],
    };
  } else {
    resizableProps = {
      width: Infinity,
      height: 300,
      resizeHandles: ["s"],
      maxConstraints: [Infinity, innerHeight * 0.9],
      minConstraints: [Infinity, innerHeight * 0.1],
    };
  }

  return (
    <ResizableBox {...resizableProps}>{children}</ResizableBox>
  );
};
