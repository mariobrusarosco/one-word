/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ONE_WORD_API: string;
  readonly VITE_ONE_WORD_SOCKET_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
