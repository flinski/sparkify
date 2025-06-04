import { Outlet } from "react-router"

import Header from "@/components/Header/Header"
import MainLayout from "@/components/MainLayout/MainLayout"
import Sidebar from "@/components/Sidebar/Sidebar"
import ContentArea from "@/components/ContentArea/ContentArea"
import PageOutlet from "@/components/PageOutlet/PageOutlet"
import AudioPlayer from "@/components/AudioPlayer/AudioPlayer"

import styles from "./AppLayout.module.scss"

export default function AppLayout() {
	return (
		<div className={styles.appLayout}>
			<Header />
			<MainLayout>
				<Sidebar />
				<ContentArea>
					<PageOutlet>
						<Outlet />
					</PageOutlet>
					<AudioPlayer />
				</ContentArea>
			</MainLayout>
		</div>
	)
}
