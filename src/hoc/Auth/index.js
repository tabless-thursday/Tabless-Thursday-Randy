import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

const Auth = component =>
	class extends Component {
		constructor() {
			super();

			this.state = {
				loggedIn: null,
			};
		}

		componentDidMount() {
			if (localStorage.getItem('user')) {
				this.setState({
					loggedIn: true,
				});
			} else {
				this.setState({
					loggedIn: false,
				});
			}
		}

		// authenticateUser = () => {
		// 	if (this.state.loggedIn === false) {
		// 		return this.props.history.push('/');
		// 	} else {
		// 		return <div>{props.children}</div>;
		// 	}
		// };

		render() {
			return (
				<div>
					{this.state.loggedIn === true ? (
						<component {...this.props} />
					) : (
						<component />
					)}
				</div>
			);
		}
	};

export default withRouter(Auth);

// export function requireAuthentication(Component) {

// 	class AuthenticatedComponent extends React.Component {

// 			componentWillMount() {
// 					this.checkAuth();
// 			}

// 			componentWillReceiveProps(nextProps) {
// 					this.checkAuth();
// 			}

// 			checkAuth() {
// 					if (!this.props.isAuthenticated) {
// 							let redirectAfterLogin = this.props.location.pathname;
// 							this.props.dispatch(pushState(null, `/login?next=${redirectAfterLogin}`));
// 					}
// 			}

// 			render() {
// 					return (
// 							<div>
// 									{this.props.isAuthenticated === true
// 											? <Component {...this.props}/>
// 											: null
// 									}
// 							</div>
// 					)

// 			}
// 	}

// 	const mapStateToProps = (state) => ({
// 			token: state.auth.token,
// 			userName: state.auth.userName,
// 			isAuthenticated: state.auth.isAuthenticated
// 	});

// 	return connect(mapStateToProps)(AuthenticatedComponent);

// }

// import {HomeView, LoginView, ProtectedView} from '../views';
// import {requireAuthentication} from '../components/AuthenticatedComponent';

// export default(
//     <Route path='/' component={App}>
//         <IndexRoute component={HomeView}/>
//         <Route path="login" component={LoginView}/>
//         <Route path="protected" component={requireAuthentication(ProtectedView)}/>
//     </Route>
// );
