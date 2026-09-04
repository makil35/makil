/// <reference types="vite/client" />

declare module "*&as=srcset" {
  const srcset: string;
  export default srcset;
}

declare module "*&format=jpg&quality=78" {
  const src: string;
  export default src;
}
