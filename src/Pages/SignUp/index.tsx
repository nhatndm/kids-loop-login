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
import Link from '../../Components/Link';

import { Form, notification } from 'antd';

// STYLE
import { SignUpButtonGroupStyle, SignUpPageStyle } from './SignUp.style';

// APP CONTEXT
import { AppContext } from '../../Context';

// APP ROUTE
import { AppRoute } from '../../Constant';

export interface Login {
  username: string;
  password: string;
}

const SignUpPage: React.FC = () => {
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

    if (errorFieldForForm.length > 0) {
      return form.setFields(errorFieldForForm);
    }

    appContext?.setLoading(true);

    setTimeout(() => {
      appContext?.setLoading(false);
      notification.success({
        message: 'SignUp successfully',
        description:
          'Somthing exciting is waiting for you, Please login to see!',
      });
    }, 2000);
  };

  return (
    <SignUpPageStyle>
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
            Sign Up
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
            <SignUpButtonGroupStyle>
              <Link to={AppRoute.Main}>
                <Text color="primary">You would like to sign in?</Text>
              </Link>
              <FormItem style={{ marginBottom: 0 }}>
                <Button htmlType="submit">Sign Up</Button>
              </FormItem>
            </SignUpButtonGroupStyle>
          </Form>
        </Box>

        <FooterBox />
      </Container>
    </SignUpPageStyle>
  );
};

export default SignUpPage;
