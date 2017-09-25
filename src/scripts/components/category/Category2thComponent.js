
import FetchJsonp from "fetch-jsonp";
import {connect} from "react-redux";
import action from "../../react-redux/action.js";

class Category2thComponent extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            category_2th: []
        }
    }
    componentWillMount(){
        // console.log( this.props.id ); //props中的id是一级分类页通过store传过来的pid
        var that = this;
        var url = "https://simba-api.meilishuo.com/venus/mce/v1/urlMakeUpChange/h5?channel=wap&page=1&pageSize=30&_=1506153905793";
        url += url+"&pid="+this.props.id;
        FetchJsonp(url).then(function(res){
            return res.json();
        }).then(function(data){
            // console.log(11, data.value);
            var arr = [];
            var length =  data.value?Object.keys(data.value).length:0;//获取对象中属性的个数，就像数组的长度一样
            if(length==2){
                arr = [data.value["category_1"]];
            }else if(length==3){
                arr = [data.value["category_1"], data.value["category_2"]];
            }
            that.setState({
                category_2th: arr //状态category_2th中存储的是一个数组，考虑到后台数据，这个数组可能是一个对象或者两个对象
            })
        })

    }
    render(){
        var {category_2th} = this.state; console.log(category_2th)
        var length =  category_2th.length;
        //根据状态category_2th中存储的是一个对象还是两个对象判断出来，做出不同的遍历显示
        return (
            <section className="category2th-box">
                {
                    length==1?
                    <article>
                        <div>
                            <h3>{category_2th[0].info.title}</h3>
                            <ul>{this.showCategory_2th.bind(this, category_2th[0].list)()}</ul>
                        </div>
                    </article>
                    :""
                }
                {
                    length==2?
                    <article>
                        <div>
                            <h3>{category_2th[0].info.title}</h3>
                            <ul>{this.showCategory_2th.bind(this, category_2th[0].list)()}</ul>
                        </div>
                        <div>
                            <h3>{category_2th[1].info.title}</h3>
                            <ul>{this.showCategory_2th.bind(this, category_2th[1].list)()}</ul>
                        </div>
                    </article>
                    :""
                }

            </section>
        );
    }
    showCategory_2th(arr){
        var that = this;
        var col = []
        arr.forEach(function(item, index){
            col.push(
                <li onClick={that.goToNewSearch.bind(this, item.link)}>
                    <p><img src={item.image}/></p>
                    <span>{item.title}</span>
                </li>
            )
        }) 
        return col;
            
    }
    // 这个方法的作用和组件CategoryListComponent中的goToNextPage方法基本一样，
    // 那个方法需要进行判断，根据判断结果进行hash指向的重定向，是一级分类
    // 这个方法只需要重定向到newSearch页面就可以，因为现在本身就是二级分类了
    goToNewSearch(linkStr){
        var reg_fcid = /fcid=\d+/;
        var idStr = reg_fcid.exec(linkStr)[0]; 
        // idStr的样子现在是字符串“fcid=12345678”，要处理得到等号后面的内容
        var id = idStr.split("=")[1];
        
        action.goToCategory2thOrNewSearch(id); // 把fcid存放到store上
        location.href = "#/newsearch";    // 更改hash值进行重定向
    }
}

Category2thComponent.defaultProps = {}
const mapStateToProps = function(state){return state;}
export default connect(mapStateToProps)(Category2thComponent);

// http://act.meilishuo.com/wap/newsearch?fcid=10060321&title=%E6%96%B0%E5%93%81%E8%BF%9E%E8%A1%A3%E8%A3%99&acm=3.mce.2_10_1d92e.22433.0.aQm4iqw3mifZA.m_309111-pos_0

// http://list.meilishuo.com/search?frame=0&page=1&sort=pop&cKey=wap-cate&tag=&maxPrice=&minPrice=&wxPrice=&uq=&_mgjuuid=3933e75f-4c2f-4a4e-8251-69377be0c28d&fcid=10060321&_=1506172103022&callback=jsonp1
// http://list.meilishuo.com/search?frame=0&page=1&sort=pop&cKey=wap-cate&tag=&maxPrice=&minPrice=&wxPrice=&uq=&_mgjuuid=3933e75f-4c2f-4a4e-8251-69377be0c28d&fcid=10057153&_=1506172167945&callback=jsonp1