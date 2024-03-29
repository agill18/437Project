import { css, html, LitElement } from "lit";
import { customElement, state, property } from 'lit/decorators.js';
import { createContext, provide } from "@lit/context";
import { APIUser, AuthenticatedUser, JSONRequest } from "../rest";
import { Router } from '@vaadin/router';
import { USER_EMAIL_KEY } from "../rest"

export let authContext = createContext<APIUser>("auth");

@customElement('auth-container')
export class AuthContainer extends LitElement {
    @state()
    currentPage: string = 'login';

    @state()
    loginStatus: number = 0;

    @state()
    errorMessage: string = '';

    @state()
    isSuccess: boolean = false;

    @provide({ context: authContext })
    @state()
    user: APIUser = AuthenticatedUser.authenticateFromLocalStorage(() => this._signOut());

    @property({type: Boolean})
    passwordVisible = false;

    isAuthenticated() {
        return this.user.authenticated;
    }

    shouldRenderLogin() {
        return this.currentPage === 'login';
    }

    shouldRenderAccountCreated() {
        return this.currentPage === 'accountCreated';
    }

    shouldRenderSignup() {
        return this.currentPage === 'signup';
    }

    getClassnameForPage(page: string) {
        return this.currentPage === page ? 'page active' : 'page';
    }

    render() {
        return html`
            ${!this.isAuthenticated() ? this.renderAuthentication() : ''}          
            <slot></slot>
        `;
    }

    renderAuthentication() {
        // Will block access to any other pages when user is not authenticated
        if (!this.isAuthenticated()) {
            Router.go("/");
        }
        return html`
            <link rel="stylesheet" href="/styles/club-info.css" />
            <link rel="stylesheet" href="/styles/page.css" />
            <link rel="stylesheet" href="/styles/tokens.css" />
            <link rel="stylesheet" href="/styles/reset.css" />
            <div class="authentication-container">
                <div class="gold-strip"> </div>
                <div class="heading"> Cal Poly Clubs </div>
                <div class="pages-container"> 
                    <div class=${this.getClassnameForPage('login')} @click=${this.handleChange('login')}>
                        Log In
                    </div>
                    <div class=${this.getClassnameForPage('signup')} @click=${this.handleChange('signup')}>
                        Sign Up
                    </div>
                </div> 
                ${this.shouldRenderLogin() ? this.renderLogin() : ''}
                ${this.shouldRenderSignup() ? this.renderSignup() : ''}
            </div>        
        `;
    }

    renderLogin() {
        return html`
            <form id="login" 
                @submit=${this.handleLogin}
                @change=${() => {this.errorMessage = ''; this.isSuccess = false;}}>
                <label class="field-entry">
                    <span class="field-title"> Cal Poly Email </span>
                    <input
                        class="field-input"
                        type="email"
                        name="email"
                    />
                </label>
                <label class="field-entry">
                    <span class="field-title"> Password 
                        <svg class="password-icon" @click=${this.togglePassword}>
                            <use href=${this.getTogglePassIcon()} />
                        </svg>
                      </span>
                    <input
                        class="field-input"
                        name="password"   
                        id="id_password"   
                        type="${this.passwordVisible ? 'text' : 'password'}"
                    >                
                </label>
                ${this.errorMessage ? html`<render-error .success=${false}> ${this.errorMessage} </render-error>` : ''}
                <input
                    class="login-button"
                    id="loginButton"
                    type="submit"
                    value="Login"
                />
            </form>
        `;
    }

    renderSignup() {
        return html`
            <form id="signup" 
            @submit=${this.handleSignup}
            @change=${() => {this.errorMessage = ''; this.isSuccess = false;}}>
                <label class="field-entry-2">
                    <span class="field-titl-2"> Name </span>
                    <input
                        class="field-input"
                        type="text"
                        name="name"
                        required
                    />
                </label>
                <label class="field-entry-2">
                    <span class="field-title-2"> Cal Poly Email </span>
                    <input
                        class="field-input"
                        type="email"
                        name="email"
                        required
                    />
                </label>
                <label class="field-entry-2">
                    <span class="field-title-2"> Password 
                        <svg class="password-icon" @click=${this.togglePassword}>
                            <use href=${this.getTogglePassIcon()} />
                        </svg>
                    </span>
                    <input
                        class="field-input"
                        type=${this.passwordVisible ? 'text' : 'password'}
                        name="password"  
                        required      
                    />
                </label>
                ${this.errorMessage ? html`<render-error .isSuccess=${false}> ${this.errorMessage} </render-error>` : ''}
                ${this.isSuccess ? html`
                    <render-error .isSuccess=${true}> 
                        Sucessfully created account. Go to 
                            <a 
                                class='active'
                                @click=${this.handleChange('login')}
                            > 
                                log in 
                            </a>
                    </render-error>` : ''}
                <input
                    class="signup-button"
                    id="signupButton"
                    type="submit"
                    value="Sign Up"
                />
            </form>
        `;
    }

    handleChange(page: string) {
        return () => {
            this.currentPage = page;
            this.errorMessage = '';
            this.requestUpdate();
            console.log(`Page changed to: ${this.currentPage}`);
        }
    }

    _signOut() {
        this.user = APIUser.deauthenticate(this.user);
        document.location.reload();
    }

    _dispatchUserLoggedIn(user: AuthenticatedUser) {
        const userLoggedIn = new CustomEvent("mvu:message", {
            bubbles: true,
            composed: true,
            detail: {
                type: "UserLoggedIn",
                user
            }
        });
        this.dispatchEvent(userLoggedIn);
        const getClubSummaries = new CustomEvent("mvu:message", {
            bubbles: true,
            composed: true,
            detail: {
                type: "GetClubSummaries",
            }
        });
        this.dispatchEvent(getClubSummaries);
    }

    getTogglePassIcon() {
        return this.passwordVisible ? 
                '/icons/user-interface.svg#password-visble' : 
                '/icons/user-interface.svg#password-hidden';
    }

    togglePassword() {
        this.passwordVisible = !this.passwordVisible;
    }

    handleLogin(ev: Event) {
        ev.preventDefault(); // prevent browser from submitting form data itself

        const form = ev.target as HTMLFormElement;
        const data = new FormData(form);
        const json = Object.fromEntries(data);
        this.login(json, json.email);
    }

    login(json: any, email: any) {
        const request = new JSONRequest(json);
        request
            .base()
            .post("/login")
            .then((response) => {
                if (response.status === 200) {
                    console.log('Successfully logged in');
                    return response.json();
                } else if (response.status === 401) {
                    console.log('Failed to login, invalid credentials');
                    this.errorMessage = 'Failed to login. Invalid credentials';
                } else {
                    console.log('Failed to login. Internal Server Error.');
                    this.errorMessage = 'Failed to login. Internal Server Error'; 
                }
            })
            .then((json) => {
                if (json) {
                    console.log("Authentication:", json.token);
                    const authenticatedUser = AuthenticatedUser.authenticate(json.token, () => this._signOut());
                    this.user = AuthenticatedUser.authenticate(json.token, () => this._signOut());
                    localStorage.setItem(USER_EMAIL_KEY, email);
                    Router.go('/app')
                    this._dispatchUserLoggedIn(authenticatedUser);
                    this.requestUpdate();
                }
            });
    }

    handleSignup(ev: Event) {
        ev.preventDefault(); // prevent browser from submitting form data itself

        const form = ev.target as HTMLFormElement;
        const data = new FormData(form);
        const json = Object.fromEntries(data);
        
        this.signup(json);
    }

    signup(json: any) {
        const request = new JSONRequest(json);
        request
            .base()
            .post("/signup")
            .then(async (response) => {
                if (response.status === 201) {
                    console.log('Successfully registered new account');
                    this.isSuccess = true;
                    return response.json();
                } else {
                    console.log('Failed to create new account.');
                    this.errorMessage = await response.text();
                }
            })
            .then((json) => {
                console.log("Registration:", json);
            });
    }

    static styles = css`
        :host {
            display: block;
        }

        svg.password-icon {
            right: 3rem;
            font-weight: var(--font-weight-extra-bold);
            width: 2rem;
            height: 1.5rem;
            fill: var(--color-accent);
            position: absolute;
            margin-top: 2.2rem;
        }

        .authentication-container {
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
            box-sizing: border-box; // Padding and border included in the element's total width and height
            display: table-cell;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 26rem;
            position: absolute;
            height: 28rem;
        }

        .heading {
            font-size: 2rem;
            font-weight: var(--font-weight-extra-bold);
            margin-top: 3rem;
            margin-bottom: 1.5rem;
            display: flex;
            justify-content: center;
        }

        .pages-container {
            font-size: var(--size-type-smallest-body);
            display: inline-flex;
            margin-bottom: 1.3rem;
            display: flex;
            justify-content: center;
        }

        .gold-strip {
            padding-left: 0rem;
            width: 26rem;
            height: 3%;
            background-color: var(--color-background-header);
        }

        .page {
            margin: 0rem 1.75rem;
            cursor: pointer;
        }

        .page.active {
            font-weight: var(--font-weight-extreme-bold);
            text-decoration: underline;
        }

        .active {
            font-weight: var(--font-weight-extreme-bold);
            text-decoration: underline;
            cursor: pointer;
        }

        #login, #signup {
            padding: 0 2rem;
            margin-top: 0rem;
            margin: 0.9rem;
            box-sizing: border-box;
        }

        .login-button {
            box-sizing: border-box;
            display: block;
            bottom: 2.7rem;
            position: fixed;
            width: 77.8%;
            padding: 0.6rem;
            border: none;
            background-color: var(--color-background-header);
            color: white;
            font-weight: var(--font-weight-extra-bold);
        }

        .signup-button {
            box-sizing: border-box;
            display: block;
            bottom: 1rem;
            position: fixed;
            width: 77.8%;
            padding: 0.6rem;
            border: none;
            background-color: var(--color-background-header);
            color: white;
            font-weight: var(--font-weight-extra-bold);
        }

        .login-button:hover, .signup-button:hover {
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.4);
            cursor: pointer;
        }

        .error-message {
            color: red;
            font-size: var(--size-type-small-body);
            padding-bottom: 0.6rem;
        }

        .field-entry {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        .field-entry-2 {
            padding-bottom: 0.6rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        .field-title {
            display: block;
            padding-bottom: 0.3rem;
            font-weight: var(--font-weight-light-bold);
            font-size: var(--size-type-small-body);
        }

        .field-title-2 {
            display: block;
            padding-bottom: 0.1rem;
            font-weight: var(--font-weight-light-bold);
            font-size: var(--size-type-small-body);
        }

        .field-input {
            box-sizing: border-box;
            display: block;
            padding: 0.6rem;
            font-weight: purple;
            border: none;
            color: var(--color-text);
            background-color: var(--color-input);
            width: 100%;
        }

        .field-input:focus {
            border: 0.1rem solid var(--color-text);
            outline: var(--color-text);
        }

        .field-input:hover {
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.4);
            outline: none;
        }
    `;
}

@customElement('render-error')
export class RenderError extends LitElement {
    @property({type: Boolean})
    isSuccess: boolean = false;

    getClassnameForPage() {
        return !this.isSuccess ? 'error-message' : 'success-message';
    }

    render() {
        return html`
            <div class=${this.getClassnameForPage()}> 
                <slot> Error </slot>
            </div>
        `
    }

    static styles = css`
        :host {
            display: block;
        }

        .error-message {
            color: red;
            font-size: var(--size-type-small-body);
            padding-bottom: 0.6rem;
        }

        .success-message {
            color: var(--color-background-header);
            font-size: var(--size-type-small-body);
            padding-bottom: 0.6rem;
        }
    `;
}