import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig((mode) => {
	const env = loadEnv(mode.mode, process.cwd());
	console.log(env);
	// const viteEnv = wrapperEnv(env);
	return {
		plugins: [react()],
		resolve: {
			alias: {
				"@": resolve(__dirname, "./src"),
			},
		},
	};
});
