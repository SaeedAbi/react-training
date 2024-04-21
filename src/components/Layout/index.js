import Content from "../Content";
import Side from "../Side";
import Footer from "../Footer";
import Header from "../Header";

export function Layout({ children, titleHeader }) {
  return (
    <div className={"flex flex-col w-screen h-screen"}>
      <div className='flex-grow-0 flex-shrink-0">'>
        <Header title={titleHeader} />
      </div>
      <div className={"flex flex-row flex-grow flex-shrink"}>
        <div>
          <Side />
        </div>
        <div className={"flex flex-col w-full"}>
          <Content>{children}</Content>
          <Footer />
        </div>
      </div>
    </div>
  );
}
