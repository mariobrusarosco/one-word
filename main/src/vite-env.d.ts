/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ONE_WORD_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
