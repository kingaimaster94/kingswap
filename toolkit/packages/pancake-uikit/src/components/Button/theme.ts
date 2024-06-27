import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.MD]: {
    height: "48px",
    padding: "0 24px",
  },
  [scales.SM]: {
    height: "32px",
    padding: "0 16px",
  },
  [scales.XS]: {
    height: "20px",
    fontSize: "12px",
    padding: "0 8px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    // backgroundColor: "primary",
    background: "linear-gradient(180deg, #00A4E0 0%, #0667D4 100%)",
    color: "white",
    ":disabled": {
      background: "transparent",
      border: "2px solid",
    },
  },
  [variants.SECONDARY]: {
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: "primary",
    boxShadow: "none",
    color: "primary",
    ":disabled": {
      backgroundColor: "transparent",
    },
  },
  [variants.TERTIARY]: {
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: "tertiary",
    boxShadow: "none",
    color: "tertiary",
  },
  [variants.SUBTLE]: {
    backgroundColor: "textSubtle",
    color: "#21c5f6",
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "#21c5f6",
    boxShadow: "none",
  },
};
