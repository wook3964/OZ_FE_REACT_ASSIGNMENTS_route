import "./App.css";
import headerStyle from "./assets/styles/header.module.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
/* Layout 컴포넌트
*/
function Layout() {
  return (
    <>
      <header className={headerStyle.header}>
        <div>Router Practice</div>
        <div className={headerStyle.headerLinks}>
          {/* 여기에 Link 컴포넌트를 할당하세요. */}
    {/* 1. /home으로 라우팅할 수 있는 <Link/>를 선언하세요. */}
          <Link to="/home">Home</Link>
    {/* 2. /about으로 라우팅할 수 있는 <Link/>를 선언하세요. */}
          <Link to="/about">About</Link>
    {/* 3. /contact으로 라우팅할 수 있는 <Link/>를 선언하세요. */}
          <Link to="/contact">Contact</Link>
    {/* 4. 정의되지 않은 주소로 라우팅할 수 있는 <Link/>를 선언하세요.
    4-1. 무작위 경로를 할당하거나, Math.random()을 활용할 수 있습니다. */}
          <Link to={Math.random()}>Random</Link>
        </div>
      </header>
      {/* 5. Layout 컴포넌트는 "모든" 컴포넌트에서 보여야 합니다. <Outlet/>를 추가하세요. */}
      {/* 이곳에 Outlet을 할당하세요. */}
      <main>
        <Outlet />
      </main>
    </>
  );
}

/* App 컴포넌트
*/
const HomePage = () => <div>Home Page</div>;
const AboutPage = () => <div>About Page</div>;
const ContactPage = () => <div>Contact Page</div>;
const ErrorPage = () => <div>Error Page</div>;

function App() {
  return (
    // 1. 모든 라우팅을 감싸는 BrowserRouter를 선언하세요.
    <BrowserRouter>
    {/* 2. Routes를 선언하세요. */}
    <Routes>
    {/* 3. 모든 라우팅에서 보이는 Layout의 Route를 선언하세요. */}
      <Route path="/" element={<Layout />}>
    {/* 4. / 라우팅에서 보이는 <HomePage/> 컴포넌트를 라우팅에 연결하세요. */}
        <Route index element={<HomePage />} />
    {/* 5. /home 라우팅에서 보이는 <HomePage/> 컴포넌트를 라우팅에 연결하세요. */}
        <Route path="home" element={<HomePage />} />
    {/* 6. /about 라우팅에서 보이는 <AboutPage/> 컴포넌트를 라우팅에 연결하세요. */}
        <Route path="about" element={<AboutPage />} />
    {/* 7. /contact 라우팅에서 보이는 <ContactPage/> 컴포넌트를 라우팅에 연결하세요. */}
        <Route path="contact" element={<ContactPage />} />
    {/* 8. /* 모든 잘못된 라우팅에서 보이는 <ErrorPage/> 컴포넌트를 라우팅에 연결하세요. */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>  
  </BrowserRouter>
  )
}

export default App;
