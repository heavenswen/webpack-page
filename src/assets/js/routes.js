//SPA路由 设置
//404
import FalsePage from "components/false.vue"
import Main from "components/main.vue"
// import Pdf from "components/pdf.vue"  



export default [
	// {
	// 	//pdf
	// 	path: "/pdf",
	// 	component: Pdf
	// },
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