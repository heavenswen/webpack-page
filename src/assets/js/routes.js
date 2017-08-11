//SPA路由 设置
//404
import FalsePage from "components/false.vue"  
import Pdf from "components/pdf.vue"  



export default [
	{
		//404
		path: "/pdf",
		component: Pdf
	},
	{
		//404
		path: "*",
		component: FalsePage
	}

]