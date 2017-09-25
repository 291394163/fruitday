
import HeaderComponent from "../common/HeaderComponent"
import FetchJsonp from "fetch-jsonp"

// 原网站在网站图片没有加载出来时，也放了一张图片用来占位，这样一来，就避免了结构高度塌陷

class IndexComponent extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            tuangou: {},
            tabType: "pop",
            goodsList: [],
            page: 1
        }
    }
    componentDidMount() {
        let swiper_banners = new Swiper(".swiper-banners", {
            autoplay: 3000,
            autoplayDisableOnInteraction: false,
            loop: true,
            pagination: ".swiper-pagination",
            paginationClickable: true
        })

        this.getPintuanData()
        console.log("DidMount")
        this.getGoodsListData(this.state.page, this.state.tabType)


        let that = this
        let tab = $(".index-box .goods-box__tab-box")
        let header_h = $(".index-box").children("header").height()
            // 监听滚动条滚动事件
        $(".index-box").scroll(function() {
            // tab-box导航栏置顶
            if($(this).scrollTop()>=that.props.tabOffsetTop) {
                tab.addClass("fixed")
            }else {
                tab.removeClass("fixed")
            }
            // 当滚动条拉到底部，继续加载商品
            // 在当前类型的基础上，继续向下一页请求，然后将请求来的商品追加到商品列表后面

            if(($(this).scrollTop()+$(this).height()-header_h)==$(this).children("section").height()) {
                console.log("scroll")
                that.state.page++;
                that.getGoodsListData(that.state.page, that.state.tabType)
            }
        })
    }
    componentWillUpdate() {

    }
    componentDidUpdate() {
        $(".index-box .goods-box__list").css("height", "auto")
        let h = $(".index-box .goods-box__list").height()
        $(".index-box .goods-box__list").css("height", h)
    }
    getGoodsListData(page, hash) {
        // console.log(1)
        if(this.state.tabType != hash) {
            // setState是异步的
            this.setState({
                page: 1
            })
        }
        let that = this
        let url = "http://list.meilishuo.com/search?frame="+ page +"&page="+ page +"&cKey=wap-index&tag=&maxPrice=" +
            "&minPrice=&fcid=&_mgjuuid=abc4b03d-bf57-4dca-b8fe-851c027f4d80&sort="+ hash +"&_=1506170643572"
        FetchJsonp(url).then((res)=>{
            return res.json()
        }).then((json)=>{
            that.setState({
                tabType: hash,
                goodsList: that.state.tabType==hash?that.state.goodsList.concat(json.data.list):json.data.list
            })
        }).catch((ex)=>{
            console.log(ex)
        })
    }
    showGoodsList(list) {
        let arr = []
        list.forEach((item, i)=>{
            arr.push(
                <a href="#">
                    <div className="goods-img-box">
                        <img className="goods-img" src={item.show.img} alt={item.title}/>
                        {
                            item.titleTags?
                                <img className="tag" src={item.titleTags} alt="tag"/>
                                :""
                        }
                    </div>
                    <p className="goods-desc">
                        {item.title}
                    </p>
                    <p className="goods-price-collect">
                        <span className="price">{item.price}</span>
                        <span className="collect">
                        <i className="iconfont icon-shoucang"></i>
                            {item.cfav}
                    </span>
                    </p>
                </a>
            )
        })
        return arr
    }
    getPintuanData() {
        let that = this
        let url1 = "http://mce.mogucdn.com/jsonp/multiget/3?pids=5868%2C6348%2C13730%2C59540%2C42287"
        FetchJsonp(url1).then((res)=>{
            return res.json()
        }).then((json)=>{
            that.setState({
                tuangou: json.data
            })
        }).catch((ex)=>{
            console.log(ex)
        })
    }
    showActivities() {
        let arr = []
        let activities = this.state.tuangou["13730"] || {}
        if(activities.list) {
            activities.list.forEach((item, i)=>{
                arr.push(
                    <a href="#">
                        <img src={item.image} alt={item.title}/>
                        {item.title}
                    </a>
                )
            })
        }
        return arr
    }
    showPintuan() {
        this.getBgImg = (url)=>{
            let obj = {
                backgroundImage: "url("+url+")"
            }
            return obj
        }
        let arr = []
        let pituan = this.state.tuangou["59540"] || {}
        if(pituan.list) {
            pituan.list.forEach((item, i)=>{
                arr.push(
                    <a href="#">
                        <div className="goods-img" style={this.getBgImg(item.image)}>
                            <img src="https://s10.mogucdn.com/mlcdn/c45406/170731_5e428cacel8ffj5197i38136ii525_168x60.png" alt="flag"/>
                        </div>
                        <article>
                            <h4>
                                {item.title}
                            </h4>
                            <p className="price">
                                ￥{item.price}
                            </p>
                            <p className="tuan-info">
                                <span>
                                    {item.ptUserCount}人团·已团{item.pintuanItemSale}件
                                </span>
                                <button>
                                    去开团
                                </button>
                            </p>
                        </article>
                    </a>
                )
            })
        }
        return arr
    }

    render() {
        // console.log(2)
        return (
            <div className="index-box full-height">
                <HeaderComponent/>
                <section>
                    <div className="swiper-container swiper-banners">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <a href="#">
                                    <img src="https://s3.mogucdn.com/mlcdn/c45406/170921_419g0cj5l933d67850c6ggee84k4l_1200x400.jpg" alt=""/>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="#">
                                    <img src="https://s3.mogucdn.com/mlcdn/c45406/170920_66l34009c2j2b2j850872ifjl73c5_1200x400.jpg" alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                    <div className="activity-box">
                        {this.showActivities()}
                    </div>
                    <div className="pintuan-box">
                        <div className="pintuan-box__title-box">
                            <span>超值拼团</span>
                            <a className="pintuan-box__title-box-all">
                                全部拼团
                                <i className="iconfont icon-next"></i>
                            </a>
                        </div>
                        <div className="pintuan-box__list">
                            {this.showPintuan()}
                        </div>
                        <a className="btn-all" href="#">全部超值拼团</a>
                    </div>
                    <div className="goods-box">
                        <div className="goods-box__tab-box">
                            <a onClick={this.getGoodsListData.bind(this, 1, "pop")} className={this.state.tabType=="pop"?"active":""} href="#/index/?tabType=pop">
                                <span>流行</span>
                            </a>
                            <a onClick={this.getGoodsListData.bind(this, 1, "new")} className={this.state.tabType=="new"?"active":""} href="#/index/?tabType=new">
                                <span>新款</span>
                            </a>
                            <a onClick={this.getGoodsListData.bind(this, 1, "sell")} className={this.state.tabType=="sell"?"active":""} href="#/index/?tabType=sell">
                                <span>精选</span>
                            </a>
                        </div>
                        <div className="goods-box__list">
                            {this.showGoodsList(this.state.goodsList)}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

//定义默认属性
IndexComponent.defaultProps = {
    tabOffsetTop: 1011
}


export default IndexComponent

// http://list.meilishuo.com/search?frame=1&page=1&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid
// =&_mgjuuid=abc4b03d-bf57-4dca-b8fe-851c027f4d80&sort=pop&_=1506149282735&callback=jsonp14

// http://list.meilishuo.com/search?frame=2&page=2&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=abc4b03d-bf57-4dca-b8fe-851c027f4d80&sort=pop&trace=0&cpc_offset=0&_=1506149283208&callback=jsonp15

// http://list.meilishuo.com/search?frame=1&page=1&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=abc4b03d-bf57-4dca-b8fe-851c027f4d80&sort=new&_=1506149357320&callback=jsonp16

// http://list.meilishuo.com/search?frame=2&page=2&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=abc4b03d-bf57-4dca-b8fe-851c027f4d80&sort=new&trace=0&cpc_offset=0&_=1506149370750&callback=jsonp17

// http://list.meilishuo.com/search?frame=1&page=1&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=abc4b03d-bf57-4dca-b8fe-851c027f4d80&sort=sell&_=1506148722247&callback=jsonp11

// http://list.meilishuo.com/search?frame=2&page=2&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=abc4b03d-bf57-4dca-b8fe-851c027f4d80&sort=sell&trace=0&cpc_offset=0&_=1506148734270&callback=jsonp12

// http://list.meilishuo.com/search?frame=3&page=3&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=abc4b03d-bf57-4dca-b8fe-851c027f4d80&sort=sell&trace=0&cpc_offset=0&_=1506148739554&callback=jsonp13

























