import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Grid, Header, Form, Button, Message } from "semantic-ui-react";
import { authService } from "../services/auth-service";
import { useDispatch, useSelector } from "react-redux";
import { logUserIn } from "../store/user/actions";
import { isAuthenticated } from "../store/user/selectors";

export function LoginRoute() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(isAuthenticated);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  async function handleLoginClick() {
    setError(null);
    setLoading(true);

    const result = await authService.authenticate(email, password);

    setLoading(false);

    if (!result.success) {
      setError(result.message);
    } else {
      dispatch(logUserIn(result.user, result.token));
    }
  }

  return (
    <>
      {isLoggedIn ? (
        <Redirect to="/" />
      ) : (
        <Grid.Row centered>
          <Grid.Column width={6}>
            <Form>
              <Header as="h1">Log in</Header>
              <Form.Field>
                <label>E-mail</label>
                <input
                  placeholder="E-mail"
                  value={email}
                  onChange={handleEmailChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Form.Field>
              <Button
                type="submit"
                onClick={handleLoginClick}
                loading={loading}
              >
                Log in
              </Button>
            </Form>
            {error ? <Message color="red">{error}</Message> : null}
          </Grid.Column>
        </Grid.Row>
      )}
    </>
  );
}
