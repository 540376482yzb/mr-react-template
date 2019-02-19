import React from 'react';
import alertify from 'alertifyjs'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { processLogin } from '../../actions/auth.action'
import './Login.container.css'
import { Loader, SuccessModal } from '../../components/shared'

export class Login extends React.Component {

  state = {
    username: '',
    passcode: '',
    verify: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.processLogin({
      username: this.state.username,
      passcode: this.state.passcode
    }, this.props.history)
  }

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value })
  }

  handleForgetPass = (e) => {
    e.preventDefault();
    alertify.alert('test', 'forget pass');
  }


  render() {
    return (
      <main style={styles.main} className="login-container">
        {/* TODO: connect redux api */}
        {/* {this.props.isLoading && <Loader />} */}
        {/* {<SuccessModal />} */}
        <section className="rounded bg-white p-5" style={styles.loginContainer}>
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label className="d-block">登录用户名</label>
              <input
                required
                type="text"
                className="bg-light border-0 rounded p-2 w-100"
                placeholder="输入用户名"
                name="login" id="username" value={this.state.username} onChange={this.handleChange} />
            </div>
            <div className="mb-3">
              <label className="d-block ">登录密码</label>
              <input
                required
                type="text"
                className="bg-light border-0 rounded p-2 w-100"
                placeholder="输入密码"
                name="login" id="passcode" value={this.state.passcode} onChange={this.handleChange} />
            </div>
            <div className="mb-3">
              <label className="d-block ">验证码</label>
              <input
                required
                type="text"
                className="bg-light border-0 rounded p-2 w-100"
                placeholder="输入验证码"
                name="login" id="verify" value={this.state.verify} onChange={this.handleChange} />
            </div>
            <div>
              <button
                onClick={this.handleForgetPass}
                className="btn btn-link p-0 btn-sm text-green ">忘记密码?</button>
            </div>
            <div className="text-center">
              <button className="btn mr-bg-green text-white  pl-4 pr-4">登录</button>
            </div>
          </form>
        </section>
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.loadReducer.loading,
    isSuccess: state.loadReducer.is_success
  }
}

export default connect(mapStateToProps, {
  processLogin
})(withRouter(Login))



const styles = {
  main: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  loginContainer: {
    minWidth: '320px',
    maxWidth: '540px',
    height: '400px',
    position: 'absolute',
    margin: 'auto',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0'
  }
}