
import FooterComponent from "./common/FooterComponent"

class RootComponent extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.state = {

        }
    }
    render() {
        return(
            <div className="full-height root-box">
                {this.props.children}
                <FooterComponent pathname={this.props.location.pathname}/>
            </div>
        )

    }
}

export default RootComponent





























