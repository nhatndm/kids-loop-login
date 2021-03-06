import React, { useContext } from 'react';

// COMPONENT
import Box from '../../Components/Box';
import { Label, Text } from '../../Components/Typography';
import { Input } from '../../Components/Input';
import Button from '../../Components/Button';
import FormItem from '../../Components/FormItem';
import Logo from '../../Components/Logo';
import FooterBox from '../../Components/FooterBox';
import Container from '../../Components/Container';
import Link from '../../Components/Link';

import { Form, notification } from 'antd';

// STYLE
import {
  ForgotPasswordPageStyle,
  ForgotPasswordButtonGroupStyle,
} from './ForgotPassword.style';

// APP CONTEXT
import { AppContext } from '../../Context';

// APP ROUTE
import { AppRoute } from '../../Constant';

export interface ResetPassword {
  username: string;
}

const ResetPasswordPage: React.FC = () => {
  const appContext = useContext(AppContext);
  const [form] = Form.useForm();

  const onFinish = (data: ResetPassword) => {
    const error: ResetPassword = {
      username: '',
    };

    let errorFieldForForm: { name: string; errors: string[] }[] = [];

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

    if (error.username.length > 0) {
      errorFieldForForm.push({
        name: 'username',
        errors: [`${error.username}`],
      });
    }

    if (errorFieldForForm.length > 0) {
      return form.setFields(errorFieldForForm);
    }

    errorFieldForForm = [];

    appContext?.setLoading(true);

    setTimeout(() => {
      appContext?.setLoading(false);

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

      if (errorFieldForForm.length > 0) {
        return form.setFields(errorFieldForForm);
      }

      notification.success({
        message: 'Reset password successfully',
        description:
          'The verification link has been sent to your email, Plese take a look at it!',
      });
    }, 2000);
  };

  return (
    <ForgotPasswordPageStyle>
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
            Reset Password
          </Label>
          <Form
            form={form}
            initialValues={{ username: '' }}
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
            <ForgotPasswordButtonGroupStyle>
              <Link to={AppRoute.Main}>
                <Text color="primary">Remember password?</Text>
              </Link>
              <FormItem style={{ marginBottom: 0 }}>
                <Button htmlType="submit">Reset</Button>
              </FormItem>
            </ForgotPasswordButtonGroupStyle>
          </Form>

          <Link to={AppRoute.SignUp}>
            <Text color="primary">Create Account</Text>
          </Link>
        </Box>

        <FooterBox />
      </Container>
    </ForgotPasswordPageStyle>
  );
};

export default ResetPasswordPage;
