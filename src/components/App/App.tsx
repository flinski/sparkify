import { BrowserRouter } from "react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Provider } from "react-redux"
import store from "@/store/store"
import AppRoutes from "@/components/AppRoutes/AppRoutes"

const queryClient = new QueryClient()

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<BrowserRouter>
					<AppRoutes />
				</BrowserRouter>
			</Provider>
			{/* {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />} */}
		</QueryClientProvider>
	)
}
