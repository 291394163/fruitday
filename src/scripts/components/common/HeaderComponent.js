

class HeaderComponent extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.state = {

        }
    }
    render() {
        return (
            <header className="header-box">
                <i className="iconfont icon-logo logo"></i>
                <div className="search-box">
                    <i className="iconfont icon-search"></i>
                    <input type="text" placeholder="套装"/>
                    <i className="del">×</i>
                </div>

                <i className="iconfont icon-xinxi xinxi"></i>
                <i></i>
            </header>
        )
    }
}

HeaderComponent.defaultProps = {

}

export default HeaderComponent
























