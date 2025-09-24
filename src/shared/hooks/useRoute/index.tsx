// hooks/useRoute.ts
"use client";

import { PathRoutes } from "@/shared/types/routes";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function useRoute() {
	const router = useRouter();

	/**
	 * Redireciona para a rota desejada.
	 * @param path string da rota (ex: "/auth/register")
	 * @param replace se true, substitui a rota atual (como router.replace)
	 */
	const redirect = useCallback(
		(path: PathRoutes, replace = false) => {
			if (replace) {
				router.replace(path);
			} else {
				router.push(path);
			}
		},
		[router]
	);

	return {
		redirect,
	};
}
