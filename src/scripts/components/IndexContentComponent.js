
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
                <div className="swiper-container">
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
                    <div className="swiper-pagination">

                    </div>
                </div>
            </section>
        )
    }

    componentDidMount() {
        let swiper = new Swiper(".swiper-container", {
            autoplay: 3000,
            autoplayDisableOnInteraction: false,
            loop: true,
            pagination: ".swiper-pagination",
            paginationClickable: true
        })
    }
}


//定义默认属性
IndexContentComponent.defaultProps = {

}

export default IndexContentComponent





















