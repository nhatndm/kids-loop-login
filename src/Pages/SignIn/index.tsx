import React, { useContext } from 'react';

// COMPONENT
import Box from '../../Components/Box';
import { Label, Text } from '../../Components/Typography';
import { Input, InputPassword } from '../../Components/Input';
import Button from '../../Components/Button';
import FormItem from '../../Components/FormItem';
import Logo from '../../Components/Logo';
import FooterBox from '../../Components/FooterBox';
import Container from '../../Components/Container';

import { Form, notification } from 'antd';

// STYLE
import { SignInButtonGroupStyle, LoginPageStyle } from './SignIn.style';

// APP CONTEXT
import { AppContext } from '../../Context';

export interface Login {
  username: string;
  password: string;
}

const SignInPage: React.FC = () => {
  const appContext = useContext(AppContext);
  const [form] = Form.useForm();

  const onFinish = (data: Login) => {
    const error: Login = {
      username: '',
      password: '',
    };

    const errorFieldForForm = [];

    if (data.username.trim().length === 0) {
      error.username = 'Username can not be empty';
    }

    const phonePattern = new RegExp(
      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
    );
    const emailPattern = new RegExp(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    const isValidPhone = phonePattern.test(data.username);
    const isValidEmail = emailPattern.test(data.username);

    if (data.username.trim().length > 0 && !isValidPhone && !isValidEmail) {
      error.username =
        'Format is not correct, Ex: 123-456-7890, abc@gmail.com ';
    }

    if (data.password.trim().length === 0) {
      error.password = 'Password can not be empty';
    }

    if (error.username.length > 0) {
      errorFieldForForm.push({
        name: 'username',
        errors: [`${error.username}`],
      });
    }

    if (error.password.length > 0) {
      errorFieldForForm.push({
        name: 'password',
        errors: [`${error.password}`],
      });
    }

    if (isValidEmail && data.username !== 'admin@test.com') {
      error.username = 'We can not find this email';

      errorFieldForForm.push({
        name: 'username',
        errors: [`${error.username}`],
      });
    }

    if (isValidPhone && data.username !== '132-465-7890') {
      error.username = 'We can not find this phone';

      errorFieldForForm.push({
        name: 'username',
        errors: [`${error.username}`],
      });
    }

    if (data.password !== '123456789') {
      error.password = 'Password is not combined with username';

      errorFieldForForm.push({
        name: 'password',
        errors: [`${error.password}`],
      });
    }

    if (errorFieldForForm.length > 0) {
      return form.setFields(errorFieldForForm);
    }

    appContext?.setLoading(true);

    setTimeout(() => {
      appContext?.setLoading(false);
      notification.success({
        message: 'Login successfully',
      });
    }, 2000);
  };

  return (
    <LoginPageStyle>
      <Container
        customStyle={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          maxWidth: 440,
        }}
      >
        <Box>
          <Logo width={60} height={60} />
          <Label
            level={4}
            color="default"
            customStyle={{ marginTop: 10, marginBottom: 20 }}
          >
            Sign In
          </Label>
          <Form
            form={form}
            initialValues={{ username: '', password: '' }}
            onFinish={onFinish}
          >
            <FormItem
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Username is required',
                },
              ]}
            >
              <Input placeholder="Email or Phone *" />
            </FormItem>
            <FormItem
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Password is required',
                },
              ]}
            >
              <InputPassword placeholder="Password *" />
            </FormItem>
            <SignInButtonGroupStyle>
              <Text color="primary">Forgot password?</Text>
              <FormItem style={{ marginBottom: 0 }}>
                <Button htmlType="submit">Sign In</Button>
              </FormItem>
            </SignInButtonGroupStyle>
          </Form>

          <Text color="primary">Create Account</Text>
        </Box>

        <FooterBox />
      </Container>
    </LoginPageStyle>
  );
};

export default SignInPage;
