import { useEffect, useRef, useId } from "react";
import { useScroll, useTransform } from "motion/react";

const AnimatedPathText = ({
  // Path defaults
  path,
  pathId,
  pathClassName,
  preserveAspectRatio = "xMidYMid meet",
  showPath = false,

  // SVG defaults
  width = "100%",
  height = "100%",
  viewBox = "0 0 100 100",
  svgClassName,

  // Text defaults
  text,
  textClassName,
  textAnchor = "start",

  // Animation type
  animationType = "auto",

  // Animation defaults
  duration = 4,
  repeatCount = "indefinite",

  easingFunction = {},

  // Scroll animation defaults
  scrollContainer,
  scrollOffset = ["start end", "end end"],
  scrollTransformValues = [0, 100],
}) => {
  const container = useRef(null);
  const textPathRefs = useRef([]);
  const generatedId = useId();

  // Use provided pathId or generate a consistent one using useId
  const id = pathId || `animated-path-${generatedId}`;

  // Only use scroll if we have a scroll container provided or if we're doing scroll animation
  const shouldUseScroll = scrollContainer || animationType === "scroll";

  const { scrollYProgress } = useScroll(
    shouldUseScroll
      ? {
          container: scrollContainer,
          offset: scrollOffset,
        }
      : {}
  );

  const t = useTransform(scrollYProgress, [0, 1], scrollTransformValues);

  useEffect(() => {
    if (!shouldUseScroll || animationType !== "scroll") return;

    // Re-initialize scroll handler when container ref changes
    const handleChange = () => {
      textPathRefs.current.forEach((textPath) => {
        if (textPath) {
          textPath.setAttribute("startOffset", `${t.get()}%`);
        }
      });
    };

    const unsubscribe = scrollYProgress.on("change", handleChange);

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress, t, shouldUseScroll, animationType]);

  const animationProps =
    animationType === "auto"
      ? {
          from: "0%",
          to: "100%",
          begin: "0s",
          dur: `${duration}s`,
          repeatCount: repeatCount,
          ...(easingFunction && easingFunction),
        }
      : null;

  return (
    <svg
      className={svgClassName}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      preserveAspectRatio={preserveAspectRatio}
    >
      <path
        id={id}
        className={pathClassName}
        d={path}
        stroke={showPath ? "currentColor" : "none"}
        fill="none"
      />

      {/* First text element */}
      <text textAnchor={textAnchor} fill="currentColor">
        <textPath
          className={textClassName}
          href={`#${id}`}
          startOffset={"0%"}
          ref={(ref) => {
            if (ref) textPathRefs.current[0] = ref;
          }}
        >
          {animationType === "auto" && (
            <animate attributeName="startOffset" {...animationProps} />
          )}
          {text}
        </textPath>
      </text>

      {/* Second text element (offset to hide the jump) */}
      {animationType === "auto" && (
        <text textAnchor={textAnchor} fill="currentColor">
          <textPath
            className={textClassName}
            href={`#${id}`}
            startOffset={"-100%"}
            ref={(ref) => {
              if (ref) textPathRefs.current[1] = ref;
            }}
          >
            {animationType === "auto" && (
              <animate
                attributeName="startOffset"
                {...animationProps}
                from="-100%"
                to="0%"
              />
            )}
            {text}
          </textPath>
        </text>
      )}
    </svg>
  );
};

export default AnimatedPathText;
