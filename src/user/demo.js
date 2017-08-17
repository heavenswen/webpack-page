import 'assets/css/react.scss'
import XLSX from 'xlsx'




//正则 获得 body 的内容
let str = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><meta charset="UTF-8"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>Worksheet</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body>
<table><tbody><tr><td>1</td><td>admin</td><td>23</td><td>程序员</td><td>天津</td><td>admin@kali.com</td></tr>
            <tr>
                <td>2</td>
                <td>guest </td>
                <td>23 </td>
                <td>测试员 </td>
                <td>北京</td>
                <td>guest@kali.com</td>
            </tr>
        </tbody></table>
</body></html>`
//去空格回车
str = str.replace(/\s/gm,'')
//获得 body下内容
str = str.match(/<body>(.*)<\/body>/)[1]
console.log(str);
