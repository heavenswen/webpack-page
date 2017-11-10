import 'assets/css/react.scss'

//仿网易云音乐搜索
import Search from "assets/js/search-wyy"

//焦点提示框
import 'assets/css/Focus-tip.css'
import Tip from "assets/js/Focus-tip"

//搜索框
var search = new Search("#search");

//焦点提示
var tip = new Tip();

tip.initObj("input");



