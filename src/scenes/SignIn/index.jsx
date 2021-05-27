import { Button, Form, Input, notification } from "antd";
import { useHistory } from "react-router";
import styles from "./style.module.scss";
import { useMutation } from "@apollo/client";
import { SIGN_IN_ACCOUNT_MUTATION } from "../../data/account/graphql/mutation";
const SignIn = () => {
  const history = useHistory();
  const [signIn, { data }] = useMutation(SIGN_IN_ACCOUNT_MUTATION);

  const onFinish = async (value) => {
    await signIn({ variables: { email: value.email, password: value.password } });
    notification.success({ message: "ログインに成功しました" });
    console.log(data);
    history.push("/");
  };

  return (
    <div className={styles.signInBox}>
      <Form name="normal_login" layout="vertical" className={styles.form} onFinish={onFinish}>
        <h1 className={styles.title}>ログイン</h1>
        <Form.Item
          name="email"
          label="メールアドレス"
          required
          rules={[{ required: true, message: "メールアドレスは必須です" }]}
        >
          <Input placeholder="coadmap@mail.com" />
        </Form.Item>
        <Form.Item
          name="password"
          label="パスワード"
          required
          rules={[
            { required: true, message: "パスワードは必須です" },
            { min: 8, message: "パスワードは8文字以上入力してください" },
          ]}
        >
          <Input.Password placeholder="パスワードを入力" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" block htmlType="submit">
            ログイン
          </Button>
        </Form.Item>
        <Form.Item>
          <Button block onClick={() => history.push("sign_up")}>
            新規登録はこちら
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default SignIn;
