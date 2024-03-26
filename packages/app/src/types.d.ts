declare module '*.svg' {
  const content: any;
  export default content;
}

type LayerData = {
  id?: string;
  type?: 'image' | 'text';
  name?: string;
  style?: Record<string, any>;
  bytes?: Uint8Array;
};
