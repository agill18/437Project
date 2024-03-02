import { css, html, LitElement, ReactiveElement } from "lit";
import { customElement, state } from 'lit/decorators.js';
import { createContext, provide } from "@lit/context";
import { APIUser, AuthenticatedUser, JSONRequest } from "../rest";
import { Router } from '@vaadin/router';

export let authContext = createContext<APIUser>("auth");

@customElement('auth-container')
export class AuthContainer extends LitElement {
    constructor() {
        super();
        this.addEventListener('state-changed', this.handleUserStateChange);
    }

    @state()
    currentPage: string = 'login';

    @state()
    loginStatus: number = 0;

    @provide({ context: authContext })
    @state()
    user: APIUser = AuthenticatedUser.authenticateFromLocalStorage(() => this._signOut());
    
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

    handleChange(page: string) {
        return () => {
            this.currentPage = page;
            this.requestUpdate();
            console.log(`Page changed to: ${this.currentPage}`);
        };
    }

    render() {
        return html`
            ${!this.isAuthenticated() ? html`<auth-secondary> </auth-secondary>` : ''}          
            <slot></slot>
        `;
    }

    static styles = css`
        :host {
            display: block;
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
    `;

    _toggleDialog(open: boolean) {
        console.log("in toggle dialog");
        const dialog = this.shadowRoot?.querySelector("dialog") as HTMLDialogElement | null;
        console.log("hello dialog", dialog);
        if (dialog) {
            if (open) {
                console.log("Showing dialog");
                dialog.show();
            } else {
                console.log("Closing dialog");
                dialog.close();
            }
        }
        console.log("in end dialog");
    }

    _signOut() {
        this.user = APIUser.deauthenticate(this.user);
        this._toggleDialog(!this.isAuthenticated());
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
    }

    handleUserStateChange(event: any) {
        this.user = event.detail.newState;
        this.requestUpdate();
    }
}

@customElement('auth-secondary')
export class AuthSecondaryContainer extends AuthContainer {
    @state()
    currentPage: string = 'login';

    @state()
    loginStatus: number = 0;

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

    handleChange(page: string) {
        return () => {
            this.currentPage = page;
            this.requestUpdate();
            console.log(`Page changed to: ${this.currentPage}`);
        };
    }

    render() {
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
                    ${this.shouldRenderLogin() ? html`<login-form></login-form>` : ''}
                    ${this.shouldRenderSignup() ? html`<signup-form></signup-form>` : ''}
               </div>             
        `;
    }

    static styles = css`
        :host {
            display: block;
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
    `;

    _toggleDialog(open: boolean) {
        console.log("in toggle dialog");
        const dialog = this.shadowRoot?.querySelector("dialog") as HTMLDialogElement | null;
        console.log("hello dialog", dialog);
        if (dialog) {
            if (open) {
                console.log("Showing dialog");
                dialog.show();
            } else {
                console.log("Closing dialog");
                dialog.close();
            }
        }
        console.log("in end dialog");
    }

    _signOut() {
        this.user = APIUser.deauthenticate(this.user);
        this._toggleDialog(!this.isAuthenticated());
        document.location.reload();
    }
}

@customElement('login-form')
export class LoginForm extends AuthContainer {
    @state()
    errorMessage: string = '';

    render() {
        return html`
            <form id="login" 
                @submit=${this.handleLogin}
                @change=${() => {this.errorMessage = ''}}>
                <label class="field-entry">
                    <span class="field-title"> Cal Poly Email </span>
                    <input
                        class="field-input"
                        type="text"
                        name="email"
                    />
                </label>
                <label class="field-entry">
                    <span class="field-title"> Password </span>
                    <input
                        class="field-input"
                        type="text"
                        name="password"        
                    />
                </label>
                ${this.errorMessage ? html`<render-error> ${this.errorMessage} </render-error>` : ''}
                <input
                    class="login-button"
                    id="loginButton"
                    type="submit"
                    value="Login"
                />
                <a href="/app>"> link </a>
            </form>
        `;
    }

    static styles = css`
        :host {
            display: block;
        }

        #login {
            padding: 0 2rem;
            margin-top: 0rem;
            margin: 0.9rem;
            box-sizing: border-box;
        }

        .field-entry {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
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

        .login-button:hover {
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.4);
            cursor: pointer;
        }
    `;

    handleLogin(ev: Event) {
        ev.preventDefault(); // prevent browser from submitting form data itself

        const form = ev.target as HTMLFormElement;
        const data = new FormData(form);
        const json = Object.fromEntries(data);

        this.login(json);
    }

    login(json: any) {
        const request = new JSONRequest(json);
        console.log("authenticated", this.isAuthenticated());
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
            .then(async (json) => {
                if (json) {
                    console.log("Authentication:", json.token);
                    const authenticatedUser = AuthenticatedUser.authenticate(json.token, () => this._signOut());
                    this.user = AuthenticatedUser.authenticate(json.token, () => this._signOut());
                    Router.go('/app/profile')
                    await this._dispatchUserLoggedIn(authenticatedUser);
                    this.dispatchEvent(new CustomEvent('state-changed', {
                        detail: { newState: this.user },
                        bubbles: true, // Allows the event to bubble up through the DOM
                        composed: true // Allows the event to cross shadow DOM boundaries
                    }));
                    await this.requestUpdate();
                    console.log("authenticated", this.isAuthenticated());
                }
            });
    }
}

@customElement('signup-form')
export class SignupForm extends AuthContainer {
    @state()
    errorMessage: string = '';

    render() {
        return html`
            <form id="signup" 
            @submit=${this.handleSignup}
            @change=${() => {this.errorMessage = ''}}>
                <label class="field-entry">
                    <span class="field-title"> Cal Poly Email </span>
                    <input
                        class="field-input"
                        type="text"
                        name="email"
                    />
                </label>
                <label class="field-entry">
                    <span class="field-title"> Password </span>
                    <input
                        class="field-input"
                        type="text"
                        name="password"        
                    />
                </label>
                ${this.errorMessage ? html`<render-error> ${this.errorMessage} </render-error>` : ''}
                <input
                    class="signup-button"
                    id="signupButton"
                    type="submit"
                    value="Sign Up"
                />
            </form>
        `;
    }

    static styles = css`
        :host {
            display: block;
        }

        #signup {
            padding: 0 2rem;
            margin-top: 0rem;
            margin: 0.9rem;
            box-sizing: border-box;
        }

        .field-entry {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
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

        .signup-button {
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

        .signup-button:hover {
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.4);
            cursor: pointer;
        }
    `;

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
}

@customElement('render-error')
export class RenderError extends LitElement {

    render() {
        return html`
            <div class='error-message'> 
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
    `;
}