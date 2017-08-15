//SPA路由 设置
//404
import FalsePage from "views/false.vue"
import Main from "views/main.vue"
import Pdf from "views/pdf.vue"  



export default [
	{
		//pdf
		path: "/pdf",
		component: Pdf
	},
	{
		//demo
		path: "/",
		component: Main,
		children: [
			{

				path: "404",
				component: FalsePage,
			}
		]
	},
	{
		//404
		path: "*",
		component: FalsePage
	}

]