

class FooterComponent extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.state = {

        }
    }
    render() {
        return (
            <div className="footer-box">
                <a className="active" href="#">
                    <i className="iconfont icon-shouye"></i>
                    首页
                </a>
                <a href="#">
                    <i className="iconfont icon-fenlei"></i>
                    分类
                </a>
                <a href="#">
                    <i className="iconfont icon-gouwuchekong"></i>
                    购物车
                </a>
                <a href="#">
                    <i className="iconfont icon-home"></i>
                    我的果园
                </a>
            </div>
        )
    }
}

export default FooterComponent
























