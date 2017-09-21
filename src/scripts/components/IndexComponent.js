
import FooterComponent from "./FooterComponent"
import IndexContentComponent from "./IndexContentComponent"
import getPosition from "../modules/getPosition"

class IndexComponent extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            isFinished: false,
            postion: {}
        }
    }
    componentWillMount() {
        console.log(2)
        getPosition((position_info)=>{
            console.log(position_info)
        })
    }
    render() {
        return (
            <div className="index-box full-height">
                <header>
                    <div className="location-box">
                        {
                            this.isFinished?<span>上海</span>:<span>定位中...</span>
                        }
                        <i className="iconfont icon-xiala"></i>
                    </div>
                    <div className="search-box">
                        <i className="iconfont icon-search"></i>
                        <span>新鲜水果、生鲜</span>
                    </div>
                </header>
                <IndexContentComponent/>
                <FooterComponent/>
            </div>
        )
    }
}

//定义默认属性
IndexComponent.defaultProps = {

}


export default IndexComponent































