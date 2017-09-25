
class LoginComponent extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {}
    }
    render(){
        return (
            <div className="login-box">
                <header>
                    <a href="#/index"><img  src="http://s17.mogucdn.com/p1/160922/idid_ie3wmnbvgftginzsmizdambqgayde_35x52.png"/></a>
                    <span>登录-美丽说</span>
                    <a href="#/register">注册</a>
                </header>
                <section>
                    <div className="qq-logo"><img src="http://s16.mogucdn.com/p1/150803/upload_ieztmnzwmztdsoddgizdambqgyyde_210x210.png"/></div>
                    <div className="login-info">
                        <p><span>美丽说账号登录</span></p>
                    </div>
                    <div className="form-list">
                        <input type="text" placeholder="昵称/邮箱/手机号"/>
                        <input type="password" placeholder="密码"/>
                        <input type="submit" value="登录"/>
                        <p className="forgetPass"><a>忘记密码？</a></p>
                    </div>
                </section>
            </div>
        )
    }
}
LoginComponent.defaultProps = {}
export default LoginComponent;
