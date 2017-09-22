
class IndexContentComponent extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.state = {

        }
    }

    render() {
        console.log("render")
        return(
            <section>
                <div className="swiper-container swiper-banners">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <a href="#">
                                <img src="https://imgjd2.fruitday.com/images/2017-03-03/6b24de7a7a42699abd07bb812c2d465e.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="#">
                                <img src="https://imgjd2.fruitday.com/images/2017-07-12/ebd7fec3d3b85fb94bb4e64e4f9262fb.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="#">
                                <img src="https://imgjd2.fruitday.com/images/2017-06-13/ad63e67ba3f8f62151dc7de67dae225a.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="#">
                                <img src="https://imgjd2.fruitday.com/images/2017-06-13/ad63e67ba3f8f62151dc7de67dae225a.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="#">
                                <img src="https://imgjd2.fruitday.com/images/2017-06-13/ad63e67ba3f8f62151dc7de67dae225a.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                <div className="navs-box">
                    <a href="#">
                        <i className="iconfont icon-libao"></i>
                        天天有礼
                    </a>
                    <a href="#">
                        <i className="iconfont icon-fuli"></i>
                        企业福利
                    </a>
                    <a href="#">
                        <i className="iconfont icon-gouwudai"></i>
                        进店必buy
                    </a>
                    <a href="#">
                        <i className="iconfont icon-lingliaomohuopintuan-"></i>
                        新品抢鲜
                    </a>
                </div>
                <div className="letters">
                    <div className="text">
                        <img src="/images/letters.png" alt=""/>
                    </div>
                    <div className="swiper-container swiper-letters">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <a href="/detail/index/20737">【已省10元】新西兰皇后红玫瑰苹果 58元/12个</a>
                            </div>
                            <div className="swiper-slide">
                                <a href="/detail/index/9263">【买一送一】智利蓝贻贝 29.9元/500g</a>
                            </div>
                            <div className="swiper-slide">
                                <a href="/detail/index/23177">【加赠4个】新奇士美国瓦伦西亚橙 58元/12+4个</a>
                            </div>
                            <div className="swiper-slide">
                                <a href="/detail/index/20737">【已省10元】新西兰皇后红玫瑰苹果 58元/12个</a>
                            </div>
                            <div className="swiper-slide">
                                <a href="/detail/index/9263">【买一送一】智利蓝贻贝 29.9元/500g</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    componentDidMount() {
        let swiper_banners = new Swiper(".swiper-banners", {
            autoplay: 3000,
            autoplayDisableOnInteraction: false,
            loop: true,
            pagination: ".swiper-pagination",
            paginationClickable: true
        })
        let swiper_letters = new Swiper(".swiper-letters", {
            direction: "vertical"
        })
    }
}


//定义默认属性
IndexContentComponent.defaultProps = {

}

export default IndexContentComponent





















