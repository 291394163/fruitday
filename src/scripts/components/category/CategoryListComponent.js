
import HeaderComponent from "../common/HeaderComponent.js";
import FetchJsonp from "fetch-jsonp";
import action from "../../react-redux/action.js";

class CategoryListComponent extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            category_1th: []
        }
    }
    componentDidMount(){
        //该API接口默认要传递一个参数"&callback=myFunctionName",FetchJsonp正好帮我们做到了，而且解决了跨域问题
        var url = "https://simba-api.meilishuo.com/venus/mce/v1/urlChange/pc?pid=20783&channel=wap&page=1&pageSize=30&_=1506081783319";
        var that = this;
        // console.log(1)
        FetchJsonp(url).then(function(res){
            // console.log(1.99)
            return res.json();
        }).then(function(data){
            console.log(data);
            that.setState({
                category_1th: data.value
            })
        })
    }
    render(){
        // console.log(2);
        return (
            <section className="category-list">
                <HeaderComponent />
                <h3>本周流行</h3>
                <ul >
                    {this.showCategory_1th.bind(this)()}
                </ul>
            </section>
        )
    }
    
    showCategory_1th(){
        var that  = this;
        var category_1th = that.state.category_1th;
        var arr = [];
        // console.log(333,category_1th)
        
        category_1th.forEach(function(item, index){
            
            arr.push(
                <li onClick={that.goToNextPage.bind(this, item.link)}>
                    <p><img src={item.image}/></p>
                    <span>{item.title}</span>
                </li>
            );
        })
        return arr;
    }
    // 这个方法需要根据linkStr进行判断，他是否有二级分类，因为现在这个页面是一级页面，
    // 有的分类有二级分类，有的直接就是newSearch页面，所以根据linkStr里面的请求地址判断是否还有二级分类
    // 二级分类页面显示的数据需要参数pid，而newSearch页面显示的数据需要参数fcid，所以也需要在linkStr中找出来pid或fcid
    // 最后在更改hash值重定向到"#/category2th"或"#/newsearch"
    goToNextPage(linkStr){
        var reg_pid = /pid=\d+/;
        var reg_fcid = /fcid=\d+/;
        // item.link.indexOf("subcategory")>-1;//跳转到二级分类页
        // item.link.indexOf("newsearch")>-1;//直接跳转到列表页
        var hash = linkStr.indexOf("subcategory")>-1?"#/category2th":"#/newsearch";
        //二级分类页要用pid，新搜索页要用fcid
        var idStr = hash=="#/category2th"?reg_pid.exec(linkStr)[0]:reg_fcid.exec(linkStr)[0];
        //idStr的样子现在是字符串“pid=12345”或“fcid=12345678”，要处理得到等号后面的内容
        var id = idStr.split("=")[1];
        
        action.goToCategory2thOrNewSearch(id);
        location.href = hash;
    }
    
}
CategoryListComponent.defaultProps = {}

export default CategoryListComponent;

// 配饰
// https://simba-api.meilishuo.com/venus/mce/v1/urlMakeUpChange/h5?channel=wap&page=1&pageSize=30 &pid=23027 &_=1506137957818 &callback=jsonp1
// 省心套装
// https://simba-api.meilishuo.com/venus/mce/v1/urlMakeUpChange/h5?channel=wap&page=1&pageSize=30 &pid=43814 &_=1506136408840 &callback=jsonp1

// 长Tx牛仔裤
// http://list.meilishuo.com/search?frame=0&page=1&sort=pop&cKey=wap-cate&tag=&maxPrice=&minPrice=&wxPrice=&uq=&_mgjuuid=3933e75f-4c2f-4a4e-8251-69377be0c28d  &fcid=10063989  &_=1506136904934 &callback=jsonp1
// 长袖x露大腿
// http://list.meilishuo.com/search?frame=0&page=1&sort=pop&cKey=wap-cate&tag=&maxPrice=&minPrice=&wxPrice=&uq=&_mgjuuid=3933e75f-4c2f-4a4e-8251-69377be0c28d  &fcid=10064031  &_=1506137167618 &callback=jsonp1
// 上衣x阔腿裤
// http://list.meilishuo.com/search?frame=0&page=1&sort=pop&cKey=wap-cate&tag=&maxPrice=&minPrice=&wxPrice=&uq=&_mgjuuid=3933e75f-4c2f-4a4e-8251-69377be0c28d  &fcid=10064024  &_=1506137243620 &callback=jsonp1