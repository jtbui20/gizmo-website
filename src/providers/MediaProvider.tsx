import {
  createContext,
  useEffect,
  useReducer,
  type ReactNode,
  type Dispatch,
} from "react";
import type {
  FullScreenMediaDispatchPayload,
  FullScreenMediaType,
} from "../types";
import FullScreenMediaDisplay from "../components/FullScreenMedia/FullScreenMedia";

const defaultState: FullScreenMediaType = {
  show: false,
  type: "video",
  url: "",
};

// eslint-disable-next-line
export const MediaContextA = createContext(defaultState);
// eslint-disable-next-line
export const MediaProviderContext =
  createContext<Dispatch<FullScreenMediaDispatchPayload> | null>(null);

export const MediaProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(FullScreenMediaReducer, defaultState);

  useEffect(() => {
    document.body.style.overflow = state.show ? "hidden" : "auto";
  }, [state]);

  return (
    <MediaContextA value={state}>
      <MediaProviderContext value={dispatch}>
        <FullScreenMediaDisplay />
        {children}
      </MediaProviderContext>
    </MediaContextA>
  );
};

const FullScreenMediaReducer = (
  _: FullScreenMediaType,
  action: FullScreenMediaDispatchPayload
) => {
  switch (action.type) {
    case "show":
      return {
        show: true,
        type: action?.payload.type,
        url: action?.payload.url,
      };
    default:
      return {
        show: false,
        type: "",
        url: "",
      };
  }
};
