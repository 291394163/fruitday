

class FooterComponent extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.state = {

        }
    }
    getActive(hash) {
        let active = this.props.pathname=="/"?"/index/":this.props.pathname
        return hash == active?"active":""
    }
    render() {
        return (
            <footer className="footer-box">
                <a className={this.getActive("/index")} href="#/index">
                    <i className="iconfont icon-shouye"></i>
                    首页
                </a>
                <a className={this.getActive("/category")} href="#/category">
                    <i className="iconfont icon-fenlei"></i>
                    分类
                </a>
                <a className={this.getActive("/cart")} href="#/cart">
                    <i className="iconfont icon-gouwuche-copy"></i>
                    购物车
                </a>
                <a className={this.getActive("/my")} href="#/my">
                    <i className="iconfont icon-home"></i>
                    我
                </a>
            </footer>
        )
    }
}

export default FooterComponent
























