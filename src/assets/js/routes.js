//SPA路由 设置
//404
import FalsePage from "components/false.vue" 
import Pdf from "components/pdf.vue"

export default [
	{
		path:"/pdf",
		component: Pdf
		
	},
	{
		//引导其他不存在的第地址 404
		path: "*",//默认跳转
		component: FalsePage
	}

]