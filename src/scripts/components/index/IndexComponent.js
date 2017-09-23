
import HeaderComponent from "../common/HeaderComponent"
import FooterComponent from "../common/FooterComponent"
import FetchJsonp from "fetch-jsonp"

class IndexComponent extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            tuangou: {}
        }
    }
    componentDidMount() {
        let that = this
        let swiper_banners = new Swiper(".swiper-banners", {
            autoplay: 3000,
            autoplayDisableOnInteraction: false,
            loop: true,
            pagination: ".swiper-pagination",
            paginationClickable: true
        })
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
        console.log(this.state.tuangou)
        let activities = this.state.tuangou["13730"]
        console.log(activities)
        // activities.forEach((item, i)=>{
        //     arr.push(
        //         <a href="#">
        //             <img src={item.image} alt={item.title}/>
        //             {item.title}
        //         </a>
        //     )
        // })
        return arr
    }
    render() {
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
                </section>
                <FooterComponent/>
            </div>
        )
    }
}

//定义默认属性
IndexComponent.defaultProps = {

}


export default IndexComponent































