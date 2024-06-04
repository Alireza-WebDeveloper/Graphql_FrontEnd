import { Outlet } from "react-router-dom";
import Header from "../../Components/Common/Header";
import { ThemeProvider } from "../../Components/Common/Config/Theme/index";
import ToggleTheme from "../../Components/Common/Main/ToggleTheme";
import CustomLink from "../../Components/Common/Main/CustomLink";
import Footer from "../../Components/Common/Footer";
import AuthProvider from "../../Components/Common/Config/Auth/Authentication";
import Middleware from "../../Components/Common/Config/middleware";

const Layout = () => {
  return (
    <AuthProvider>
      <Middleware>
        <ThemeProvider>
          <Header>
            <div className="flex gap-10 flex-wrap">
              <CustomLink to="/">home</CustomLink>
              <CustomLink to="/jobs/new">job</CustomLink>
              <CustomLink to="/login">login</CustomLink>{" "}
              <CustomLink to="/product">product</CustomLink>{" "}
              <CustomLink to="/blog">blog</CustomLink>
              <CustomLink to="/news">news</CustomLink>
            </div>
            <ToggleTheme />
          </Header>
          <main className="mt-3 mx-auto container p-2">{<Outlet />}</main>
          <Footer>
            <p>
              Follow us on social media for the latest updates and promotions.
            </p>
          </Footer>
        </ThemeProvider>
      </Middleware>
    </AuthProvider>
  );
};

export default Layout;
