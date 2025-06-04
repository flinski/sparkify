import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router"
import App from "@/App"
import "@/styles/index.scss"

const rootElement = document.getElementById("root")!
const root = createRoot(rootElement)

root.render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
)
