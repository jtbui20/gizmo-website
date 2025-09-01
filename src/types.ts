export type FullScreenMediaDispatchPayload = {
  type: string;
  payload: {
    type: string;
    url: string;
  };
};

export type FullScreenMediaType = {
  show: boolean;
  type: string;
  url: string;
};