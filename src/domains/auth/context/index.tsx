import { APP_MODE } from "@/domains/shared/utils";
import { Authentication } from "@/domains/auth/adapters";

export const AuthProvider = Authentication[APP_MODE].Provider;
export const useAuth = Authentication[APP_MODE].hook;
