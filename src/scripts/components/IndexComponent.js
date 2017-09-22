
import FooterComponent from "./FooterComponent"
import IndexContentComponent from "./IndexContentComponent"
import store from "../flux/store"
import actions from "../flux/actions"

class IndexComponent extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            isFinished: false,
            position_info: store.getPositionInfo()
        }
    }
    // componentWillMount() {
    //     this.setState({
    //         position_info: actions.getPosition()
    //     })
    // }
    componentDidMount() {
        let that = this
        store.addPositionChangeListener(()=>{
            that.setState({
                position_info: actions.getPositionInfo(),
                isFinished: true
            })
        })
    }
    render() {
        let {position_info} = this.state
        console.log(position_info)
        return (
            <div className="index-box full-height">
                <header>
                    <div className="location-box">
                        {
                            this.state.isFinished?<span>{position_info.address}</span>:<span>定位中...</span>
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































