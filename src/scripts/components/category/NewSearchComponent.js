
import {connect} from "react-redux";
import action from "../../react-redux/action.js";
import FetchJsonp  from "fetch-jsonp";

class NewSearchComponent extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            searchList: [],
            frame: 1,
            page: 0,
            sort: "pop",

        }
    }
    componentWillMount(){
        // console.log(this.props.id); //props中的id是一级分类页或者二级分类页通过store传过来的fcid
        // quuerystring中有一个参数名是“_”，它的赋值是一个时间戳，现在给它一个定值结果也是OK的，万一有一天拿不到数据了，考虑换成Date.now()
        var that = this;
        var url = "http://list.meilishuo.com/search?frame=0&page=1&sort=pop&cKey=wap-cate&tag=&maxPrice=&minPrice=&wxPrice=&uq=&_mgjuuid=3933e75f-4c2f-4a4e-8251-69377be0c28d&_=1506137243620";
        url += url+"&fcid="+this.props.id;
        FetchJsonp(url).then(function(res){
            return res.json();
        }).then(function(data){
            // console.log(111, data.data.list);
            that.setState({
                searchList: data.data.list
            })
        })
    }
    render(){
        return (
            <div className="newSearch-box">
                <header>
                    <a className="activeA">流行</a>
                    <a>热销</a>
                    <a>价格</a>
                </header>
                <section>
                    <ul>
                        {this.showSearch.bind(this)()}
                    </ul>
                </section>
            </div>
        )
    }
    ComponentDidMount(){
        // 浏览器滚动条是否处于最低端
        // document.getElementsByClassName("newSearch-box").onscroll = function(){
        //     var st = document.documentElement.scrollTop;
        //     var ch = document.documentElement.clientHeight;
        //     var sh = document.documentElement.scrollHeight;
        //     if( st+ch==sh ){
        //         // 已经处于最低端
        //         console.log(st+ch, sh, "已经处于最低端");
        //         // ajax 获取数据
        //     }
        // }
    }
    showSearch(){
        var {searchList} = this.state;
        var arr = [];
        searchList.forEach(function(item, index){
            var str = "";
            for(var i in item.props){
                str += item.props[i]+" ";
            }
            arr.push(
                <li>
                    <p className="image-logo"><img src={item.show.img}/></p>
                    <p className="ellipsis">{str}</p>
                    <p><span>{item.price}</span><i>{item.orgPrice}</i></p>
                    <p>{item.sale}人已购买</p>
                </li>
            )
        })
        return arr;
    }
}

NewSearchComponent.defaultProps = {}
const mapStateToProps = function(state){return state;}
export default connect(mapStateToProps)(NewSearchComponent);

// http://list.meilishuo.com/search?frame=0&page=1&sort=pop&cKey=wap-cate&tag=&maxPrice=&minPrice=&wxPrice=&uq=&_mgjuuid=3933e75f-4c2f-4a4e-8251-69377be0c28d  &fcid=10064024  &_=1506137243620 &callback=jsonp1


// http://list.meilishuo.com/search? frame=0 &page=1 &sort=pop&cKey=wap-cate&tag=&maxPrice=&minPrice=&wxPrice=&uq=&_mgjuuid=3933e75f-4c2f-4a4e-8251-69377be0c28d&_=1506137243620
// p1
// http://list.meilishuo.com/search? frame=0 &page=1 &sort=pop&cKey=wap-cate&tag=&maxPrice=&minPrice=&wxPrice=&uq=&_mgjuuid=3933e75f-4c2f-4a4e-8251-69377be0c28d&fcid=10064032&_=1506167836346&callback=jsonp1
// p2
// http://list.meilishuo.com/search? frame=1 &page=2 &sort=pop&cKey=wap-cate&tag=&maxPrice=&minPrice=&wxPrice=&uq=&_mgjuuid=3933e75f-4c2f-4a4e-8251-69377be0c28d&fcid=10064032 &trace=0 &cpc_offset=0 &_=1506168590074 &callback=jsonp2
// p3
// http://list.meilishuo.com/search? frame=2 &page=3 &sort=pop&cKey=wap-cate&tag=&maxPrice=&minPrice=&wxPrice=&uq=&_mgjuuid=3933e75f-4c2f-4a4e-8251-69377be0c28d&fcid=10064032 &trace=0 &cpc_offset=0 &_=1506168675443 &callback=jsonp3